import React from 'react';
 import Load from './Load.jsx';
import Store from './Store.jsx';
import Game from './Game';
import Menu from './GameMenu.jsx';
import styled from 'styled-components';
//import SampleGame from './SampleGame.jsx';
// import samplegame from 'samplegame';

if (typeof window === 'undefined') {
    global.window = {}
  }
//display a view that allows to start 
class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      game: null
    }
    // console.log("Game Index props ", props);
    // console.log("Game Index reducers: ", props.game.getReducers());
  }
  componentDidMount(){
    //  console.log("index mounted", samplegame);
        this.setState({
            game: this.props.game.getComponent(),
            reducers: this.props.game.getReducers()
        })
    }
    renderPersistStore(){
      return(
        <Container>
           <Menu />
            <Load gamename={'g4'} reducers={this.state.reducers}>
              <Game game={this.state.game}/>
            </Load>
        </Container>
      )
    }

    renderStore(){
      return (
        <Container>
          <Menu />
          <Store reducers={this.state.reducers} >
            <Game game={this.state.game}/>
          </Store>
        </Container>
      )
    }
    render(){
      if(this.state.game){
        return this.renderPersistStore();
      }else{
        return <p>loading game...</p>
      }
    }

}
export default Index;

const Container = styled.div`
  width: 100%;
  height: 100%;
`