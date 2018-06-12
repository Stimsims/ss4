import React from 'react'

const API_KEY = 'AIzaSyBc2-uDprThmL1avRG6W0BHLqVVhOoxcF0';
const CLIENT_ID = '640363567361-na8ad159n3hsoa0tugsves1o8n6crsti.apps.googleusercontent.com';
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

class Gapi extends React.Component{
    constructor(props){
        super(props);
        this.loadApi = this.loadApi.bind(this);
        this.initClient = this.initClient.bind(this);

        this.updateSigninStatus = this.updateSigninStatus.bind(this);
        this.setupGapi = this.setupGapi.bind(this);
        
        this.state={
            loaded: false,
            authorizeButton: true,
            list: 'no files'
        }
    }
    componentDidMount() {
        this.loadApi();
    }

    loadApi(){
        const script = document.createElement("script");
        script.src = 'https://apis.google.com/js/api.js';
        script.onload = () => {
            gapi.load('client', () => {
                this.initClient();
            });
        };
        document.body.appendChild(script);
    }

    updateSigninStatus(isSignedIn) {
        //this.props.setSignedIn(isSignedIn);
        console.log("update sign in status, " + isSignedIn)
    }
    initClient(){
        console.log("init client")
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        })
        .then(this.setupGapi);
    }
    setupGapi(){
        console.log("setting up gapi ")
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
        this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }
    renderSignedIn(){
        try{
            let w =gapi.auth2;
            return <p>is signed in</p>
        }catch(e){
            return <p>is not signed in</p>
        }
    }
    render(){
        return null
    }
}

export default Gapi;