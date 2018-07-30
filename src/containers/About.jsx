
import React from 'react'
import { connect } from 'react-redux'
import {withSiteData} from 'react-static';
import Table from './../components/UI/elements/Table.jsx';
import Text from './../components/UI/elements/Text.jsx';
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
      <Box>
        {/* <Menu /> */}
        <Text tag={'h1'} colorKey='textInverted' text={`This is what we're all about.`}/>
        <Text tag={'p'} colorKey='textInverted' text={`React, static sites, performance, speed. It's the stuff that makes us tick.`}/>
        {/* <h1>This is what we're all about.1</h1> */}
        {/* <p>
          React, static sites, performance, speed. It's the stuff that makes us
          tick.
        </p> */}
      </Box>
    )
  }
}
About.displayName = 'mAbout';
export default withSiteData(About)

const Box = styled.div`
    height: 100%;
    width: 100%;
    padding-bottom: 100px;
    background-color ${props => props.theme[props.theme.theme].neutral};
    
`
