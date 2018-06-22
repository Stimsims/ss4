import React from 'react';
// import View from './View.jsx';
// import Factory from './../story/Factory.js';
// import Builder from './Builder.jsx';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {changeZone} from './../story/zones/reducers.js';
import Trends from './graphs/Trends.jsx';
import Game from './Game.jsx';
import Log from './Log.jsx';
import SimuView from './Simulation.jsx';
import simulation from './../story/simulation/index.js';
import Temp from './graphs/Temp.jsx';
import styled from 'styled-components';


class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
          };
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ 
            isMobile: window.innerWidth <= 500 
        });
        //console.log("handle size change " + window.innerWidth);
      };

      renderLayout(){
          if(this.state.isMobile){
                return(
                    <div style={mContainer}>
                            <SimuView sim={simulation} />
                            <div  >
                                <Log />     
                            </div>
                            <div style={sInputBox}>
                                {/* <Temp />  */}
                                <Game />   
                            </div>
                    </div>
                )
          }else{
            return(
                <div style={dContainer}>
                    <SimuView sim={simulation} />
                    <div style={dPanel}>
                        <div >
                            <Log />     
                        </div>
                        <div style={sInputBox} >
                            <Game />   
                        </div>
                    </div>
                    <div style={dPanel} >
                        <Temp /> 
                    </div>
                </div>
            )
          }
      }
    render(){
        return(
            this.renderLayout()
        )
    }
}

export default Index;

const mContainer = {
    backgroundColor: 'blue',
    position: 'absolute',
    display: 'flex',
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden'
}
const dContainer = {
    backgroundColor: 'blue',
    position: 'absolute',
    marginTop: '20px',
    display: 'flex',
    height: '100vh',
    width: '100%',
    flexDirection: 'row',
    overflow: 'hidden'
}

var sInputBox = {
    flexGrow: '2',
    border: '4px solid green'
}
const dPanel = {
    flexGrow: '1',
    flexDirection: 'column',
    backgroundColor: 'yellow'
}
