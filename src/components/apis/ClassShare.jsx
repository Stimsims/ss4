import React from 'react';
import {connect} from 'react-redux';

class SignIn extends React.Component{
    constructor(props){
        super(props);
     //   this.getBtn = this.getBtn.bind(this);
        this.state = {
            rendered: false,
            width: 48,
            height: 48
        }
    }
    componentDidMount(){
        window.myFnWeb = (e) => {
            console.log(`class share complete myFnWeb`, e)
        }
        //this.getBtn();
    }
    // componentDidUpdate(){
    //     this.getBtn();
    // }
    // getBtn(){
    //     if(!this.state.rendered && this.props.gapi.gapiReady){
    //         console.log(`classroom share rendering `)
    //         this.setState({
    //             rendered: true
    //         })
    //         gapi.sharetoclassroom.render(
    //             "g-sharetoclassroom",
    //             {
    //                 size: "48", theme: "light",  url: "http://illulli-1e5a.com/games/labgame", 
    //                 title: "the weird title", body: "the instructions"
    //             }
    //         )
    //     }
    // }
    //  data-url="https://docs.google.com/document/d/1hUXdSyEBf9d6aDbQOHEnTsMYdDUXLsNROjcKu-kzxHY/edit?usp=sharing">
    render(){
        //if gapi is ready, show sign in/out btns
       // return <div id={"g-sharetoclassroom"} style={{display: 'inline', borderRadius: '50%'}}></div>
        return (
            <div id="g-sharetoclassroom" onsharestart={'myFnWeb'} onShareStart={'myFnWeb'} data-onsharestart={'myFnWeb'} data-onShareStart={'myFnWeb'}>
            ssshare</div>
        )
        // return (
        //     <div style={{width: `${this.state.width}px`, height: `${this.state.height}px`}}>
        //         <div id={"g-classroomShare"} style={{display: 'inline'}}></div>
        //         class
        //     </div>
        // )
    }
}

const mapStateToProps = (state) => {
    return {
        gapi: state.gapi
    }
}

export default connect(mapStateToProps)(SignIn)
