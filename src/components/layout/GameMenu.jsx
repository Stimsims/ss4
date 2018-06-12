import React from 'react';
import { Link, withSiteData } from 'react-static'
import styled from 'styled-components';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav>
            Game Menu
            </nav>
        )
    }
}

export default withSiteData(Menu);

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
