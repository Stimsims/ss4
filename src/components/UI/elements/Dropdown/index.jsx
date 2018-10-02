import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';
import iArrow from './../../../../assets/baseline-keyboard_arrow_right-24px.svg';
import iMore from './../../../../assets/baseline-more_vert-24px.svg';
import Icon from './../Icon.jsx';

export default class Drop extends React.PureComponent{
    constructor(props) {
        super(props);
    }
    renderLinks(){
        if(this.props.links){
            return this.props.links.map(link => {
                //return <Link to={link.to} style={{display: 'block'}}>{link.text}</Link>
               if(this.props.wrapItem){
                    return this.props.wrapItem(link);
               }else{
                    return link;
               }
               
            })
        }
        return null;
    }
    renderButton(){
        
    }
    render(){
        return(
            <Dropdown alignLeft={this.props.alignLeft} alignRight={this.props.alignRight} class="dropdown" >
                        <Link className="dropbtn" tabIndex="1">
                            {this.props.text? <h4 style={{verticalAlign: 'middle', lineHeight: '50px', display: 'inline-block', 
                            paddingLeft: '15px'}}>{this.props.text}</h4>:null}
                            <DropArrow icon={this.props.icon} rotate={this.props.rotate} round={this.props.round}/>
                            {/* <Icon icon={this.props.icon} rotate={this.props.rotate} round={this.props.round} colorKey={'neutral'} hoverKey={'primary'}/> */}
                        </Link>
                {/* <a className="dropbtn" tabIndex="1" href="#" style={{width: '50px', height: '50px', backgroundColor: 'yellow'}}>A</a> */}
                <div class="dropdown-content" >
                    {this.props.children}
                    {/* {this.renderLinks()} */}
                </div>
            </Dropdown>
        )
    }
}

const Dropdown = styled.div`
    position: relative;
    display: block;
    z-index: 999;
    height: 100%;
    transition: all 1s ease;
    background-color: ${props=>props.theme[props.theme.theme].neutral};
    /* The container <div> - needed to position the dropdown content */

    .dropBtn{
        height: 100%;
        display: table-cell;
        outline: 0;
        border: none;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: block;
        margin: 0; padding: 0;
        position: absolute;
        ${props => {
            if(props.alignLeft){
                return 'left: 0;';
            }
        }}
        ${props => {
            if(props.alignRight){
                return 'right: 0;';
            }
        }}
        bottom:0;
        min-width: 100px;
        background-color: white;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        transition: all 1s ease;
        transition-delay: 0.2s;
        transform: translateY(50%) scaleY(0);
        background-color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].neutral};
        a{
            color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].textInverted} !important;
        }
    }


    /* Links inside the dropdown */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: inline-block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:selected, .dropdown-content a:focus {background-color: #ddd;}
    .dropdown-content a:hover {background-color: #ddd;}
    .dropdown-content a:active {background-color: #ddd;}

    &:focus, &:hover, .dropdown:focus, .dropdown:hover{
        background-color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].primary};
        color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].primary};
    }

    /* Show the dropdown menu on hover */
    .dropbtn:focus + .dropdown-content{
        transform: translateY(100%) scaleY(1);
    }

`
const DropArrow = styled.div`
    height: ${props=>props.theme[props.theme.theme].menuHeight};
    width: ${props=>props.theme[props.theme.theme].menuHeight};
    padding: 0; margin: 0;
    display: inline-block;
    float: right;
    outline: 0;
    border: none;
    background-image: url(${props=>{
        if(props.icon === 'arrow'){
            return iArrow;
        }else{
            return iMore;
        }
    }});
    background-repeat: no-repeat;
    background-position: center; 
    transform: rotate(${props=>props.rotate?props.rotate:'0'}deg);
`
/*

        background-color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].primary};
        color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].primary};
        
    &:hover .dropdown-content{
        transform: translateY(0%) scaleY(1);
    }
    
, &:hover .dropdown-content
    &:first-child:focus, &:hover  &:first-child {background-color: #3e8e41;}

                        <div class="dropdown"
                            
                            >
                            <button class="dropbtn" ref={(input)=>this.menu = input} onClick={(e)=>{console.log('parent handler')}}>Dropdown

                            </button>
                            <div class="dropdown-content" style={{width: '100%'}}>
                                <button href="#" onMouseDown={(e)=>{console.log('child handler')}}>Link 1</button>
                            </div>
                        </div>
*/