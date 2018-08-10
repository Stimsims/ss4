import React from 'react';
import {connect} from 'react-redux';

var SCOPES = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appfolder';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        // this.signIn = this.signIn.bind(this);
        this.signOut =this.signOut.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.getSignInBtn = this.getSignInBtn.bind(this);
        this.state = {
            rendered: false,
            width: 90,
            height: 36
        }
    }
    componentDidMount(){
        this.getSignInBtn();
    }
    componentDidUpdate(){
        this.getSignInBtn();
    }
    getSignInBtn(){
        if(!this.state.rendered && this.props.gapi.gapiReady){
            this.setState({
                rendered: true,
                signedIn: this.props.gapi.isSignedIn
            })
            gapi.signin2.render('g-signin2', {
                'scope': SCOPES,
                'width': this.state.width,
                'height': this.state.height,
                'longtitle': false,
                'theme': 'light',
                'onsuccess': this.onSuccess,
                'onfailure': this.onFailure
            });
        }
    }
    onSuccess = function(user) {
        console.log('Signed in as ' + user.getBasicProfile().getName());
        //this.forceUpdate();
        // this.setState({
        //     signedIn: true
        // })
     };
     onFailure = function(error) {
        console.log('Signed in failure, or signed out? ', error);
       // this.forceUpdate();
        // this.setState({
        //     signedIn: false
        // })
    };
    signOut(){
        gapi.auth2.getAuthInstance().signOut();
        // this.setState({
        //     signedIn: false
        // })
    }


    renderSignOutBtn(){
        if(this.props.gapi.isSignedIn){
            return(
                <button onClick={this.signOut} 
                style={{width: `${this.state.width}px`, height: `${this.state.height}px`,
                position: 'absolute', top: '0', zIndex: '9999'}}>
                    sign out
                </button>
            )
        }
    }
    render(){
        //if gapi is ready, show sign in/out btns
        return (
            <div style={{width: `${this.state.width}px`, height: `${this.state.height}px`}}>
                <div id={"g-signin2"} style={{display: 'inline'}}></div>
                {this.renderSignOutBtn()}
            </div>
        )
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(
//         {setSignedIn, setGapi},
//         dispatch
//     )
// }
const mapStateToProps = (state) => {
    return {
        gapi: state.gapi
    }
}

export default connect(mapStateToProps)(SignIn)
