import React from 'react';
import { Link, withSiteData } from 'react-static'
import './menu.css';
import styled from 'styled-components';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <Link exact to="/"><h1 style={Title} >{this.props.siteTitle}</h1></Link>
            <nav style={sMenu}>
                <Slinks><Link to="/games">Games</Link></Slinks>
                <Slinks><Link to="/about">About</Link></Slinks>
            </nav>
            </div>
        )
    }
}

export default withSiteData(Menu);

const Title = {
    textAlign: 'center',
    margin: '10px 0px 10px 0px'
}

const sMenu = {
    width: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
}

const Slinks = styled.span`
    display: inline;
    font-size: 1.5em;
    a{
        padding: 20px 10px 0px 10px;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease-in;
    }
    a.active{
        border-bottom: 2px solid black;
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