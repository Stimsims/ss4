
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import Menu from './../components/layout/MainMenu.jsx';
//import Trends from './../components/Trends.jsx';
//import Bg from './../components/UI/elements/Bg.jsx';
import Container from './../components/UI/elements/Container';
import styled from 'styled-components';
import FadeIn from './../components/UI/animations/FadeIn.jsx';
import SlideUp from './../components/UI/animations/SlideUp';
import PostList from './../components/layout/PostList.jsx';

class Games extends React.Component{
    constructor(props){
        super(props);
        console.log("home constructor", props);
        // console.log("home");
        // console.log(this.props);
    }
    componentDidMount(){
      console.log("home component did mount");
    }
    render(){
        return (
          <div>
            {/* <Bg>
              <Trends />
            </Bg> */}
            <Bg z={-1000}>
              {/* <Trends/> */}
            </Bg>
            <Bg color={'transparent'} z={1}>
              {/* <Menu /> */}
              <SlideUp>
                <PostBox>
                  
                  <Message>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  </Message>
                  <PostWrapper>
                    <PostList posts={this.props.posts} />
                  </PostWrapper>
                </PostBox>
              </SlideUp>
            </Bg>
        </div>
          )
    }
}

export default withRouteData(Games);
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
  height: 50vh;
`
const PostBox = styled.div`
  width: 50%;
  background-color: rgb(255,255,255,0.5);
  margin-top: 100px;
  margin-left: 55px;

`

const Bg = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1000;
    overflow: hidden;
    margin: ${props => props.margin? props.margin:'0px'};
    background-color: ${props => props.color? props.color:props.theme[props.theme.theme].neutralD};
`

/*
    position:absolute;
    top: 0;
    left:0;
    bottom:0;
    right:0;
*/