
import React from 'react'
import { withRouteData, Link } from 'react-static'
//import Menu from './../components/game/GameMenu.jsx';
import Game from './../components/game/Index.jsx';
//import g1 from './../games/g1/index.js';

class Games extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
           
              <Game />
            </div>
          )
    }
}

export default withRouteData(Games);

