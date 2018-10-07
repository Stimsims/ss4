import React from 'react';
import styled from 'styled-components';
import Icon from './Icon.jsx';

const WIDTH = '44';
class IconBtn extends React.Component {
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
    wrapButton(icon){
        let disabled = {};
        if(this.props.disabled) disabled.disabled=true;
        if(this.props.text){
            return (
                <TextBtn round={this.props.round} 
                className={this.props.classes} {...disabled} onClick={this.props.onInput}>
                    <Overlay/>
                        {icon}
                        <Label>{this.props.text}</Label>
                </TextBtn>
            )
        }else{
            return (
                <Btn round={this.props.round} className={this.props.classes} {...disabled} 
                onClick={this.props.onInput} >
                        <Overlay width={`${WIDTH}px`} round={'50%'} />
                        {icon}
                </Btn>
            )

        }
    }
    render() {
        return (
            this.wrapButton(<Icon width={`${WIDTH}px`} height={`${WIDTH}px`} icon={this.props.icon} />)
        )
    }
}

export default IconBtn;
const Overlay = styled.span`
    
    text-align: center;
    vertical-align: middle;
    z-index: 999; 
    position: absolute;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%; 
    height: 100%;
    margin: auto;
    transition: all 1s ease;
    background-color: rgba(255,255,255,0);
    &:hover{
        background-color: rgba(255,255,255,0.1);
    }
`
const Label=styled.p`
    display: block;
    position: relative;
    height: ${props => props.height?props.height+'px':props.theme.menuHeight};
`
/*
border-radius: ${props => props.round?props.round:'0'}

    transition:visibility 0.3s linear,opacity 0.3s linear;
    transition: all 1s ease;
    @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
        visibility: visible;
        opacity:1;
    }
        &:hover{
        background-color: ${props => props.theme.neutralL};
    }
    background-color: ${props=>props.theme.neutral}
*/
const TextBtn = styled.button`
    height: 100%;
    width: ${props => props.width?props.width:'auto'};
    display:table-cell;
    position: relative;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    background-color: ${props=>props.bgColor? props.bgColor:props.theme.neutral}
    p{
        padding: 0px 10px;
        display: inline;
    }
`
   //${props => props.primary ? 'blue' : props.theme.main}
const Btn = styled.button`
    height: 100%;
    position: relative;
    display:table-cell;
    background-color: ${props=>props.bgColor? props.bgColor:props.theme.neutral}
    border: none;
    outline: 0;
    padding: 0 5px;
    margin: 0;
`
