import React from 'react';
import Load from './Load.jsx';
//import Store from './Store.jsx';
import Game from './Game.jsx';

if (typeof window === 'undefined') {
    global.window = {}
  }

class Index extends React.Component{
    render(){
        return(
          <Load gamename={'g4'}>
            <Game game={this.props.game}/>
          </Load>
        )
    }

}
export default Index;