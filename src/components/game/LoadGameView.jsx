import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import iVideoGame from './../../assets/baseline-videogame_asset-24px.svg';
import TextBox from './../UI/elements/TextBox.jsx';
import Text from './../UI/elements/Text.jsx';

//renders new game, the saved games, the game img, title and description
class LoadView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            //files: this.getSaves(props.syncing, props.saves)
        }
    }

    renderFiles(){
        return this.props.names.map((n, i) => {
           // console.log('load view saves count ' + this.props.saves);
            let saveId = this.props.saves.filter(s => {
               // console.log("load view matchin save " + s.id + " wtih " + n);
                return s.id === n;
            })
           // console.log('load view found save file', saveId);
            if(saveId.length > 0){
                return <TextBox padding={'0px'}>
                    <Slots onClick={()=>{this.props.onLoadGame(saveId[0].id)}}>save file {saveId[0].id}</Slots>
                </TextBox>
            }else{
                return <TextBox padding={'0px'}>
                    <Slots onClick={()=>{this.props.onNewGame(this.props.names[i])}}>New Game {this.props.names[i]}</Slots>
                </TextBox>
            }
            
        })
    }

    render(){
        return(
            <Container>
                <Game>
                    <Img  />
                    <Text tag={'p'} colorKey={'textInverted'} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} />
                </Game>
                <Lower>
                    {this.renderFiles()}
                </Lower>
            </Container>
        )
    }
}

export default LoadView;

const Img = styled.div`
    width: 100%;
    height: 200px;
    z-index: 999;
    background-image: url(${iVideoGame});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`
const Container = styled.div`
    background: ${props => props.theme[props.theme.theme].neutralD};
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: ${props => props.theme[props.theme.theme].spaceM + 'px;'}
`
const Game = styled.div`
    flex:1;
    padding: 10px;
` 

const Slots = styled.button`
    width: 100%;
    height: 100%;
    padding: 30px 20px 10px 20px;
    outline: 0;
    border: none;
    text-align: left;
    background-color: ${props => props.theme[props.theme.theme].primary};
    margin: 0px;
    transirion: all 1s ease;
    border-radius: 5px; 
    &:hover{
        background-color:${props => props.theme[props.theme.theme].primaryL};
    }
`

const Lower = styled.div`
    flex:1;
`