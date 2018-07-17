import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';
import SlideUp from './../UI/animations/SlideUp.jsx';

export default class PostList extends React.Component{
    render(){
        if(this.props.posts){
            return(<Wrapper>
                {this.props.posts.map((post, i)=>{
                        return(
                        
                            <Link key={post.id} to={`/post/${post.id}`} classNames={'homepost'}>
                                <SlideUp>
                                    <Post key={post.id} style={{"transitionDelay": `${ i * .15 }s` }}>
                                        <h2>{post.title}</h2>
                                        <p style={{color:'grey'}}>
                                            {post.tags.map((t, i) => {
                                            return i===0? ""+t:", "+t;
                                            })}
                                        </p>
                                    </Post>
                                </SlideUp>
                            </Link>
                    
                    )}
                    )
                }
            </Wrapper>)
        }else{
            return <p>No posts to render</p>
        }
    }
}

const Wrapper = styled.div`
    width:100%;
    height:100%;
    padding: 10px;
`
const Post = styled.div`
  width:100%;
  height:100%;
  opacity:1;
  margin: 10px 0px 0px 0px;
  padding:10px 10px 3px 10px;
  border-radius: 10px;
  background-color:  ${props=>props.theme.primary};
  transition: all  ${props=>props.theme.animS} ease-in;
  &:hover{
    background-color: white;
  }
  h2{
    font-size: 1.5em;
    display: inline;
    color: ${props=>props.theme.text};
    opacity:1;
    text-transform: capitalize;
    margin:0
    background-color: red;
  }
  p{
    font-size: 0.7em;
    color: black;
    opacity:1;
    display: inline;
    background-color: green;
    text-align: right;
    float: right;
  }
`