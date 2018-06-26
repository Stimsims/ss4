import React from 'react';
import { Link, withSiteData } from 'react-static'
import './menu.css';
import styled from 'styled-components';
import colors from './../UI/Colors.js';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav style={Bar}>
                <Title><Link exact to="/" >{this.props.siteTitle}</Link></Title>
                <div style={sMenu}>
                    <Slinks><Link to="/games">Games</Link></Slinks>
                    <Slinks><Link to="/about">About</Link></Slinks>
                </div>
            </nav>
        )
    }
}

export default withSiteData(Menu);


const Bar = {
    width: '100%',
    padding: '10px'
}

// const sMenu = {
//     width: '100%',
//     display: 'flex',
//     justifyContent:'center',
//     alignItems: 'center',
// }
const sMenu = {
    display: 'inline',
    float: 'right',
    height: '80px',
    marginRight: '10px'
}
const Title = styled.h1`
    display: inline-block;
    font-size: 1.8em;
    margin: 0px;
    a{
        color: ${colors.s};
    }
`
const Slinks = styled.h2`
    display: inline-block;
    font-size: 1.1em;
    margin-top: 11px;
    transition: all 0.3s ease-in;
    a{
        padding: 20px 10px 0px 10px;
        border-bottom: 2px solid ${colors.transparent};
        color: ${colors.s};
    }
    a.active{
        border-bottom: 2px solid ${colors.sLight};
        color: ${colors.sLight}; 
    }
`

/*
export interface NavLinkProps extends LinkProps {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?<P>(match: match<P>, location: H.Location): boolean;
    location?: H.Location;
}
*/