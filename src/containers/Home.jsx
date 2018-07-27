
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import Container from './../components/UI/elements/Container.jsx';
import Bg from './../components/UI/elements/Background.jsx';
import Flex from './../components/UI/elements/Flexbox.jsx';
import Text from './../components/UI/elements/Text.jsx';
import styled from 'styled-components';
import Translate from './../components/UI/animations/Translate.jsx';
import PostItem from './../components/layout/PostItem.jsx';
import Trends from './../components/Trends.jsx';
import MyLog from 'MyLog';
// import ReactCSSTransitionGroup from 'react-transition-group';
import FadeIn from './../components/UI/animations/FadeIn.jsx';

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
         <div>
          <Bg fixed={false} height={'100%'} z={1} width={'100%'} colorKey={'neutral'} margin={'0'} padding={'0px 0px 0px 0px'}>
              <Trends/>
          </Bg>
          <PostBox>
                <Message>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                </Message>
                <PostWrapper>
                  <Translate items={this.props.posts} itemKey={PostItem.key} itemId={'id'} 
                          component={PostItem.component}  y={{start: -800, enter: 0, unit: 'px'}}/>
                </PostWrapper>
          </PostBox>
        </div>
        )
        // return(
        //         <PostBox>
        //           <Message>
        //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        //           ut labore et dolore magna aliqua. 
        //           </Message>
        //           <PostWrapper>
        //             <Translate items={this.props.posts} itemKey={PostItem.key} itemId={'id'} 
        //                     component={PostItem.component}  y={{start: -800, enter: 0, unit: 'px'}}/>
        //           </PostWrapper>
        //         </PostBox>
        // )
       // return <p>Not rendering that when leaving!!</p>
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