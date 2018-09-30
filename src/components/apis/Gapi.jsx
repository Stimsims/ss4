import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {setSignedIn, setGapi} from './apiReducer.js';
import keys from './keys';
// const API_KEY = 'AIzaSyBc2-uDprThmL1avRG6W0BHLqVVhOoxcF0';
// const CLIENT_ID = '640363567361-na8ad159n3hsoa0tugsves1o8n6crsti.apps.googleusercontent.com';
// // Array of API discovery doc URLs for APIs used by the quickstart
// const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest", 
// "https://sheets.googleapis.com/$discovery/rest?version=v4"];
// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// var SCOPES = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appfolder https://www.googleapis.com/auth/spreadsheets';

class Gapi extends React.Component{
    constructor(props){
        super(props);
        this.loadApi = this.loadApi.bind(this);
        this.initClient = this.initClient.bind(this);

        this.updateSigninStatus = this.updateSigninStatus.bind(this);
        
        this.state={
            loaded: false,
            authorizeButton: true,
            list: 'no files'
        }
      //  console.log("gapi constructor", props);
    }
    componentDidMount() {
        this.loadApi();
        window.___gcfg = {
            parsetags: 'onload'
        };
    }

    loadApi(){
        const script = document.createElement("script");
        //script.src = 'https://apis.google.com/js/api.js';
        script.src = 'https://apis.google.com/js/platform.js';
        //script.src = 'https://apis.google.com/js/client.js';
        script.onload = () => {
            gapi.load('client', () => {
                this.initClient();
            });
        };
        document.body.appendChild(script);
    }

    updateSigninStatus(isSignedIn) {
        console.log("update sign in status, ", isSignedIn)
        this.props.setSignedIn(isSignedIn);
    }
    initClient(){
       // console.log("init client");
        gapi.client.init({
            apiKey: keys.API_KEY,
            clientId: keys.CLIENT_ID,
            discoveryDocs: keys.DISCOVERY_DOCS,
            scope: keys.SCOPES
        })
        .then(r=>{
            console.log("setting up gapi", gapi);
            this.props.setGapi(true);
            gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
            this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    }
    render(){
        return null
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setSignedIn, setGapi},
        dispatch
    )
}
const mapStateToProps = (state) => {
    return {
        gapi: state.gapi
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gapi);
//export default Gapi;