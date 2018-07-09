
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Menu from './../components/layout/MainMenu.jsx';
import Icon from './../components/UI/elements/IconButton.jsx';
import styled from 'styled-components';
import Talkit from './../components/UI/elements/TalkitGame.jsx';
import Container from './../components/UI/elements/Container';

class Games extends React.Component{
    constructor(props){
        super(props);
        //iterate through content, create talkit for each game node
        console.log("Post constructor", props);
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
    
    renderTags(){
        console.log("indi post render tags", this.props);
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
    render(){
        return (
            <Container>
            <div>
              <Menu />
              <Title>{this.props.post.title}</Title>
              {this.renderTags()}
              {this.renderContent()}
              <Shareable>
                <Icon icon={"done"} />
                <Icon icon={"delete"} />
                <Icon icon={"cached"} />
                <Icon icon={"save"} />
              </Shareable>
            </div>
            </Container>
          )
    }
}

export default withRouteData(Games);

const Shareable = styled.div`
    margin:auto;
`
const Title = styled.h2`
    text-transformation: capitalize;
    text-align: center;
`
