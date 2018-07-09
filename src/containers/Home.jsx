
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import Menu from './../components/layout/MainMenu.jsx';
import Trends from './../components/Trends.jsx';
import Bg from './../components/UI/elements/Bg.jsx';
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
            <Bg>
              <Trends />
            </Bg>
            <Container color={'transparent'}>
              <Menu />
              <SlideUp>
                <PostBox>
                  
                  <Message>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  </Message>
                  <PostList posts={this.props.posts} />
                
                </PostBox>
              </SlideUp>
            </Container>
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
  box-sizing: border-box;
  a{
    width:100%;
    height:100%;
    opacity:1;
  }
`
const PostBox = styled.div`
  width: 50%;
  background-color: rgb(255,255,255,0.5);
  box-sizing: border-box;
  margin-top: 100px;
  margin-left: 55px;
`