import React from 'react';
import {connect} from 'react-redux';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.signIn = this.signIn.bind(this);
        this.signOut =this.signOut.bind(this);
    }
    signIn(){
        gapi.auth2.getAuthInstance().signIn();
    }
    signOut(){
        gapi.auth2.getAuthInstance().signOut();
    }
    render(){
        //if gapi is ready, show sign in/out btns
        if(!this.props.gapi.gapiReady){
            return <p>google apis loading...</p>
        }else{
            if(this.props.gapi.isSignedIn){
                return (
                    <button onClick={this.signOut}>sign out</button>
                )
            }else{
                return (
                    <button onClick={this.signIn}>sign in</button>
                )
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        gapi: state.gapi
    }
}

export default connect(mapStateToProps)(SignIn)