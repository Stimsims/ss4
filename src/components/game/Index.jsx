import React from 'react';
 import Load from './Load.jsx';
import Store from './Store.jsx';
import Game from './Game';
import Menu from './GameMenu.jsx';
import styled from 'styled-components';
import Table from './../UI/elements/Table.jsx';
import Sizer from './../UI/elements/Sizer.jsx';
import Settings from './Settings.jsx';

if (typeof window === 'undefined') {
    global.window = {}
  }
//display a view that allows to start 
class Index extends React.Component{
  constructor(props){
    super(props);
    console.log("Index Game constructor, props:", props);
    this.registerMenuItem = this.registerMenuItem.bind(this);
    this.setSettings = this.setSettings.bind(this);
    this.menuItems = [];
    this.menuKeys = new Map();
    this.state = {
      game: this.props.game.getComponent(),
      menuItems: this.menuItems,
      menuKeys: this.menuKeys,
      menuRenderId: 1,
      settings:{
        volume: 1.4
      }
    }
  }
  componentDidMount(){
      console.log("index mounted reducers: ", this.props.game);
        this.setState({
            //game: this.props.game.getComponent(),
            reducers: this.props.game.getReducers()
        })
    }
    registerMenuItem(items){
      items.map(item => {
        if(!this.menuKeys.has(item.key)){
          //delete old one, update object, keep key indexes the same
          this.menuItems = [
            ...this.menuItems,
            item.key
          ]
         // console.log('registerMenuItem adding new item with key ' + item.key, this.menuItems);
        }
        this.menuKeys.set(item.key, item);
       // console.log('registerMenuItem map', this.menuKeys);
      })
      this.setState({
        menuRenderId: this.state.menuRenderId+1,
        menuItems: this.menuItems,
        menuKeys: this.menuKeys
      })
     // console.log("registerMenuItem count ", this.menuItems);
    }
    buildMenuItems(){
      return this.state.menuItems.map(m => {
        return this.state.menuKeys.get(m);
      })
      //menuItems={this.state.menuItems}
    }
    setSettings(settings){
      this.setState({
        settings
      })
    }
    renderPersistStore(){
      return(
        <div style={{width: '100%', height: '100%'}}>
          <Settings game={this.state.game} registerMenuItem={this.registerMenuItem} setSettings={this.setSettings} />
          <Table heights={['36px', null]}>
            
            <Sizer>
              <Menu title={this.props.title} menuItems={this.buildMenuItems()} renderId={this.state.menuRenderId}/>
            </Sizer>
            <Load  settings={this.state.settings} game={this.state.game} id={this.props.id} reducers={this.state.reducers} registerMenuItem={this.registerMenuItem}>
                {/* <Game game={this.state.game} {...this.state.settings} /> */}
            </Load>
            
          </Table>
        </div>

      )
    }

    renderStore(){
      return (
        <Container>
          <Settings game={this.state.game}>
            <Menu title={this.props.title} />
            <Store reducers={this.state.reducers} >
              <Game game={this.state.game}/>
            </Store>
          </Settings>
        </Container>
      )
    }
    render(){
      console.log(`website game index rendering id ${this.props.id}`, this.state);
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
