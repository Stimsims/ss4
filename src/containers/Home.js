
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Menu from './../components/layout/MainMenu.jsx';
import Trends from './../components/Trends.jsx';
import Bg from './../components/UI/elements/Bg.jsx';
import styled from 'styled-components';

class Games extends React.Component{
    constructor(props){
        super(props);
        // console.log("home");
        // console.log(this.props);
    }
    render(){
        return (
          <div>
            <Bg>
            <Trends />
            </Bg>
            <Menu />
          <PostBox>
            <Message>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            </Message>
            {this.props.posts.map(post => (
                <Post key={post.id}>
                  <Link key={post.id} to={`/posts/${post.id}`}>{post.title}</Link>
                </Post>
              ))}
          </PostBox>
        </div>
          )
    }
}

export default withRouteData(Games);
const Message = styled.h4`
  font-size:1.2em;
  color: rgb(255,255,255,1);
  width:100%;
`
const PostBox = styled.div`
  width: 50%;
  background-color: rgb(255,255,255,0.5);
  box-sizing: border-box;
`
const Post = styled.div`
  width:100%;
  height:100%;
  background-color: rgb(255,255,255,1);
  opacity:1;
  margin-top: 10px;
  border-bottom: 2px solid grey;
  padding:20px;
  box-sizing: border-box;
  a{
    width:100%;
    height:100%;
    color: grey;
    background-color: white;
    opacity:1;
  }
`