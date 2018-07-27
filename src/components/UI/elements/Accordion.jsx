import React from 'react';
import styled from 'styled-components';
import Icon from './IconButton.jsx';
import ReactGa from 'react-ga';
import {connect} from 'react-redux';
import Button from './Button.jsx';
//import themes from './../theme.js';

class FoldOut extends React.Component{
    constructor(props){
        super(props);
        //console.log("Accordion constructor", props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            open: false,
            iOpen: 'open',
            iSelect: 'select'
        }
    }
    handleClick(type){
        //console.log("handleClick type ", type);
        if(type == this.state.iOpen){
            //aTheme.theme = aTheme.theme == 'a'? 'b':'a';
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
                <Wrapper style={{display: 'inline-block', transform: 'rotate(180deg)'}}>
                    <Icon icon={"up"}  onInput={()=>{this.handleClick(this.state.iOpen)}}/>
                </Wrapper>
             )
        }else{
            return (
                <Wrapper style={{display: 'inline-block', transform: 'rotate(0deg)'}}>
                    <Icon icon={"up"}  onInput={()=>{this.handleClick(this.state.iOpen)}}/>
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
            <div style={{width: '100%', padding: '10px', margin: '20px 0 0 0', overflow: 'hidden'}}>
            <Pill >
                <Panel>
                    <FlexChild>{this.renderOpenButton()}</FlexChild>
                    <FlexChild>
                        <Stack>
                            <h3>{this.props.title}</h3>
                            <p>{this.props.subtitle}</p>
                        </Stack>
                    </FlexChild>
                    <Mid />
                    {/* <FlexChild><Button onInput={()=>{this.handleClick(this.state.iSelect)}}>{this.props.callToAction()}</Button></FlexChild> */}
                    <FlexChild>{this.props.callToAction()}</FlexChild>
                </Panel>
                {this.renderFoldOut()}
            </Pill>
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
const Stack = styled.ul`
    display: inline-block;
    list-style-type: none;
    margin: 0;
    padding: 0;
    h3, p{
        margin: 3px;
    }
`
const Accordion = styled.div`
    margin: 0;
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
        return props.theme[props.theme.theme].animM
    }} ease;
    display: 'inline-block'; 
`
const Pill = styled.div`
    border-radius: 50px;
    background-color: ${props=>{
      //  console.log("accordion props theme " + props.theme.theme + " main = " + props.theme[props.theme.theme].main, props.theme);
        return props.theme[props.theme.theme].main
    }};
    padding: 10px;
    margin: auto;
`
const Panel = styled.div`
    align-items: baseline;  
    display: flex;
`

const Mid = styled.span`
    display: inline-block;
    flex: 1;
`

const FlexChild = styled.span`
    align-self: center  
`