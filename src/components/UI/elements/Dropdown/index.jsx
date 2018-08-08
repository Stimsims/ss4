import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';
//import './styles.css';

export default class Drop extends React.PureComponent{
    constructor(props) {
        super(props);
    }
    renderLinks(){
        return this.props.links.map(link => {
            return <Link to={link.to} style={{display: 'block'}}>{link.text}</Link>
        })
    }
    render(){
        return(
            <Dropdown class="dropdown" >
                {this.props.children}
                {/* <a className="dropbtn" tabIndex="1" href="#" style={{width: '50px', height: '50px', backgroundColor: 'yellow'}}>A</a> */}
                <div class="dropdown-content" >
                    {this.renderLinks()}
                </div>
            </Dropdown>
        )
    }
}

const Dropdown = styled.div`
    position: relative;
    display: block;
    z-index: 999;

    /* The container <div> - needed to position the dropdown content */

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: block;
        
        position: absolute;
        right: 0;
        min-width: 100px;
        background-color: white;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        transition: all 1s ease;
        transition-delay: 0.2s;
        transform: translateY(-50%) scaleY(0);
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
        transform: translateY(0%) scaleY(1);
    }

`

/*
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