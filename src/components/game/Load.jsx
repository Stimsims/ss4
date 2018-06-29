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
            filename: null,
            id: null,
            local: {},
            driveChecked: false,
            drive: ['still searching for files'],
            driveSave: null,
            synced: false
        }
    }
    componentDidMount(){
        this.getLocalFiles();
        
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.gapi.isSignedIn && !this.state.synced){
            //only check the drive at the start of the session, cache check
              //  this.getDriveFiles();
                //this.uploadFile();
                //this.getAppData();
               // this.getFile();
               //this.listSaveFiles();
               this.loadGame();
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
    saveGame(){
        //get list of files with gamename: this.props.game
        let name = 'anogamesave';
        let localStorage = window.localStorage;
        let list = this.listSaveFiles().then(
            function(response) {
                let list = response.result.files;
                console.log("saveGame response", response);
                console.log("saving game, drive files found: " + list.length);
                if(list && list.length > 0){
                    let id = list[0].id;
                    //if file exists, patch it g4:35d7c7bc-8d4d-0686-55f7-29e91a41175e:date
                    let updatedfile = localStorage.getItem('persist:g4-35d7c7bc-8d4d-0686-55f7-29e91a41175e')
                    this.createFileWithJSONContent(false, id, name, updatedfile, (res) => {console.log("create file with json callback", res)})
                }else{
                    //if not, create it
                    let newfile = localStorage.getItem('persist:g4-5379725d-ceec-8070-1176-612b1a9d5b06')
                    this.createFileWithJSONContent(true, null, name, newfile, (res) => {console.log("create file with json callback", res)})
                }
            }.bind(this)
        );
    }
    listSaveFiles(){
        /*
            'q': "mimeType contains 'application/json'",
            'fields': "files(id, name, mimeType, modifiedTime)"
            'q': "appProperties has { key='gamename' and value='witcher' }"

            invalid: 'q': "gamename contains 'witcher'",
        */
        return gapi.client.drive.files.list({
            'q': `appProperties has { key='gamename' and value='${this.props.gamename}' }`,
            'fields': "files(id, name, mimeType, modifiedTime)"
        })
    }
    getFile(id){
        // mimeType: 'application/json'
        //customprop: 1wExMmgAYP94nNFKAPDuw9rtXHCCTq4xx
        //let id = '1yz7h4Ot5Ta0SKKgDnRFn7u4_O0BGcvm5';
        return gapi.client.drive.files.get({
            fileId: id,
            alt: 'media',
            fields: "id, name, mimeType, modifiedTime"
          })
        //   .then((res)=>{
        //         console.log("get file result", res);
        //         console.log("file body", res.body);
        //         console.log("file result", res.result);
        //         let localStorage = window.localStorage;
        //         let file = localStorage.setItem('persist:post', res.body);
        //         this.setState({
        //             driveSave: res.body
        //         })
        //         //add driveSave to localstorage under persist:post, 

        // }).catch((err)=> {
        //     console.log("fet file error", err);
        // })
        //   var result = request.execute(function(resp) {
        //     console.log('execute response', resp);
        //   });
    }
    loadGame(){
        //list files, compare modifiedDates, use id to download google drive file, place in localstorage
        let localStorage = window.localStorage;
        let list = this.listSaveFiles().then(
            function(response) {
                let list = response.result.files;
                console.log("loadGame response", response);
                console.log("loadinggame, drive files found: " + list.length);
                if(list && list.length > 0){
                    let driveTime = list[0].modifiedTime;
                    let localTime = localStorage.getItem('g4:35d7c7bc-8d4d-0686-55f7-29e91a41175e:date');
                    let id = list[0].id;
                    //if file exists, check if cloud modifiedTime is later than local modified time, if so overwrite, if not ask user
                    if(true){
                        //user picks drive, download from drive and store in local
                        this.getFile(id)
                        .then((res)=>{
                            console.log("get file result", res);
                            console.log("file body", res.body);
                            console.log("file result", res.result);
                            let file = localStorage.setItem('persist:drive', res.body);
                            // this.setState({
                            //     driveSave: res.body
                            // })
                            this.setState({
                                synced: true
                            })
                        }).catch((err)=> {
                            console.log("fet file error", err);
                        })
                    }else{
                        console.log("which save file do you want?");
                        //user picks local, save to cloud?
                    }

                }
            }.bind(this)
        );
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
    getLocalFiles(){
        let localStorage = window.localStorage;

        let query = new RegExp("(" + this.props.gamename + ":)");
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
            let parts = f.key.split(":");
            return parts[1];
        });
        //put ids into state.local, pointing to obj with keys for date and desc
        let local = {};
        ids.map(id => {
            if(!local[id]){
                local[id] = {
                    date: localStorage.getItem(getFileName(this.props.gamename, id, DATE)),
                    desc: localStorage.getItem(getFileName(this.props.gamename, id, DESC))
                }
            }
        })
        this.setState({
            local
        })
        console.log("local meta", local);
    }
    renderLoadGame(){
        //if not synced, show disabled, when synced, show button, load persisted name
        if(this.state.synced){
            return <button onClick={()=>{this.setState({
                filename: 'drive'
            })}}>load game</button>
        }else{
            return <button disabled>load game</button>
        }
    }
    renderNewGame(){
        return (
            <button onClick={() => {
                this.onNewGame();
                }}>
                New Game
            </button>
        )
    }
    renderSaves(){
        if(this.state.local){
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
    renderDriveSave(){
        if(this.state.driveSave){
            return <p>drive save found</p>
        }else{
            return <p>waiting for drive save...</p>
        }
    }
    onNewGame(){
        //create a new save id, and generate first save date and desc
        //set game +id as filename
        let id = guid();
        let name = getStoreName(this.props.gamename, id);
        console.log("new game name: " + name);
        let localStorage = window.localStorage;
        localStorage.setItem(getFileName(this.props.gamename, id, DATE), 'Sunday 2:21am');
        localStorage.setItem(getFileName(this.props.gamename, id, DESC), 'hello world');
        this.setState({
            filename: name,
            id
        })
    }
    onLoadGame(id){
        //use game + id as filename, set as filename
        let name = getStoreName(this.props.gamename, id);
        console.log("load game name: " + name);
        this.setState({
            filename: name,
            fileid: id
        })
    }

    render(){
        if(this.state.filename){
            //savefile={this.state.filename}
            return(
                <Store savefile={this.state.filename}>
                  {this.props.children}
                </Store>
              )
        }else{
            return(
                <div>
                    <Menu />
                    <button onClick={() => {
                    this.saveGame();
                    }}>
                        save game to drive
                    </button>
                    {this.renderLoadGame()}
                    <hr/>
                    {this.renderNewGame()}
                    <hr/>
                    {this.renderSaves()}
                    <hr />
                    {this.renderDriveSave()}
                    <hr />
                    {this.state.drive.map(f => {
                        return <p>{f}</p>
                    })}
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