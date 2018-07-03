import React from 'react';
import Load from './Load.jsx';
import Store from './Store.jsx';
import Game from './Game.jsx';

if (typeof window === 'undefined') {
    global.window = {}
  }

class Index extends React.Component{
    renderPersistStore(){
      return(
        <Load gamename={'g4'}>
          <Game game={this.props.game}/>
        </Load>
      )
    }
    renderStore(){
      return (
        <Store>
          <Game game={this.props.game}/>
        </Store>
      )
    }
    render(){
        return(
          this.renderStore()
        )
    }

}
export default Index;