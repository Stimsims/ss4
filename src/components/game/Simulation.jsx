import React from 'react';

class Simulation extends React.Component{
    constructor(props){
        super(props);
        //expects to recieve the game
        //the game gives reducers, selectors, mapStteToProps, dispatchToStore, 
        //simulation and iterates through story nodes
        //the game displays the content, the simulation runs, stops and persists state
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.state = {
            interval: null
        }
    }
    componentDidMount(){
        this.play();
    }
    componentWillUnmount(){
        this.pause();
    }
    play(){
        if(!this.state.interval){
            let id = setInterval(this.props.sim.update, this.props.sim.getInterval());
            this.setState({
                interval: id
            })
            console.log("playing simulation " + id);
        }else{
            console.log("play called but interval already running: " + this.state.interval);
        }
    }
    pause(){
        if(this.state.interval){
            console.log("pausing simulation");
            clearInterval(this.state.interval);
            this.setState({
                interval: null
            })
        }
    }
    render(){
        return(
            null
        )
    }
}

export default Simulation;