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
import iFacebook from './../../../assets/iconmonstr-facebook-4.svg';
import iGooglePlus from './../../../assets/iconmonstr-google-plus-4.svg';
import iTwitter from './../../../assets/iconmonstr-twitter-4.svg';


class Icon extends React.Component {
    constructor(props) {
      super(props);
      //console.log("IconButton constructor props", props)
    }
    render() {
       // return <Container><ImgWrapper><Img src={this.getImg(this.props.icon)}/></ImgWrapper></Container>
        return <Container icon={this.props.icon} rotate={this.props.rotate} round={this.props.round} 
            colorKey={this.props.colorKey} color={this.props.color} hoverKey={this.props.hoverKey} hover={this.props.hover}/>
    }
}

export default Icon;

const Container = styled.div`
    position:relative;
    display: inline-block;
    text-align: center;
    outline: 0;
    border: none;
    vertical-align: middle;
    background-image: url(${
        props => {
            switch(props.icon){
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
                case 'fb':
                    return iFacebook;
                case 'gp':
                    return iGooglePlus;
                case 'twitter':
                    return iTwitter;
                default:
                    return iSync;
            }
        }
    });
    background-repeat: no-repeat;
    background-position: center;
    width:${props=>props.width?props.width+"px":'44px'};
    height:${props=>props.height?props.height+"px":'44px'};
    border-radius: ${
        props => {
            if(props.round === true){
                return '50%';
            }else if(props.round){
                return props.round;
            }else{
                return '0';
            }
        }
    };
    background-color: transparent;
    transition: all 1s ease;
    &:hover{
        background-color: background-color: ${props=>{
            if(props.colorKey){
                return props.theme[props.hoverKey]
            }else if(props.color){
                return props.hover;
            }else{
                return props.theme.primary;
            }
            //return 'transparent';
            //return props.theme.neutral;
            //props.colorKey?props.color:props.theme.neutralL
        }};;
    }
    transform: rotate(${props=>props.rotate?props.rotate:'0'}deg);

`
/*
    background-color: ${props=>{
        if(props.colorKey){
            return props.theme[props.colorKey]
        }else if(props.color){
            return props.color;
        }else{
            return props.theme.neutral;
        }
        //return 'transparent';
        //return props.theme.neutral;
        //props.colorKey?props.color:props.theme.neutralL
    }};


    &:hover{
        ${props=>{
            if(props.hoverKey){
                return 'background-color: ' + props.theme[props.hoverKey] + ";"
            }
        }};
    }
*/