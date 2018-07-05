import React from 'react';
// import Load from './Load.jsx';
import Store from './Store.jsx';
import Game from './Game.jsx';
//import SampleGame from './SampleGame.jsx';
import samplegame from 'samplegame';

if (typeof window === 'undefined') {
    global.window = {}
  }

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      game: null
    }
  }
    // renderPersistStore(){
    //   return(
    //     <Load gamename={'g5'}>
    //       <Game game={this.props.game}/>
    //     </Load>
    //   )
    // }
    componentDidMount(){
    //  console.log("index mounted", samplegame);
        this.setState({
            game: samplegame.getComponent(),
            reducers: samplegame.getReducers()
        })
    }
    renderStore(){
      if(this.state.game){
        return (
          <Store reducers={this.state.reducers} >
            <Game game={this.state.game}/>
            {/* <SampleGame game={this.props.game} /> */}
          </Store>
        )
      }else{
        return <p>loading game...</p>
      }

    }
    render(){
        return(
          this.renderStore()
        )
    }

}
export default Index;