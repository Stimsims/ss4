import React from 'react';
import { Link, withSiteData } from 'react-static'
import './menu.css';
import styled from 'styled-components';
//import colors from './../UI/Colors.js';
// import FoldOut from './../UI/elements/FoldOut.jsx';
// import PostList from './PostList.jsx';
// import Tags from './Tags.jsx';
//import All from './../AllComponents.js';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container>
                <FlexChild><Link exact to="/" ><h1>{this.props.siteTitle}</h1></Link></FlexChild>
                <Mid />
                <FlexChild><Link to="/games"><h4>Games</h4></Link></FlexChild>
                <FlexChild><Link to="/posts"><h4>Posts</h4></Link></FlexChild>
                <FlexChild><Link to="/about"><h4>About</h4></Link></FlexChild>
            </Container>
            // <Bar>
            //     <Title><Link exact to="/" >{this.props.siteTitle}</Link></Title>
            //     <div style={sMenu}>
            //         <Slinks><Link to="/games"><Inner>Games</Inner></Link></Slinks>
            //         <Slinks><Link to="/posts">Posts</Link></Slinks>
            //         <Slinks><Link to="/about">About</Link></Slinks>
            //     </div>
            // </Bar>
        )
    }
}

export default withSiteData(Menu);
const Tag = styled.h4`
    
    color: grey;
    background: yellow;
    vertical-align: middle;
    a{
        display: inline-block
        vertical-align: middle;
    }
    a.active{
        display: inline-block
        background: red;
        vertical-align: middle;
    }
`
const Mid = styled.span`
    display: inline-block;
    flex: 1;
`

const FlexChild = styled.span`
    display: inline-block;
    align-self: center;
    height:100%;
    vertical-align: middle;
    padding:0;
    margin:0;
    a{
        display: inline-block;
        line-height:50px;
        padding:0 10px;
        color: ${props=>props.theme[props.theme.theme].text}
        transition: all ${props=>props.theme[props.theme.theme].animS} ease;
        h1, h4{
            margin:0;
            padding:0;
        }
        &:hover{
            background-color: white;
        }
    }
    a.active{
        background-color: ${props=>props.theme[props.theme.theme].accent};
        color: color: ${props=>props.theme[props.theme.theme].textInverted};
        &:hover{
            background-color: ${props=>props.theme[props.theme.theme].accentL};
        }
    }  
`
const Title = styled.h1`
    display: inline;
    color: grey;
    padding: 10px;
    background: yellow;
`
const Container = styled.div`
    width:100%;
    height: 50px;
    background: ${props=>props.theme[props.theme.theme].neutralL};
    display: flex;
    padding:0 10px;
    margin:0;
`

const Bar = styled.div`
    width: 100%;
    height: 50px;
    background: ${props => props.theme[props.theme.theme].neutralD};
`

const sMenu = {
    display: 'inline-block',
    float: 'right',
    height: '100%'
}
// const Title = styled.h1`
//     display: inline-block;
//     font-size: 1.8em;
//     margin: 0px;
//     a{
//         color: ${props=>props.theme.accent};
//     }
//     a.active{
//         background-color: ${props=>props.theme.accent};
//         color: ${props => props.theme.textInverted};
//     }
// `
const Inner = styled.div`
height: 100%;
width: 100%;
display: inline-block;
`
const Slinks = styled.h2`
    display: inline-block;
    font-size: 1.1em;
    transition: all 0.3s ease-in;
    height: 100%;
    margin: auto;
    vertical-align: middle;
    a {
        div{
            height: 100%;
            width: 100%;
        }
        height: 100%;
        width: 100%;
        display: inline-block;
        color: ${props => props.theme.text};
    };
    a.active{
        div{

            height: 100%;
            width: 100%;
            background-color: ${props=>props.theme.accent};
        }
        height: 100%;
        width: 100%;
        background-color: ${props=>props.theme.accent};
        display: inline-block;
        color: ${props => props.theme.textInverted}; 
    };
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