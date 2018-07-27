
import React from 'react'
import { withRouteData, Link } from 'react-static'
//import Menu from './../components/layout/MainMenu.jsx';
import Icon from './../components/UI/elements/IconButton.jsx';
import styled from 'styled-components';
import Talkit from './../components/UI/elements/TalkitGame.jsx';
import Container from './../components/UI/elements/Container';

import Center from './../components/UI/elements/CenterBox';
import Loading from './../components/UI/animations/Loading.jsx';
import MyLog from 'MyLog';
//import katex from 'react-katex';
class Games extends React.Component{
    constructor(props){
        super(props);
        //iterate through content, create talkit for each game node
       // console.log("Post constructor", props);
        MyLog('log', "Post constructor", props);
        let games = {};
        if(props.post.content){
            props.post.content.map((c, i) => {
                if(c.type=="game"){
                    games[i] = <Talkit tree={c.content}/>
                }
            })
        }

        this.state = {
            games
        }
    }
    componentDidMount(){
        MyLog('log', "Post componentDidMount");
    }
    componentDidUnmount(){
        MyLog('log', "Post componentDidUnmount");
    }
    importKatex(){
        import(/* webpackChunkName: "mykatex" */ 'react-katex')
        .then(r=>{

        })
        .catch(e=>{

        })
    }
    importGraph(){
        import(/* webpackChunkName: "mygraph" */ 'recharts')
        .then(r=>{

        })
        .catch(e=>{

        })
    }
    renderTags(){
    //    console.log("indi post render tags", this.props);
        if(this.props.post.tags){
            return (<p>
                {this.props.post.tags.map(t => {
                    return <span> {t} </span>
                })}
            </p>
            )
        }
    }
    renderContent(){
        if(this.props.post.content){
            return this.props.post.content.map((c, i) => {
                if(c.type == "text"){
                    return <p>{c.content}</p>
                }else if(c.type == "game"){
                    return this.state.games[i];
                   // return <Game>{this.renderGame()}</Game>;
                }
            })
        }
    }
   /*
      let size = this.props.size? this.props.size:24;
      let icon = this.props.iconColor? this.props.iconColor:'white';
      let bg = this.props.bg? this.props.bg:'grey';
      let bgHover = this.props.bgHover? this.props.bgHover: 'red';
   */
    renderBody(){
        //if exiting, don't bother with translate this.props.animationState === 1
        //parent animations don't seem to restart child transitions
        if(this.props.animationState === 1){
            console.log("renderPosts called with state 1");
            return (
                <div>
                    {/* <Menu /> */}
                    <Title>{this.props.post.title}</Title>
                    {this.renderTags()}
                    {this.renderContent()}
                    {this.renderContent()}
                    {this.renderContent()}
                    <Shareable>
                        <Icon icon={"done"} />
                        <Icon icon={"delete"} />
                        <Icon icon={"cached"} />
                        <Icon icon={"save"} />
                    </Shareable>
                                            {/* <Center>
                            <Loading />
                        </Center> */}
                </div>

            )
        }else{
            return <p>Not rendering that when leaving!!</p>
        }
    }
    render(){
        return (
            <Container fixed={false}>
                {this.renderBody()}
            </Container>
            // <div style={{color: `${this.state.color}`}}>
            //     <button onClick={()=>{this.setState({color: this.state.color === 'red'?'blue':'red'})}}>toggle</button>
            //     <p>Not rendering that when leaving!! {this.state.whatever}</p>
            // </div>
          )
    }
}
Games.displayName='Post';
export default withRouteData(Games);

const Box = styled.div`
    height: 100%;
    width: 100%;
    vertical-align: middle;
    margin: auto;
    background-color: pink;
    text-align: center;
`
const Shareable = styled.div`
    margin:auto;
`
const Title = styled.h2`
    text-transformation: capitalize;
    text-align: center;
`
