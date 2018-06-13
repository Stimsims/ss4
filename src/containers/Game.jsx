
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Menu from './../components/game/GameMenu.jsx';
import Game from './../components/game/Index.jsx';
import g1 from './../games/g1/index.js';

class Games extends React.Component{
    constructor(props){
        super(props);
        console.log("indi game");
        console.log(this.props);
        console.log("g1:");
        console.log(g1);
    }
    render(){
        return (
            <div>
              <Menu />
              <Game game={g1} />
            </div>
          )
    }
}

export default withRouteData(Games);
