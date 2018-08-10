import React from 'react';
 import Load from './Load.jsx';
import Store from './Store.jsx';
import Game from './Game';
import Menu from './GameMenu.jsx';
import styled from 'styled-components';
import Table from './../UI/elements/Table.jsx';
//import SampleGame from './SampleGame.jsx';
// import samplegame from 'samplegame';

if (typeof window === 'undefined') {
    global.window = {}
  }
//display a view that allows to start 
class Index extends React.Component{
  constructor(props){
    super(props);
    this.registerMenuItem = this.registerMenuItem.bind(this);
    this.state = {
      game: null,
      menuItems: [],
      menuKeys: new Map(),
      menuRenderId: 1
    }
  }
  componentDidMount(){
    //  console.log("index mounted", samplegame);
        this.setState({
            game: this.props.game.getComponent(),
            reducers: this.props.game.getReducers()
        })
    }
    registerMenuItem(items){
      //is a component and the function to call onClick
      console.log("registerMenyItem item ", items);
      let menuItems = this.state.menuItems;
      items.map(item => {
        if(!this.state.menuKeys.has(item.key)){
          //delete old one, update object, keep key indexes the same
          menuItems = [
            ...menuItems,
            item.key
          ]
        }
        this.state.menuKeys.set(item.key, item);
      })
      this.setState({
        menuItems,
        menuRenderId: this.state.menuRenderId+1
      })
      console.log("registerMenyItem count ", this.state.menuItems);
    }
    buildMenuItems(){
      return this.state.menuItems.map(m => {
        return this.state.menuKeys.get(m);
      })
      //menuItems={this.state.menuItems}
    }
    renderPersistStore(){
      return(
        <Table heights={['36px', null]}>
           <Menu title={'Game Title'} menuItems={this.buildMenuItems()} renderId={this.state.menuRenderId}/>
            <Load gamename={'g4'} reducers={this.state.reducers} registerMenuItem={this.registerMenuItem}>
              <Game game={this.state.game}/>
            </Load>
        </Table>
      )
    }

    renderStore(){
      return (
        <Container>
          <Menu title={'Game Title'} />
          <Store reducers={this.state.reducers} >
            <Game game={this.state.game}/>
          </Store>
        </Container>
      )
    }
    render(){
      if(this.state.game){
        return <Container>{this.renderPersistStore()}</Container>
      }else{
        return <Container><p>loading game...</p></Container>
      }
    }

}
export default Index;

const Container = styled.div`
  position: fixed;
  top:0;right:0;left:0;bottom:0;
`