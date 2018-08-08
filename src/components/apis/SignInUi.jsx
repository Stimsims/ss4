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
        // this.handleClick = this.handleClick.bind(this);
        this.signInChange = this.signInChange.bind(this);
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
        console.log('sign in status', this.props.gapi)
        if(!this.state.rendered && this.props.gapi.gapiReady){
            console.log("rendering sign in button");
            this.setState({
                rendered: true,
                signedIn: this.props.gapi.isSignedIn
            })
            this.renderSignIn()
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
    signInChange(e){
        console.log("sign in change", e);
        console.log('sign in status ', this.props.gapi);
    }
    renderSignIn(){
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
            <div>
                <div id={"g-signin2"} style={{display: 'inline'}}></div>
                {this.renderSignOutBtn()}
            </div>
        )
        // console.log("rendering sign in ui signedIn " + this.props.gapi.isSignedIn 
        //     + " gapi read? " + this.props.gapi.gapiReady);
        // if(!this.props.gapi.gapiReady){
        //     return <div>
        //         <p>google apis loading...</p>
        //         {/* <div id={"g-signin2"} style={{display: 'inline'}}></div> */}
        //     </div>
        // }else{
        //     //
        //     if(this.state.signedIn){
        //         console.log("rendering sign out button");
        //         return (
        //             <div style={{height: '200px', backgroundColor: 'orange'}}>
        //             {/* <div style={{opacity: '0', zIndex: '1', translate: 'transformX(100px)', transition: 'all 2s'}}>
        //             <div id={"g-signin2"} ></div>
        //             </div> */}
        //             <button onClick={this.signOut} style={{width: `${this.state.width}px`, height: `${this.state.height}px`,
        //             position: 'absolute', top: '0', zIndex: '9999'}}>
        //             sign out</button>
        //             </div>
        //         )
        //     }else{
                
        //         return <div id={"g-signin2"} style={{display: 'inline'}}></div>;
        //     }
        //     //return <Clickable />
        //     // return <GoogleButton
        //     //             type="light" // can also be written as disabled={true} for clarity
        //     //             onClick={this.handleClick}
        //     //         />
        //     //return <div id={"g-signin2"}></div>;
        // }
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
