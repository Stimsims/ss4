
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static';
import Bg from './../components/UI/elements/Background.jsx';
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
         <div style={{height: '100%', width: '100%'}}>
          <Bg fixed={false} height={'100%'} z={1} width={'100%'} colorKey={'neutral'} margin={'0'} padding={'0px 0px 0px 0px'}>
              <Trends/>
          </Bg>
          {/* <PostBox>
                <Message>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                </Message>
                <PostWrapper>
                {this.props.items.map(p=>{
                      return <PostItem.component post={p} />
                    })}
                </PostWrapper>
          </PostBox> */}
        </div>
        )
    }
}
Home.displayName='Home';
export default withRouteData(Home);

const Message = styled.h4`
  font-size:1em;
  color: rgb(255,255,255,1);
  width:100%;
  padding: 10px;
  padding-bottom:0px;

`
const PostWrapper = styled.div`
  position: relative;
  width: 100%;
`
const PostBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 100px;
  width: 50%;
  height: 50vh;
  background-color: rgb(255,255,255,0.5);
  margin-left: 55px;

`