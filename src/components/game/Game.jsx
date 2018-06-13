import React from 'react';
import {connect} from 'react-redux';
import Simulation from './Simulation.jsx';

class Game extends React.Component{
    constructor(props){
        super(props);
        console.log("game constructor");
        console.log(props);
        //expects to recieve the game
        //the game gives reducers, selectors, mapStteToProps, dispatchToStore, 
        //simulation and iterates through story nodes
        //the game displays the content, the simulation runs, stops and persists state
    }
    render(){
        return(
            <div>
                Game
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log("game, map state to props");
    console.log(props);
    return props.game.mapStateToProps(state);
}

export default connect(mapStateToProps)(Game);