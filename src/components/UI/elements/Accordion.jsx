import React from 'react';
import styled from 'styled-components';
import Icon from './IconButton.jsx';
import ReactGa from 'react-ga';
import {connect} from 'react-redux';
import Button from './Button.jsx';
//import themes from './../theme.js';
const aTheme =     {
    theme: 'a',
    a:{
        main: 'green',
        animS: '0.3s',
        animM: '0.5s',
        neutral: 'green',
        neutralD: 'green',
        neutralL: 'green',
        text: '#303030',
        textInverted: '#D1D1D1',
        transparent: 'transparent',
        primary: 'green',
        primaryL: 'green',
        primaryD: 'green',
        accent: '#24C2C7',
        accentD: '#157275',
        accentL: '#7ACFDB'
    },
    b:    {
        main: 'pink',
        animS: '0.3s',
        animM: '0.5s',
        neutral: 'pink',
        neutralD: 'pink',
        neutralL: 'pink',
        text: '#303030',
        textInverted: '#D1D1D1',
        transparent: 'transparent',
        primary: 'pink',
        primaryL: 'pink',
        primaryD: 'pink',
        accent: '#24C2C7',
        accentD: '#157275',
        accentL: '#7ACFDB'
    },
}
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
                <Wrapper style={{display: 'inline-block', transform: 'rotate(90deg)'}}>
                    <Icon icon={"arrow"}  onInput={()=>{this.handleClick(this.state.iOpen)}}/>
                </Wrapper>
             )
        }else{
            return (
                <Wrapper style={{display: 'inline-block', transform: 'rotate(0deg)'}}>
                    <Icon icon={"arrow"}  onInput={()=>{this.handleClick(this.state.iOpen)}}/>
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
            <div style={{width: '100%', padding: '10px', overflow: 'hidden'}}>
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
                    <FlexChild><Button onInput={()=>{this.handleClick(this.state.iSelect)}}>{this.props.callToAction()}</Button></FlexChild>
                    {/* <Left>
                        {this.renderOpenButton()}
                        <Stack>
                            <h3>{this.props.title}</h3>
                            <p>{this.props.subtitle}</p>
                        </Stack>
                    </Left>
                    <Mid />
                    <Right>
                        <Button onInput={()=>{this.handleClick(this.state.iSelect)}}>{this.props.callToAction()}</Button>
                    </Right> */}
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
        return props.theme[props.theme.theme].animM
    }} ease;
    display: 'inline-block'; 
`
const Pill = styled.div`
    border-radius: 50px;
    background-color: ${props=>{
        console.log("accordion props theme " + props.theme.theme + " main = " + props.theme[props.theme.theme].main, props.theme);
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