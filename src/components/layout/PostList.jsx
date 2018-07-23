import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';
import SlideUp from './../UI/animations/SlideUp.jsx';
import NodeGroup from 'react-move/NodeGroup';
import { easeExpInOut } from 'd3-ease';

export default class PostList extends React.Component{
    render(){
        if(this.props.posts){
            return(<Wrapper>
                <NodeGroup
                    data={this.props.posts}
                    keyAccessor={(p) => p.id}

                    start={(d, i) => ({
                        transY: [-1000],
                        timing: { duration: 800, delay: i*300,  ease: easeExpInOut },
                    })}

                    enter={(d, i) => {
                        //console.log("enter anim i = " + i, d);
                        return {
                            transY: [0],
                            timing: { duration: 800, delay: i*300,  ease: easeExpInOut },
                        }
                    }}
                >
                    {(nodes) => (
                        <div>
                            {nodes.map(({ key, data, state }) => {
                            const { transY, ...rest } = state;
                            return (
                                <Link to={`/posts/${data.id}`} key={key} style={{display: 'block', translate: 'all 1s ease', transform: `translate(0, ${transY}px)`}}>
                                    <Post key={key}>
                                        <h2>{data.title}</h2>
                                        <p>
                                            {data.tags.map((t, i) => {
                                            return i===0? ""+t:", "+t;
                                            })}
                                        </p>
                                    </Post>
                                </Link>
                            );
                            })}
                        </div>
                    )}
                </NodeGroup>
            </Wrapper>)
        }else{
            return <p>No posts to render</p>
        }
    }
}

const Wrapper = styled.div`
    width:100%;
    top:0; left: 0; right:0; bottom: 0;
    padding: 10px;
    position: absolute;
    overflow-y: auto;
`
const Post = styled.div`
  width:100%;
  height: 75px;
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

/*
    <Link key={post.id} to={`/posts/${post.id}`} classNames={'homepost'}>
        <SlideUp>
            <Post key={post.id} style={{"transitionDelay": `${ i * .15 }s` }}>
                <h2>{post.title}</h2>
                <p>
                    {post.tags.map((t, i) => {
                    return i===0? ""+t:", "+t;
                    })}
                </p>
            </Post>
        </SlideUp>
    </Link>
*/