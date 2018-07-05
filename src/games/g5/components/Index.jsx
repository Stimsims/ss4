import React from 'react';
import Game from './Game.jsx';
import Init from './Initialize.jsx';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            init: false
        }
    }

    render(){
        return(
            <div>
                <Init.component />
                <Game />
            </div>
            
        )
    }
}

export default Index;