import React from 'react';
import {Link} from 'react-static';
import styled from 'styled-components';

const key = 'post'

const component = (props) => {
   // return <p>post {props.post.id}</p>
   return(
        <Link to={`/posts/${props[key].id}`} key={props[key].id} >
            <Post key={props[key].id}>
                <h2>{props[key].title}</h2>
                <p>
                    {props[key].tags.map((t, i) => {
                    return i===0? ""+t:", "+t;
                    })}
                </p>
            </Post>
        </Link>
   )
};
const Post = styled.div`
  width:100%;
  opacity:1;
  margin: 10px 0px 0px 0px;
  padding:20px 20px 5px 20px;
  border-radius: 5px;
  background-color:  ${props=>props.theme[props.theme.theme].primary};
  transition: all  ${props=>props.theme[props.theme.theme].animS} ease-in;
  &:hover{
    background-color: ${props=>props.theme[props.theme.theme].primaryL};
  }
  h2{
    font-size: 1.7em;
    display: inline;
    color: ${props=>props.theme[props.theme.theme].text};
    opacity:1;
    text-transform: capitalize;
    margin:0
    line-height: 75px;
    vartical-align: bottom;
  }
  p{
    font-size: 1em;
    color: ${props=>props.theme[props.theme.theme].textInverted};
    opacity:1;
    display: inline;
    text-align: right;
    float: right;
    margin:0
    line-height: 75px;
    vartical-align: bottom;
  }
  @media only screen and (min-width: 500px) {
    width:100%;
    max-width:400px;
    background-color: ${props=>props.theme[props.theme.theme].primary};
    margin: 10px auto 0px auto;
  }
`

export default {
    component,
    key
}

