import React from 'react';
import Game from './components/Game.jsx';
import Sim from './simulation/Index.jsx';
import PlayButtons from './components/PlayButtons.jsx';
import Initialize from './components/InitializeGame.jsx';

class Index extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <Initialize />
                {/* <PlayButtons />
                <Sim /> */}
                <Game />
            </div>
            
        )
    }
}

export default Index;