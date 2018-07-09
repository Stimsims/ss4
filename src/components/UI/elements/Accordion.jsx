import React from 'react';
import styled from 'styled-components';
import Icon from './IconButton.jsx';
import ReactGa from 'react-ga';
import {connect} from 'react-redux';
import Button from './Button.jsx';

class FoldOut extends React.Component{
    constructor(props){
        super(props);
        console.log("Accordion constructor", props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            open: false,
            iOpen: 'open',
            iSelect: 'select'
        }
    }
    handleClick(type){
        if(type == this.state.iOpen){
            this.setState({
                open: !this.state.open
            })
            //console.log("accordion gapi? " + this.props.gapi.gapiReady + " event? ", this.props.event);
            if(this.props.gapi.gapiReady && this.props.event){
                //ReactGa.event({...this.props.event, action: 'accordion'});
            }
        }else if(type == this.state.iSelect){
            //open the game save/load page
        }
    }
    renderOpenButton(){
        if(this.state.open){
            return (
                <Wrapper style={{display: 'inline-block', transform: 'rotate(90deg)'}}>
                    <Icon icon={"arrow"} color={'red'} onInput={()=>{this.handleClick(this.state.iOpen)}}/>
                </Wrapper>
             )
        }else{
            return (
                <Wrapper style={{display: 'inline-block', transform: 'rotate(0deg)'}}>
                    <Icon icon={"arrow"} color={'red'} onInput={()=>{this.handleClick(this.state.iOpen)}}/>
                </Wrapper>
             )
        }
    }
    renderFoldOut(){
        if(this.state.open){
            return <Accordion><p className={'open'}>{this.props.children}</p></Accordion>;
        }else{
            return <Accordion><p className={'closed'}>{this.props.children}</p></Accordion>
        }
    }
    render(){
        return (
            <div>
                <Panel>
                    <Left>
                        {this.renderOpenButton()}
                        <p>{this.props.snippet}</p>
                    </Left>
                    <Right>
                        <Button onInput={()=>{this.handleClick(this.state.iSelect)}}>{this.props.callToAction()}</Button>
                    </Right>
                </Panel>
                {this.renderFoldOut()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return(
        {gapi: state.gapi}
    )
}
export default connect(mapStateToProps)(FoldOut);

const Accordion = styled.div`
    margin: 0px;
    padding: 0px;
    .open{
        max-height: 400px;
        opacity: 1;
        padding: 10px;
        margin: 0px;
        transition: all 1s ease;
    }
    .closed{
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        padding: 0px 10px 0px 10px;
        margin: 0px;
        transition: all 1s ease;
    }

`
const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    transition: transform ${props => {
        return props.theme.animM
    }} ease;
    display: 'inline-block'; 
`
const Panel = styled.div`
    width:100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: pink;
`
const Left = styled.span`
    display:inline-block;
    background: yellow;
    margin: 0;
    p{
        display: inline;
    }
`
const Right = styled.span`
    background: green;
    float: right;
    margin: 0;
`