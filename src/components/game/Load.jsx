import React from 'react';
import Store from './PersistStore.jsx';
import {createFileWithJSONContent} from './../../utilities/fileUtils.js';
import {connect} from 'react-redux';


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
      SAVE_NAME = 'A',
      DRIVE_FILE_KEY = 'gamename';
class Load extends React.Component{
    constructor(props){
        super(props);
        console.log("Load constructor props", props);
        this.onNewGame = this.onNewGame.bind(this);
        this.onLoadGame = this.onLoadGame.bind(this);
        this.getLocalFiles = this.getLocalFiles.bind(this);
        //this.getDriveFiles = this.getDriveFiles.bind(this);
        //this.uploadFile = this.uploadFile.bind(this);
        this.listSaveFiles = this.listSaveFiles.bind(this);
        this.state = {
            id: null,
            local: {},
            synced: false,
            syncing: false
        }
    }
    componentDidMount(){
        this.getLocalFiles();
    }
    componentWillUnmount(){
        this.saveLocalMeta();
        this.saveGame();
    }
    componentDidUpdate(prevProps, prevState){
        console.log("should sync saves? is gapi sighned in? " + this.props.gapi.isSignedIn + " is it syncing? " + this.state.syncing);
        if(this.props.gapi.isSignedIn && !this.state.synced && !this.state.syncing){
               this.syncSaves();
        }
    }
    getLocalFiles(){
        let localStorage = window.localStorage;

        let query = new RegExp("(" + this.props.gamename + "-A)");
        let results = [];
        for (var i in localStorage) {
            if (localStorage.hasOwnProperty(i)) {
            if (i.match(query)) {
                results.push({key:i,val:localStorage.getItem(i)});
            }
            }
        }
        //extract id from file string
        let ids = results.map(f => {
            let parts = f.key.split("-");
            return parts[1];
        });
        console.log("local ids", ids);
        if(ids){
            //put ids into state.local, pointing to obj with keys for date and desc getMetaName(meta, game, id)
            let local = {};
            ids.map(id => {
                if(!local[id]){
                    local[id] = {
                        date: localStorage.getItem(getMetaName(DATE,this.props.gamename, SAVE_NAME)),
                        desc: localStorage.getItem(getMetaName(DESC,this.props.gamename, SAVE_NAME))
                    }
                }
            })
            this.setState({
                local
            })
            console.log("local meta", local);
        }

    }
    
      onNewGame(){
        this.saveLocalMeta();
        //game will be persisted to cloud on close
        //new game and load game set the filename of the game to be played
        this.setState({
            filename: getStoreName(this.props.gamename, SAVE_NAME)
        })
    }
    saveLocalMeta(){
        let date = new Date();
        console.log("new game name: " + SAVE_NAME + " date: " + date.getTime());
        let localStorage = window.localStorage;
        //save metadata locally
        localStorage.setItem(getMetaName(DATE, this.props.gamename, SAVE_NAME), date.getTime());
        localStorage.setItem(getMetaName(DESC, this.props.gamename, SAVE_NAME), 'a game description');
    }
    saveGame(){
        //get list of files with gamename: this.props.game
        let filename = getStoreName(this.props.gamename, SAVE_NAME);
        console.log("saving game to drive name " + filename);
        if(this.props.gapi.isSignedIn){
            let localStorage = window.localStorage;
            console.log("retrieved localStorage obj from window");
            let list = this.listSaveFiles().then(
                function(response) {
                    let list = response.result.files;
                    console.log("saveGame response", response);
                    console.log("saving game, drive files found: " + list.length);
                    if(list){
                        let id = list[0]?list[0].id:null;
                        //if file exists, patch it g4:35d7c7bc-8d4d-0686-55f7-29e91a41175e:date
                        // let updatedfile = localStorage.getItem('persist:g4-35d7c7bc-8d4d-0686-55f7-29e91a41175e')
                        let updatedfile = localStorage.getItem('persist:' + filename)
                        console.log("saveGame updated file from local", updatedfile);
                        createFileWithJSONContent(list.length <=0, id, filename, updatedfile, 
                            (res) => {console.log("create file with json callback", res)}, 
                            DRIVE_FILE_KEY)
                        console.log("saveGame successfully updated file");
                    }
                }.bind(this)
            );
        }else{
            console.log("saveGame ERROR, unable to upload to drive, not signed in");
        }
    }
    listSaveFiles(){
        /*
            'q': "mimeType contains 'application/json'",
            'fields': "files(id, name, mimeType, modifiedTime)"
            'q': "appProperties has { key='gamename' and value='witcher' }"
        */
       console.log(`listing game files key='${DRIVE_FILE_KEY}' and value='${this.props.gamename}'`);
        return gapi.client.drive.files.list({
            'q': `appProperties has { key='${DRIVE_FILE_KEY}' and value='${this.props.gamename}' }`,
            'fields': "files(id, name, mimeType, modifiedTime)"
        })
    }
    getFile(id){
        return gapi.client.drive.files.get({
            fileId: id,
            alt: 'media',
            fields: "id, name, mimeType, modifiedTime"
          })
    }
    syncSaves(){
        //list files, compare modifiedDates, use id to download google drive file, place in localstorage
        this.setState({
            syncing:true
        })
        let localStorage = window.localStorage;
        this.listSaveFiles().then(
            function(response) {
                let list = response.result.files;
                console.log("loadGame response", response);
                console.log("loadinggame, drive files found: " + list.length);
                if(list && list.length > 0){
                    let driveTime = list[0].modifiedTime;
                    //let localTime = localStorage.getItem('g4:35d7c7bc-8d4d-0686-55f7-29e91a41175e:date');
                    let localTime = localStorage.getItem(getMetaName(DATE, this.props.gamename, 'A'));
                  //  let localDate = new Date(localTime);
                    let driveDate = new Date(driveTime);
                    console.log("driveTime " + driveTime, driveDate)
                    //console.log("localTime " + localTime, localDate)
                    console.log("is drive.getTime " + driveDate.getTime() +" less than local time? " + localTime 
                    + " -> " + (driveDate.getTime()<localTime))
                    //if file exists, check if cloud modifiedTime is later than local modified time, if so overwrite, if not ask user
                    //driveDate.getTime()>localTime
                    if(driveDate.getTime()>localTime){
                        console.log("drive file modified later than local file, downloading");
                        //user picks drive, download from drive and store in local
                        this.downloadSave(list[0]);
                    }else{
                        console.log("local file is later than drive file, which save file do you want?");
                        //user picks local, save to cloud?
                        this.setState({
                            saveConflict: list[0]
                        })
                    }
                }else{
                    console.log("no load games found");
                    this.setState({
                        syncing:false,
                        synced: true
                    })
                }
            }.bind(this)
        ).catch(function(err){
            console.log("syncSaves failed", err);
            this.setState({
                syncing:false,
                synced: true
            })
        })
    }
    downloadSave(file){
        // a save file has been downloaded and should replace the file at game-nameid
        console.log("downloading saving file ", file);
        let localStorage = window.localStorage;
        let id = file.id;
        let filename = file.name;
        console.log("downloading save file id: " + id + " name: " + filename);
        this.getFile(id)
            .then((res)=>{
                console.log("get file result", res);
                console.log("file body", res.body);
                console.log("file result", res.result);
                let file = localStorage.setItem('persist:' + filename, res.body);
                console.log("saving drive file to local storage at " + ('persist:' + filename));
                this.setState({
                    syncing:false,
                    synced: true,
                    saveConflict: null,
                    error: null
                })
                //load from local
               
            }).catch((err)=> {
                console.log("fet file error", err);
                this.setState({
                    syncing:false,
                    synced: true,
                    error: err,
                    saveConflict: null
                })
            })
    }
    getAppData(){
        console.log("getting app data from drive");
        console.log("drive", gapi.client.drive);
        var request = gapi.client.drive.files.list({
            spaces: 'appDataFolder',
            fields: 'nextPageToken, files(id, name)',
            pageSize: 100
          }).then((res)=>{
            console.log("app data result", res);
        }).catch((err)=> {
            console.log("app data error", err);
        })
    }

