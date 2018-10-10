
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static';
import Bg from './../components/UI/elements/Background.jsx';
import Text from './../components/UI/elements/Text.jsx';
import Score from './../components/UI/elements/Score/index.jsx';
import styled from 'styled-components';
import * as MyLog from 'MyLog';

class Home extends React.Component{
    constructor(props){
        super(props);
        MyLog.style('Home constructor', 'magenta');
    }

    render(){
        return (
         <Box>
            <Text tag={'p'} itemprop="name" text={`
                Choices made indicate the qualities of the person making them. 
                Problems can be split into dimensions, and performance can be measured.
                These measurements are insights into difficult to measure aspects of you.
            `} align={'center'} width={'100%'}/>
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
    background-color ${props => props.theme.neutral};
  
`