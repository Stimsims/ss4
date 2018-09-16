import React from 'react';
import Store from './PersistStore.jsx';
import {createFileWithJSONContent} from './../../utilities/fileUtils.js';
import {Link} from 'react-static';
import {buildFiles, getSavedGameIds, getLocalhostIterator} from './../../utilities/localStorageUtils.js';
import {connect} from 'react-redux';
import {listFilesByAppProp, getFile} from './../apis/DriveInterface.js';
import IconButton from './../UI/elements/IconButton.jsx';
import LoadGameView from './LoadGameView.jsx';
import Game from './Game';

if (typeof window === 'undefined') {
    global.window = {}
}

function getStoreName(game, id){
    return `${game}-${id}`
}

function getMetaName(meta, game, id){
    return `${meta}:${game}-${id}`
}
const DATE = 'date',
      DESC = 'desc',
      DRIVE_FILE_KEY = 'game',
      DRIVE_FILE_PROP_ID = 'gameId',
      SAVE_NAMES = ['rose','violet','lilly'];
class Load extends React.Component{
    constructor(props){
        super(props);
        console.log("website game Load constructor props", props);
        this.onNewGame = this.onNewGame.bind(this);
        this.onLoadGame = this.onLoadGame.bind(this);
        this.syncSaves = this.syncSaves.bind(this);

        this.state = {
            id: null,
            local: [],
            synced: false,
            syncing: false,
            log:[]
        }
    }

    componentDidMount(){
        this.registerMenuButtons(this.state.fileId);
        this.setState({
            local: this.getLocalSaves()
        })
    }
    getLocalSaves(){
        let regexp = `${this.props.id}-(${SAVE_NAMES.join('|')})$`;
        console.log('getLocalSaves regex ' + regexp);
        let ids = getSavedGameIds(getLocalhostIterator(), new RegExp(regexp), (file)=>{
            let parts = file.split("-");
            return parts[1];
        })
        console.log("Load getSavedGameIds ", ids);
        let files = buildFiles(ids, [
            {
                key: 'date',
                getName: (id) => {getMetaName(DATE,this.props.id, id)}
            },
            {
                key: 'desc',
                getName: (id) => {getMetaName(DESC,this.props.id, id)}
            }
        ], {hello: 'world'});
        console.log("Load getLocalFiles ", files);
        return files;

    }
    componentWillUnmount(){
        if(this.props.fileId){
            this.saveLocalMeta();
            this.saveGame(this.props.fileId);
        }
    }
    componentDidUpdate(prevProps, prevState){
       // console.log("should sync saves? is gapi sighned in? " + this.props.gapi.isSignedIn + " is it syncing? " + this.state.syncing);
        if(this.props.gapi.isSignedIn && !this.state.synced && !this.state.syncing){
               //this.syncSaves();
        }
        if(prevState.fileId !== this.state.fileId){
            this.registerMenuButtons(this.state.fileId)
        }
    }

    

    saveGame(fileId, driveId /* if null, must retrieve*/){
        //get list of files with gamename: this.props.game
        //let filename = getStoreName(this.props.gamename, SAVE_NAME);
        if(driveId){
            this.uploadFile(driveId, fileId);
        }else{
            let filename = getStoreName(this.props.id, fileId);
            //console.log("saving game to drive name " + filename);           
            listFilesByAppProp(DRIVE_FILE_KEY, [filename])
            .then((response) => {
                    let list = response.result.files;
                    //console.log("saving game, drive files found: " + list.length);
                    if(list){
                        let id = list[0]?list[0].id:null;
                        //if file exists, patch it g4:35d7c7bc-8d4d-0686-55f7-29e91a41175e:date
                        // let updatedfile = localStorage.getItem('persist:g4-35d7c7bc-8d4d-0686-55f7-29e91a41175e')
                        this.uploadFile(id, fileId);
                        this.syncFinished();
                    }
                }
            )
            .catch(e => {
                this.state.log.push(`failed to upload to cloud`);
                console.error('failed to upload save game', e);
                this.syncFinished();
            })
        }
    }
    uploadFile(driveId, fileId){
        let localStorage = window.localStorage;
        let filename = getStoreName(this.props, fileId);
        let updatedfile = localStorage.getItem('persist:' + filename)
      //  console.log("saving game updated file from local", updatedfile);
        //TODO break into json file maker, and http request builder
        this.state.log.push(`building file request for cloud upload`);
        try{
            createFileWithJSONContent(driveId, filename, 
            [{key: DRIVE_FILE_KEY, value: filename}, {key: DRIVE_FILE_PROP_ID, value: fileId}],
            updatedfile);
        //    console.log("uploadFile successfully");
        }catch(e){
            console.error("uploadFile failed",e);
        }
        
    }

