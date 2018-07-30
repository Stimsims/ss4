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
            case 'cached':
                return 'blue';
            case 'arrow':
                return 'yellow';
            case 'save':
                return 'green';
            case 'settings':
                return 'pink';
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
        }
    }
    render() {
        //themeprovider provides base theme, can be overridden
      return (
            <Btn bg={this.props.bg} hover={this.props.hover? this.props.hover:this.getColor(this.props.icon)} onClick={this.props.onInput}>
                <img src={this.getImg(this.props.icon)}/>
            </Btn>
      );
    }
}

export default Icon;

   //${props => props.primary ? 'blue' : props.theme.main}
   const Btn = styled.button`
    width:36px;
    height:36px;
    padding:0;
    margin: 0px;
    background-color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].textInverted}; /* Blue background */
    border: none; /* Remove borders */
    cursor: pointer; /* Mouse pointer on hover */
    outline: none;
    border-radius:50%;
    vertical-align: middle;
    transition: background-color ${props=>props.theme[props.theme.theme].animS} ease-in;
    &:hover {
        background-color: ${props => {
            //console.log("icon btn props", props);
            return props.hover? props.hover: props.theme[props.theme.theme].accent;
        }};
    };
    img{  
        margin: 0;
        padding: 0;
        border: none;
        vertical-align: middle;
    }
`
