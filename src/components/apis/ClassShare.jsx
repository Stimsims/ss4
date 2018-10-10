import React from 'react';
import {connect} from 'react-redux';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rendered: false,
            width: 48,
            height: 48
        }
    }
    // componentDidMount(){
    //     window.myFnWeb = (e) => {
    //         console.log(`class share complete myFnWeb`, e)
    //     }
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
    render(){
        return (
            <div>
                <div id="g-sharetoclassroom"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gapi: state.gapi
    }
}

export default connect(mapStateToProps)(SignIn)