    syncSaves(id, overwriteLocal /* optional */){
        //this method initiates interaction with drive, check if is online before performing
        //list files, compare modifiedDates, use id to download google drive file, place in localstorage
        console.log('syncSaves for id ' + id, this);
        if(id){
            this.state.log.push('beginning sync with google drive to fetch save files');
            this.setState({
                syncing:true
            })
                //let localStorage = window.localStorage;
            let names = Array.isArray(id)? id.map(n => {
                return getStoreName(this.props.id, n);
            }): [id];
            console.log('syncsaves names', names);
            listFilesByAppProp(DRIVE_FILE_KEY, names)
            .then((response) => {
                    console.log("load syncSaves response", response);
                    let list = response.result.files;
                    
                    //console.log("loadinggame, drive files found: " + list.length);
                    this.state.log.push(`recieved ${list.length} files`);
                    if(list){
                        if(list.length === 0){
                            //first time uploading to cloud
                            this.state.log.push(`0 files found on drive, uploading new game ${this.state.fileId} to cloud for first time`);
                            this.saveGame(this.state.fileId);
                        }
                        list.map(item =>{
                            console.log('syncSave: comparing file ', item);
                            //extract driveId, and gameId
                            let driveId = item.id;
                            let gameId = item.appProperties[DRIVE_FILE_PROP_ID];
                            let gameName = item.appProperties[DRIVE_FILE_KEY];
                            this.state.log.push(`comparing file driveId: ${driveId} gameId: ${gameId} gameName: ${gameName}`);
                           // console.log(`syncSave comparing file driveId: ${driveId} gameId: ${gameId} gameName: ${gameName}`);
                            //let file = this.downloadSave(item);
                        
                            if(overwriteLocal && this.isLocalLater(item)){
                            //  console.log("drive file modified later than local file, downloading");
                                this.state.log.push(`most recent file is ahead of local file, overwriting local file`);
                                getFile(item.id).then(res => {
                                //  console.log('syncSave test downloaded file  for ' +gameName, res);
                                    this.overwriteLocalSave(gameId, gameName, res.result);
                                }).catch(e => {
                                    //console.log('syncSaves getFile catch block error', e);
                                    this.state.log.push(`failed to retrieve file ` + driveId);
                                    throw new Error('error during getFile call to google drive', e);
                                })
                            }else{
                            // console.log("local file is later than drive file, uploading to cloud");
                                this.state.log.push(`most recent file is behind local file, overwriting cloud file`);
                                this.saveGame(gameId, driveId);    
                            }
                        })
                    }else{
                        throw new Error('syncing failed, no load games found');
                    }
            })
            .catch((err) => {
                console.log("syncSaves catch block called, throwing error", err);
                this.syncFinished();
            })
        }else{
            console.warn('will not sync when fileId is undefined');
        }   
    }
    syncFinished(){
        this.state.log.push(`syncing finished`);
        this.setState({
            syncing:false,
            synced: true,
            log: [
                ...this.state.log
            ]
        })
    }
    isLocalLater(driveFile){
        let localStorage = window.localStorage;
        //console.log("isLocalLater? driveFile: ", driveFile);
        //get value for property gamename on driveFile
        let id = driveFile.appProperties[DRIVE_FILE_PROP_ID];
       // console.log("isLocalLater? driveFile id ", id);
        let driveDate = new Date(driveFile.modifiedTime);
        let localTime = localStorage.getItem(getMetaName(DATE, this.props.id, id));
       // console.log(`isLocalLater driveTime ${this.displayDate(driveFile.modifiedTime)} localTime ${this.displayDate(localTime)}`)
        console.log("is drive.getTime " + driveDate.getTime() +" less than local time? " + localTime 
        + " -> " + (driveDate.getTime()<localTime))
        return driveDate.getTime()>localTime;
    }
    displayDate(time){
        return new Date(time).toUTCString();
    }

