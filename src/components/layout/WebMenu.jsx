import React from 'react';
import PropTypes from 'prop-types';
import { Link, withSiteData, withRouteData, Switch, Route, withRouter } from 'react-static';
import styled from 'styled-components';
import Text from './../UI/elements/Text.jsx';
/*
                                <Link to={`/${this.state.path[0]? this.state.path[0]: ''}`}>
                                <h4>{this.state.path[0]? this.state.path[0]: ''}</h4>
                                </Link>
*/
function WebMenu() {
  return (
    <Outer>
        <Container>
            <Text align={'left'} tag={'h1'} text={'title'} display={'inline'} colorKey={'textInverted'}/>
            <div style={{float: 'right'}}>
                <Item><Link to={`/games`}>Games</Link></Item>
                <Item><Link to={`/posts`}>Posts</Link></Item>
                <Item><Link to={`/about`}>About</Link></Item>
                <Item><Link to={`/settings`}>Settings</Link></Item>
            </div>
        </Container>
    </Outer>
  );
}



WebMenu.displayName = 'WebMenu';
export default withRouteData(WebMenu);

const Container = styled.div`
    width:100%;
    height: ${props=>props.theme[props.theme.theme].menuHeight};
    display: flex;
    padding:0 0px;
    margin:0;
    position: relative;
`

// position: fixed;
// height: ${props=>props.theme[props.theme.theme].menuHeight};
// left: 0; top:0; right:0;
const Outer = styled.div`

    z-index: 1000;
    width:100%;
   
    background: ${props=>props.theme[props.theme.theme].neutral};
    padding:0px;
    margin:0;
    border-bottom: 2px solid ${props=>props.theme[props.theme.theme].neutralL};
`
const Item = styled.span`
    height: ${props=>props.theme[props.theme.theme].menuHeight};
    a{
        line-height: ${props=>props.theme[props.theme.theme].menuHeight};
        text-decoration: none;
        color: ${props=>props.theme[props.theme.theme].textInverted};
        padding: 5px;
    }
    a.active{
        color: ${props=>props.theme[props.theme.theme].textInverted};
        background-color: ${props=>props.theme[props.theme.theme].primary};
    }
`