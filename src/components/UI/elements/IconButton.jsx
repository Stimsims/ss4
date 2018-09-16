import React from 'react';
import styled from 'styled-components';
import iDel from './../../../assets/baseline-delete-24px.svg';
import iDone from './../../../assets/baseline-done-24px.svg';
import iCached from './../../../assets/baseline-cached-24px.svg';
import iArrow from './../../../assets/baseline-keyboard_arrow_right-24px.svg';
import iSave from './../../../assets/baseline-save-24px.svg';
import iSettings from './../../../assets/baseline-settings-20px.svg';
import iUpArrow from './../../../assets/baseline-keyboard_arrow_up-24px.svg';
import iPlay from './../../../assets/baseline-play_arrow-24px.svg';
import iMore from './../../../assets/baseline-more_vert-24px.svg';
import iBack from './../../../assets/round-arrow_back-24px.svg';
import iSync from './../../../assets/round-autorenew-24px.svg';
import iCloud from './../../../assets/round-cloud_upload-24px.svg';


class Icon extends React.Component {
    constructor(props) {
      super(props);
      //console.log("IconButton constructor props", props)
    }
    getColor(img){
        switch(img){
            case 'delete':
                return 'black';
            case 'done':
                return 'green';
            default:
                return 'orange';
        }
    }
    getImg(img){
        switch(img){
            case 'delete':
                return iDel;
            case 'done':
                return iDone;
            case 'cached':
                return iCached;
            case 'arrow':
                return iArrow;
            case 'save':
                return iSave;
            case 'settings':
                return iSettings;
            case 'up':
                return iUpArrow;
            case 'play':
                return iPlay;
            case 'more':
                return iMore;
            case 'back':
                return iBack;
            case 'cloud':
                return iCloud;
            case 'sync':
                return iSync;
        }
    }
    wrapButton(icon){
        if(this.props.text){
            return <TextBtn  onClick={this.props.onInput}>
                {icon}
                <Label>{this.props.text}</Label>
            </TextBtn> 
        }else{
            return <span style={{display:'inline-block', padding: '5px'}}>{icon}</span>;
        }
    }
    render() {
        //themeprovider provides base theme, can be overridden
        if(this.props.disabled){
            return (
                this.wrapButton(<Btn disabled className={this.props.classes} padding={this.props.padding}
                    disabled={true}  onClick={this.props.onInput} round={this.props.round}>
                    <img src={this.getImg(this.props.icon)}/>
                </Btn>)
            )
        }else{
            return (
                this.wrapButton(<Btn className={this.props.classes} padding={this.props.padding} bg={this.props.bg} 
                    hover={this.props.hover} 
                    onClick={this.props.onInput} round={this.props.round}>
                    <img src={this.getImg(this.props.icon)}/>
                </Btn>)
            )
        }
    }
}

export default Icon;

const Label=styled.p`
    padding: 5px;
    display: inline-block;
    visibility:hidden;
    opacity:0;
    transition:visibility 0.3s linear,opacity 0.3s linear;
    transition: all 1s ease;
    @media only screen and (min-width: ${props => props.theme[props.theme.theme].mediaMinWidth}) {
        visibility: visible;
        opacity:1;
    }
`
const TextBtn = styled.button`
    height:100%;
    display: inline-block;
    background-color: ${props => props.theme[props.theme.theme].neutral};
    border: none;
    outline: 0;
    padding: 0px 5px;
    transition: background-color 1s ease;
    &:hover{
        background-color: ${props => props.theme[props.theme.theme].neutralL};
    }
    p{
        padding: 0px 10px;
        display: inline-block;
    }
`
   //${props => props.primary ? 'blue' : props.theme.main}
   const Btn = styled.button`
    width:36px;
    height:36px;
    padding:${props=>props.padding?props.padding:'0'};
    margin: 0px;
    color: red;
    opacity: ${props =>{
        if(props.disabled){
            return '0.2';
        }else{
            return '1'
        }
    }};
    background-color: ${props =>{
        if(props.disabled){
            return props.theme[props.theme.theme].neutral
        }else{
            return props.theme[props.theme.theme].neutralL
        }
    }}; /* Blue background */
    border: none; /* Remove borders */
    cursor: pointer; /* Mouse pointer on hover */
    outline: none;
    border-radius:${props=>props.round? '50%':props.theme[props.theme.theme].roundCorners};
    vertical-align: middle;
    transition: background-color ${props=>props.theme[props.theme.theme].animS} ease-in;
    &:hover, &:focus{
        background-color: ${props => {
            if(props.disabled){
                return props.theme[props.theme.theme].neutral
            }else{
                return 'orange'
            }
        }};
    };
    img{  
        margin: 0;
        padding: 0;
        border: none;
        vertical-align: middle;
    }
`
