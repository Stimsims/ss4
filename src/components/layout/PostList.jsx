import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';
import SlideUp from './../UI/animations/SlideUp.jsx';

export default class PostList extends React.Component{
    render(){
        if(this.props.posts){
            return (
                this.props.posts.map((post, i)=>{
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
            )
        }else{
            return <p>No posts to render</p>
        }
    }
}


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
    text-transform: capitalize;
    margin:0
  }
  p{
    font-size: 0.7em;
    color: black;
    opacity:1;
  }
`