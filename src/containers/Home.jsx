
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static';
import Bg from './../components/UI/elements/Background.jsx';
import Text from './../components/UI/elements/Text.jsx';
import Score from './../components/UI/elements/Score/index.jsx';
import styled from 'styled-components';
import Trends from './../components/UI/graphs/Trends.jsx';
import MyLog from 'MyLog';

class Home extends React.Component{
    constructor(props){
        super(props);
        MyLog('log', 'Home constructor');
    }
    renderGraph(){
      //console.log("home component renderGraph animationState " + this.props.animationState);
      if(this.props.animationState === 1){
            return <Trends/>
      }
      return null;
    }
    render(){
        return (
         <Box>
            <Text tag={'h2'} itemprop="name" text={'You?'} align={'center'} colorKey={'accent'} width={'100%'}/>
            <Score score={'0.7'} title={'Probability'} desc={'success at estimating chance branching factor.'}/>
            <Score score={0.2} title={'Charisma'} desc={'Knowing what to say and when to say it.'}/>
        </Box>
        )
    }
}
Home.displayName='Home';
export default withRouteData(Home);
const Box = styled.div`
    height: 100%;
    width:100%;
    margin: auto;
    background-color ${props => props.theme[props.theme.theme].neutral};
  
`
// const Message = styled.h4`
//   font-size:1em;
//   color: rgb(255,255,255,1);
//   width:100%;
//   padding: 10px;
//   padding-bottom:0px;

// `
// const PostWrapper = styled.div`
//   position: relative;
//   width: 100%;
// `
// const PostBox = styled.div`
//   position: absolute;
//   z-index: 10;
//   top: 100px;
//   width: 50%;
//   height: 50vh;
//   background-color: rgb(255,255,255,0.5);
//   margin-left: 55px;

// `