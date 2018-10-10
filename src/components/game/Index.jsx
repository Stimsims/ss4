import React from 'react';
 import Load from './Load.jsx';
import Store from './Store.jsx';
import Game from './Game';
import Menu from './GameMenu.jsx';
import styled from 'styled-components';
import Table from './../UI/elements/Table.jsx';
import Sizer from './../UI/elements/Sizer.jsx';
import Settings from './Settings.jsx';
import {connect} from 'react-redux';
import { withRouteData, withSiteData} from 'react-static'
import * as MyLog from 'MyLog';

if (typeof window === 'undefined') {
    global.window = {}
  }
//display a view that allows to start 
class Index extends React.Component{
  constructor(props){
    super(props);
    this.registerMenuItem = this.registerMenuItem.bind(this);
    this.setSettings = this.setSettings.bind(this);
    this.getBtn = this.getBtn.bind(this);
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
        MyLog.style(`website game index component mounted, gapi? ${this.props.gapi.gapiReady}, rendered? ${this.state.rendered}, getBtn(): `, "brown");
        this.setState({
            //game: this.props.game.getComponent(),
            reducers: this.props.game.getReducers()
        })
    }

    componentDidUpdate(){
        MyLog.style(`website game index component did update, gapi? ${this.props.gapi.gapiReady}, rendered? ${this.state.rendered}, getBtn():`, "brown");
        this.getBtn();
    }
  getBtn(){
      if(!this.state.rendered && this.props.gapi.gapiReady){
          let url = this.props.siteRoot + this.props.history.location.pathname;
          gapi.sharetoclassroom.render(
              "g-sharetoclassroom",
              {size: "48", theme: "light",  url, title: this.props.item.title, body: this.props.item.assignment}
          )
          this.setState({
            rendered: true
        })
      }
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
      if(this.state.game){
        return <Container>{this.renderPersistStore()}</Container>
      }else{
        return <Container><p>loading game...</p></Container>
      }
    }

}

const mapStateToProps = (state, props) => {
  return {
      //init: state.sim.initialized
      gapi: state.gapi
  }
}
export default connect(mapStateToProps)(withRouteData(withSiteData(Index)));

const Container = styled.div`
  position: fixed;
  top:0;right:0;left:0;bottom:0;
`
