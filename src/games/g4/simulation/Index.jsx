import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {dispatchAny, playSim} from './reducer.js'
import {update as simulate} from './simulation.js';

class Simulation extends React.Component{
    constructor(props){
        super(props);
        this.update = this.update.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.state = {
            interval: null
        }
    }
    componentDidMount() {
        this.play();
    }
  
    componentWillUnmount() {
        this.pause();
    }
    componentDidUpdate(prevProps, prevState){
        //if previous play state does not match current, is time to either play or pause
      //  console.log("simulation did update, prev: " + prevProps.play + " current: " + this.props.play);
        if(prevProps.play != this.props.play){
            if(this.props.play){
                this.play();
            }else{
                this.pause();
            }
        }
    }
    play(){
      //  console.log("playing simulation");
        if(!this.state.interval && this.props.play){
            let interval = setInterval(this.update, 10000);
            this.setState({
                interval
            })
        }
    }
    pause(){
      //  console.log("pausing simulation");
        if(this.state.interval){
            clearInterval(this.state.interval);
            this.setState({
                interval:null
            })
        }
    }
    update(){
        console.log("simulation updating");
        //console.log(this.props);
        let actions = simulate(this.props.state);
        console.log("update actions", actions);
       // this.props.dispatchAny(playSim(true));
        actions.map(a => {
            this.props.dispatchAny(a);
        })
    }
    render(){
        return(
            null
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {dispatchAny},
        dispatch
    )
}
const mapStateToProps = (state) => {
    console.log("map sim state");
    console.log(state);
    return {
        state: {
            sim: state.simulation.sim
        },
        play: state.simulation.ui.play
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Simulation);