
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import TextBox from './../components/UI/elements/TextBox.jsx';
import Text from './../components/UI/elements/Text.jsx';
import styled from 'styled-components';
import Slide from './../components/UI/animations/Slide.jsx';
import iVideoGame from './../assets/baseline-videogame_asset-24px.svg';
import IconBtn from './../components/UI/elements/IconButton.jsx';
import Icon from './../components/UI/elements/Icon.jsx';

class Games extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    renderOpenButton(id){
        if(this.state[id]){
            return (
                <Wrapper style={{display: 'inline-block', transform: 'rotate(180deg)'}}>
                    <IconBtn color={'transparent'} hover={'red'} icon={"up"} round={true} onInput={()=>{
                        this.setState({
                            [id]: this.state[id]?false:true
                        })
                    }}/>
                </Wrapper>
             )
        }else{
            return (
                <Wrapper style={{display: 'inline-block', transform: 'rotate(0deg)'}}>
                    <IconBtn color={'transparent'}  hover={'red'} icon={"up"} round={true} onInput={()=>{
                        this.setState({
                            [id]: this.state[id]?false:true
                        })
                    }}/>
                </Wrapper>
             )
        }
    }
    render(){
        return (
            <GamesBox>
                <Slide width={'100%'} offset={100} duration={1500} childDelay={150}>
                
                    {this.props.items.map(p =>{
                            return (
                                <Post>
                                    <Fold>
                                        {this.renderOpenButton(p.id)}
                                        <h2>{p.title}</h2>
                                        <Link to={`/games/${p.id}`}>
                                            <Icon icon={"play"} color={'transparent'} hoverKey={'accent'}/>
                                        </Link>
                                    </Fold>
                                    <FoldOut open={this.state[p.id]}>
                                        <p>description</p>
                                    </FoldOut>
                                </Post>

                            )
                        } 
                    )}
                </Slide>
            </GamesBox>
          )
    }
}
Games.displayName = 'Games';
export default withRouteData(Games);
const FoldOut = styled.div`
    padding: 10px;
    transition: height 1s ease 0s;
    height: ${props=>props.open?'100px':'0px'};
    text-align: center;
    p{
        opacity: ${props=>props.open?'1':'0'};
        transition: opacity 0.25s ease 0.25s;
    }
`
const Fold = styled.div`
    width: 100%;
    
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
    h2{
        display: inline-block;
        margin: 0;
        flex: 1;
        color: ${props=>props.theme.text} !important;
        text-align: center;
        text-size: 1.2em;
    }
    p{
        display: inline-block;
        margin: 0;
        color: ${props=>props.theme.text} !important;
    }
    &:last-child{
        text-align: right;
    }
`
const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    transition: transform ${props => {
        return props.theme.animM
    }} ease;
    display: inline-block; 
`
const Post = styled.div`
    width: 100%;
    padding: 20px 20px 5px 20px;
    margin: 10px 0px;
    border-bottom: 5px solid red;
    background-color: transparent;
    transition: background-color ${props => props.theme.animS} ease-out;
    &:hover{
        background-color: ${props=> props.theme.neutralD};
    }
  
`
//background-color: ${props=> props.theme.neutral};

const Img = styled.div`
    width: 100%;
    height: 100px;
    z-index: 999;
    background-image: url(${iVideoGame});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`
const GamesBox = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding: ${props => props.theme.spaceM}px;
`
// const GamesBox = styled.div`
//     height: 100%;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     flex-wrap: wrap;
//     background-color: ${props => props.theme.neutral};
//     overflow-y: auto;
//     padding: ${props => props.theme.spaceM}px;
// `