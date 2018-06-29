import React from 'react';
import Store from './Store.jsx';
import {guid} from './../../utilities/ids.js';
import {connect} from 'react-redux';
import Menu from './GameMenu.jsx';

if (typeof window === 'undefined') {
    global.window = {}
}
function getFileName(game, id, name){
    return `${game}:${id}:${name}`
}
function getStoreName(game, id){
    return `${game}-${id}`
}
function getDriveName(game, id){
    return `${game}:${id}`
}
function getMetaName(meta, game, id){
    return `${meta}:${game}-${id}`
}
const DATE = 'date',
      DESC = 'desc';
class Index extends React.Component{
    constructor(props){
        super(props);
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
    // componentWillUnmount(){
    //     console.log("unmounting, saving to drive");
    //     this.saveGame();
    // }
    componentDidUpdate(prevProps, prevState){
        if(this.props.gapi.isSignedIn && !this.state.synced && !this.state.syncing){
            //only check the drive at the start of the session, cache check
              //  this.getDriveFiles();
                //this.uploadFile();
                //this.getAppData();
               // this.getFile();
               //this.listSaveFiles();
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
                        date: localStorage.getItem(getMetaName(DATE,this.props.gamename, 'A')),
                        desc: localStorage.getItem(getMetaName(DESC,this.props.gamename, 'A'))
                    }
                }
            })
            this.setState({
                local
            })
            console.log("local meta", local);
        }

    }
    createFileWithJSONContent = function(isCreate, fileId, name, data, callback) {
        //appData file: 1iUAS3YYiw95q-MbgLZrOXtJvgj_XywiG4_FxqSu_xGdsbfEQOw
        const boundary = '-------314159265358979323846';
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";
      
        const contentType = 'application/json';
      //getGameName(this.props.gamename, 1)
      //'parents':  ['appDataFolder']
      console.log("creating file with prop gamename val " + this.props.gamename);
        var metadata = {
            'name': name,
            'mimeType': contentType,
            "appProperties": {
                "gamename": `${this.props.gamename}`,
            }
          };
      
          var multipartRequestBody =
              delimiter +
              'Content-Type: application/json\r\n\r\n' +
              JSON.stringify(metadata) +
              delimiter +
              'Content-Type: ' + contentType + '\r\n\r\n' +
              data +
              close_delim;
      
              //'method': 'POST',
              let path = '/upload/drive/v3/files';
              let method =  'POST'
              if(!isCreate){
                  path = path + '/' + fileId;
                  method = 'PATCH';
              }
              console.log("uploading content, method " + method + " path " + path);
          var request = gapi.client.request({
              'path': path,
              'method': method,
              'params': {'uploadType': 'multipart'},
              'headers': {
                'Content-Type': 'multipart/related; boundary="' + boundary + '"'
              },
              'body': multipartRequestBody});
          if (!callback) {
            callback = function(file) {
              console.log(file)
            };
          }
          request.execute(callback);
      }
      onNewGame(){
        //create a new save id, and generate first save date and desc
        //set game +id as filename
      //  let id = guid(); getMetaName(meta, game, id){
        // let name = 'A';
        // let date = new Date();
        // //let name = getStoreName(this.props.gamename, id);
        // console.log("new game name: " + name + " date: " + date.getTime());
        // let localStorage = window.localStorage;
        // //save metadata locally
        // localStorage.setItem(getMetaName(DATE, this.props.gamename, name), date.getTime());
        // localStorage.setItem(getMetaName(DESC, this.props.gamename, name), 'a game description');
        this.saveLocalMeta();
        //game will be persisted to cloud on close
        this.setState({
            filename: getStoreName(this.props.gamename, name)
        })
    }
    saveLocalMeta(){
        let name = 'A';
        let date = new Date();
        //let name = getStoreName(this.props.gamename, id);
        console.log("new game name: " + name + " date: " + date.getTime());
        let localStorage = window.localStorage;
        //save metadata locally
        localStorage.setItem(getMetaName(DATE, this.props.gamename, name), date.getTime());
        localStorage.setItem(getMetaName(DESC, this.props.gamename, name), 'a game description');
    }
    saveGame(){
        //get list of files with gamename: this.props.game
        
        let name = getStoreName(this.props.gamename, 'A');
        console.log("saving game to drive name " + name);
        let localStorage = window.localStorage;
        let list = this.listSaveFiles().then(
            function(response) {
                let list = response.result.files;
                console.log("saveGame response", response);
                console.log("saving game, drive files found: " + list.length);
                if(list && list.length > 0){
                    let id = list[0].id;
                    //if file exists, patch it g4:35d7c7bc-8d4d-0686-55f7-29e91a41175e:date
                   // let updatedfile = localStorage.getItem('persist:g4-35d7c7bc-8d4d-0686-55f7-29e91a41175e')
                    let updatedfile = localStorage.getItem('persist:' + name)
                    console.log("updated file from local", updatedfile);
                    this.createFileWithJSONContent(false, id, name, updatedfile, (res) => {console.log("create file with json callback", res)})
                }else{
                    //if not, create it
                    //let newfile = localStorage.getItem('persist:g4-5379725d-ceec-8070-1176-612b1a9d5b06')
                    let newfile = localStorage.getItem('persist:' + name)
                    console.log("create file from local", newfile);
                    this.createFileWithJSONContent(true, null, name, newfile, (res) => {console.log("create file with json callback", res)})
                }
                this.saveLocalMeta();
            }.bind(this)
        );
    }
    listSaveFiles(){
        /*
            'q': "mimeType contains 'application/json'",
            'fields': "files(id, name, mimeType, modifiedTime)"
            'q': "appProperties has { key='gamename' and value='witcher' }"
        */
        return gapi.client.drive.files.list({
            'q': `appProperties has { key='gamename' and value='${this.props.gamename}' }`,
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
        let name = file.name;
        console.log("downloading save file id: " + id + " name: " + name);
        this.getFile(id)
            .then((res)=>{
                console.log("get file result", res);
                console.log("file body", res.body);
                console.log("file result", res.result);
                let file = localStorage.setItem('persist:' + name, res.body);
                console.log("saving drive file to local storage at " + ('persist:' + name));
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
            return (<button onClick={() => {this.onNewGame();}} disabled>New Game</button>)
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
                        save {i} date: {save.date}, desc: {save.desc}
                    </button>)
            })
               // return this.state.local[k].map((e, i) => {{}
        }
    }
    onLoadGame(id){
        //use game + id as filename, set as filename
        let name = getStoreName(this.props.gamename, 'A');
        console.log("load game name: " + name);
        this.setState({
            filename: name
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
                    <button onClick={() => {this.downloadSave(this.state.saveConflict)}}>Choose drive</button>
                    <button onClick={() => {
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
        if(this.state.saveConflict){
            return this.renderSaveConflict()
        }else if(this.state.synced && this.state.filename){
            //savefile={this.state.filename}
            return(
                <Store savefile={this.state.filename}>
                <button onClick={() => {
                    this.saveGame();
                    }}>
                        save game to drive
                    </button>
                  {this.props.children}
                </Store>
              )
        }else{
            return(
                <div>
                    <Menu />
                    {this.state.synced? <p>synced</p>:<p>not synced</p>}
                    {/* <button onClick={() => {
                    this.saveGame();
                    }}>
                        save game to drive
                    </button> */}
                    {/* {this.renderLoadGame()} */}
                    <hr/>
                    {this.renderNewGame()}
                    <hr/>
                    {this.renderSaves()}
                    <hr />
                    {/* {this.renderDriveSave()} */}
                    <hr />
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

export default connect(mapStateToProps)(Index);