    overwriteLocalSave(id, gameName, body){
        let localStorage = window.localStorage;
        let stringed = JSON.stringify(body);
        localStorage.setItem('persist:' + gameName, stringed);
        this.saveLocalMeta(id);
        console.log(`local save ${gameName} successfully overwritten`, stringed);
        this.setState({
            syncing:false,
            synced: true,
            saveConflict: null,
            error: null
        })
    }
    onNewGame(id){
        //this.saveLocalMeta();
        //game will be persisted to cloud on close
        //new game and load game set the filename of the game to be played
        let filename = getStoreName(this.props.id, id);
        console.log("load new game id: "+id+" name: " + filename);
        this.saveLocalMeta(id);
        this.setState({
            //filename: getStoreName(this.props.gamename, SAVE_NAME)
            filename,
            fileId: id,
            local: this.getLocalSaves()
        })
        this.registerMenuButtons(id);
        // this.props.registerMenuItem({
        //     key: 'sync',
        //     component: <IconButton icon={'sync'} round={true}  onInput={()=>{this.syncSaves(id)}}/>
        // })
        //this.saveGame(id);
    }
    
    saveLocalMeta(id){
        let date = new Date();
        console.log("saveLocalMeta new game name: " + id + " date: " + date.getTime());
        let localStorage = window.localStorage;
        //save metadata locally
        localStorage.setItem(getMetaName(DATE, this.props.id, id), date.getTime());
        localStorage.setItem(getMetaName(DESC, this.props.id, id), 'a game description');
    }
    onLoadGame(id){
        //use game + id as filename, set as filename
        let filename = getStoreName(this.props.id, id);
        console.log("load load game "+id+" name: " + filename);
        this.setState({
            filename,
            fileId: id
        })
        this.registerMenuButtons(id);
    }
    registerMenuButtons(fileId){
        if(fileId){
            this.props.registerMenuItem([
                {
                    key: 'sync',
                    id: 'none',
                    position: 'right',
                    component: <IconButton className={'no-fileId'} key={'none'} text="sync" round={true} icon="sync" disabled />
                },
                {
                    key: 'cloud',
                    position: 'right',
                    component: <IconButton key={'cloud'} round={true} icon="cloud" text="upload" onInput={()=>{
                        //console.log('load sync save button clicked! ' + fileId);
                        this.syncSaves(fileId, false)
                    }}/>
                },
                {
                    key: 'back',
                    position: 'left',
                    component: <IconButton key={'back'} round={true} icon="back" onInput={()=>{
                        console.log(`website game menu back button pressed`);
                        this.setState({
                            fileId: null, filename: null
                        })
                    }}/>
                }
            ])
        }else{
            this.props.registerMenuItem([
                {
                    key: 'sync',
                    id: fileId,
                    position: 'right',
                    component: <IconButton className={'fileId'} key={fileId} round={true} text="sync" icon="sync" onInput={()=>{
                        //console.log('load sync save button clicked! ' + fileId);
                        this.syncSaves(SAVE_NAMES, true)
                    }}/>
                },
                {
                    key: 'cloud',
                    position: 'right',
                    component: <IconButton key={'cloud'} round={true} icon="cloud" text="upload" disabled/>
                },
                {
                    key: 'back',
                    position: 'left',
                    component: <Link to={'/games'}><IconButton key={'back'} round={true} icon="back" /></Link>
                }
            ])
        }
    }
    render(){
        console.log(`website game load filename ${this.state.filename}`, this.state);
        if(this.state.filename){
            //savefile={this.state.filename}
            return(
                <Store savefile={this.state.filename} reducers={this.props.reducers}>
                    {/* <button onClick={() => {
                        this.saveGame(this.state.fileId);
                        }}>
                            save game to drive
                        </button>
                        <button onClick={() => {
                        this.saveLocalMeta(this.state.fileId);
                        }}>
                            save local metadata
                        </button> */}
                    {this.props.children}
                </Store>
              )
        }else{
            return(
                <LoadGameView syncing={this.state.syncing} saves={this.state.local} log={this.state.log} 
                        onNewGame={(id)=>{this.onNewGame(id)}} onLoadGame={(id)=>{this.onLoadGame(id)}} names={SAVE_NAMES} />
            )
        }

    }
    
}

const mapStateToProps = (state) => {
    return {
        gapi: state.gapi
    }
}

Load.displayName = 'Load';
export default connect(mapStateToProps)(Load);