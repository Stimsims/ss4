
import React from 'react'
import { connect } from 'react-redux'
import {withSiteData} from 'react-static';
import Table from './../components/UI/elements/Table.jsx';
import styled from 'styled-components';

const fnc = () => {
  return <div style={{backgroundColor: 'green', margin: '10px', height: '100%', width: '100%'}}>hi</div>
}
class About extends React.Component{
  constructor(props){
    super(props);
   // console.log("about constructor", props);
  }
  render(){
    return (
      <div style={{margin: '0', backgroundColor: 'red', width: '100%', height: '500px'}}>
        {/* <Menu /> */}
        <h1>This is what we're all about.1</h1>
        <p>
          React, static sites, performance, speed. It's the stuff that makes us
          tick.
        </p>
        
        <Table heights={['10%', '30%', null]}>
            {fnc()}
            {fnc()}
            {fnc()}
        </Table>
      </div>
    )
  }
}
About.displayName = 'mAbout';
export default withSiteData(About)

const Box = styled.div`
  margin: 10px;
  background-color: blue;
  width: 100px;
  height: 100px;
`