    renderNewGame(){
        if(!this.state.syncing){
            return (<button onClick={() => {this.onNewGame();}}>New Game</button>)
        }else{
            return (<button onClick={() => {this.onNewGame();}} disabled>New Game D</button>)
        } 
    }
    renderSaves(){
        if(!this.state.syncing && this.state.local){
            console.log("rendering save files, local:", this.state.local);
            return Object.keys(this.state.local).map((k, i) => {
                let save = this.state.local[k];
                return (<button onClick={() => {
                    this.onLoadGame(k);
                    }}>
                        save {i} date: {save.date}, desc: {save.desc} id: {k}
                    </button>)
            })
               // return this.state.local[k].map((e, i) => {{}
        }
    }
    onLoadGame(id){
        //use game + id as filename, set as filename
        let filename = getStoreName(this.props.gamename, id);
        console.log("load game name: " + filename);
        this.setState({
            filename
        })
    }
    renderSaveConflict(){
        if(this.state.saveConflict){
            // downloadSave(file)
            //if they choose the drive file, download it with fiel id
            //if not, save local to drive
            return(
                <div>
                    <p>Your local file is ahead of your drive file, which would you like to continue with? (the other will be deleted)</p>
                    <button onClick={() => {
                        this.downloadSave(this.state.saveConflict);
                        //this.saveGame();
                        this.saveLocalMeta();
                    }}>Choose drive</button>
                    <button onClick={() => {
                       // this.saveLocalMeta();
                        this.saveGame();
                        console.log("saving local game", this.state);
                        this.setState({
                            syncing:false,
                            synced: true,
                            saveConflict: null,
                            error: null
                        })
                    }}>Choose local</button>
                </div>
            )
        }
        return <p>probelm displaying conflict...</p>
    }
    render(){
        console.log(`load rendering game saveConflict ${this.state.saveConflict} synced ${this.state.synced}
            syncing ${this.state.syncing} filename ${this.state.filename}`)
        if(this.state.saveConflict){
            return this.renderSaveConflict()
        }else if(this.state.filename){
            //savefile={this.state.filename}
            
            return(
                <Store savefile={this.state.filename} reducers={this.props.reducers}>
                    <button onClick={() => {
                        this.saveGame();
                        }}>
                            save game to drive
                        </button>
                        <button onClick={() => {
                        this.saveLocalMeta();
                        }}>
                            save local metadata
                        </button>
                    {this.props.children}
                </Store>
              )
        }else{
            return(
                <div>
                   
                    {this.state.synced? <p>synced</p>: this.state.syncing?<p>syncing...</p>:<p>not synced</p>}
                    <hr/>
                    {this.renderNewGame()}
                    <hr/>
                    {this.renderSaves()}
                </div>
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