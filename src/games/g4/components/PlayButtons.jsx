import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {playSim} from './../simulation/reducer.js';

class Play extends React.Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(play){
        console.log("handle click input, play  " + play);
        this.props.playSim(play);
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.handleInput(true)}}>play</button>
                <button onClick={()=>{this.handleInput(false)}}>pause</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        play: state.simulation.ui.play
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            playSim
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);