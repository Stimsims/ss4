import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Game from './Game.jsx';
import Sim from './Simulation.jsx';

class Index extends React.Component{
    constructor(props){
        super(props);
        console.log("index constructor ");
        console.log(props);
        //expects to recieve the game
        //the game gives reducers, selectors, mapStteToProps, dispatchToStore, 
        //simulation and iterates through story nodes
        //the game displays the content, the simulation runs, stops and persists state
        let reducers = props.game.getReducers();
        this.store = createStore(reducers);
        
        console.log("sub store created");
    }
    render(){
        return(
          <Provider store={this.store}>
            <div>
                <Game game={this.props.game} />
                <Sim store={this.props.store} sim={this.props.game.getSim()}/>
            </div>
          </Provider>
        )
    }
}

export default Index;