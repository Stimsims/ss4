
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Menu from './../components/layout/MainMenu.jsx';
import Trends from './../components/Trends.jsx';
import Bg from './../components/UI/elements/Bg.jsx';
import Container from './../components/UI/elements/Container';
import styled from 'styled-components';
import FadeIn from './../components/UI/animations/FadeIn.jsx';
import SlideUp from './../components/UI/animations/SlideUp';
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
            <Container>
              <Menu />
              <SlideUp>
                <PostBox>
                  
                  <Message>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  </Message>
                
                  {this.props.posts.map((post, i) => {
                    return(
                        
                        <Link key={post.id} to={`/posts/${post.id}`} classNames={'homepost'}>
                          <Post key={post.id} style={{"transitionDelay": `${ i * .15 }s` }}>
                            <h2>{post.title}</h2>
                            <p>
                            {post.tags.map(t => {
                              return t + " "
                            })}
                            </p>
                          </Post>
                        </Link>
                      
                    )
                  })}
                
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
const Post = styled.div`
  width:100%;
  height:100%;
  opacity:1;
  margin-top: 5px;
  padding:20px;
  padding-bottom: 5px;
  box-sizing: border-box;
  border-bottom: 2px solid white;
  transition: all 0.5s ease-in;
  &:hover{
    background-color: white;
  }
  h2{
    font-size: 1.5em;
    display: inline;
    color: red;
    opacity:1;
  }
  p{
    font-size: 0.7em;
    display: inline;
    color: black;
    opacity:1;
  }
`