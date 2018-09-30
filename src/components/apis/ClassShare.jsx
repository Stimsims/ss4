import React from 'react';
import {connect} from 'react-redux';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.getBtn = this.getBtn.bind(this);
        this.state = {
            rendered: false,
            width: 48,
            height: 48
        }
    }
    componentDidMount(){
        this.getBtn();
    }
    componentDidUpdate(){
        this.getBtn();
    }
    getBtn(){
        if(!this.state.rendered && this.props.gapi.gapiReady){
            console.log(`classroom share rendering `)
            this.setState({
                rendered: true
            })
            gapi.sharetoclassroom.render(
                "g-classroomShare",
                {
                    size: "48", theme: "dark"
                }
            )
        }
    }
    render(){
        //if gapi is ready, show sign in/out btns
        return <div id={"g-classroomShare"} style={{display: 'inline', borderRadius: '50%'}}></div>
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
