import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
                return <button onClick={()=>{this.props.onLoadGame(saveId[0].id)}}>save file {saveId[0].id}</button>
            }else{
                return <button onClick={()=>{this.props.onNewGame(this.props.names[i])}}>New Game {this.props.names[i]}</button>
            }
            
        })
    }

    render(){
        return(
            <Container>
                <Game>
                    <Img />
                    <p>
                        Game description game description game description Game description game description game description Game description game description game description
                    Game description game description game description Game description game description game description Game description game description game description
                    </p>
                </Game>
                <Files>
                    {this.renderFiles()}
                </Files>
            </Container>
        )
    }
}

export default LoadView;
const File = styled.button`
    width: 90%;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);
    height: 150px;
    background: white;
`
const Img = styled.div`
    background-color: grey;
    width: 100%;
    height: 300px;
    @media only screen and (min-width: ${props=>props.theme[props.theme.theme].mediaMinWidth}) {
        height: 150px;
    }
`
const Container = styled.div`
    background: pink;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    @media only screen and (min-width: ${props=>props.theme[props.theme.theme].mediaMinWidth}) {
        flex-direction: row;
    }
`
const Game = styled.div`
    flex:1;
    background: blue;
    padding: 10px;
` 
const Files = styled.div`
    flex:1;
    background: orange;
    display: relative;
    padding: 10px;
`
const New = styled.div`
    height: 100px;
    width: 100%;
    line-height: 140px;
    margin: auto;
    padding: 20px;
    background: red;
    text-align: left;
    vertical-align: middle;
    button:{
        width: 50%;
        height: 40px;
    }
`
const Save = styled.div`
    height: 80%;
    width: 100%;
    background:magenta;
`
