import React from 'react';
import Game from './components/Game.jsx';

class Index extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <Game />
            </div>
            
        )
    }
}

export default Index;