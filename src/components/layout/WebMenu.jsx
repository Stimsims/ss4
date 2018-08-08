import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link, withSiteData, withRouteData, Switch, Route, withRouter } from 'react-static';
import styled from 'styled-components';
import Text from './../UI/elements/Text.jsx';
//import './menu.css';
import Drop from './../UI/elements/Dropdown/index.jsx';
/*
                                <Link to={`/${this.state.path[0]? this.state.path[0]: ''}`}>
                                <h4>{this.state.path[0]? this.state.path[0]: ''}</h4>
                                </Link>
*/
class WebMenu extends React.PureComponent {
    render(){
        return (
            <Outer>
                <Container>
                    <Text align={'left'} tag={'h1'} text={'title'} colorKey={'textInverted'}/>
                    <div style={{display: 'inline-block', float: 'right'}}>
                    <button onClick={()=>{ReactDOM.findDOMNode(this.menu).focus()}}>focus</button>
                        {/* <div class="dropdown"
                            
                            >
                            <button class="dropbtn" ref={(input)=>this.menu = input} onClick={(e)=>{console.log('parent handler')}}>Dropdown

                            </button>
                            <div class="dropdown-content" style={{width: '100%'}}>
                                <button href="#" onMouseDown={(e)=>{console.log('child handler')}}>Link 1</button>
                            </div>
                        </div> */}
                        <Drop />
                        <Item><Link to={`/games`}>Games</Link></Item>
                        <Item><Link to={`/posts`}>Posts</Link></Item>
                        <Item><Link to={`/about`}>About</Link></Item>
                        <Item><Link to={`/settings`}>Settings</Link></Item>
                    </div>
                </Container>
            </Outer>
          );
    }
  
}



WebMenu.displayName = 'WebMenu';
export default withRouteData(WebMenu);

const Container = styled.ul`
    width:100%;
    height: ${props=>props.theme[props.theme.theme].menuHeight};
    padding:0 0px;
    margin:0;
    position: relative;
    display: block;
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: pink;
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
const Item = styled.li`
    height: ${props=>props.theme[props.theme.theme].menuHeight};
    margin:0;
    display: inline-block;
    a{
        line-height: ${props=>props.theme[props.theme.theme].menuHeight};
        text-decoration: none;
        display: block;
        color: ${props=>props.theme[props.theme.theme].textInverted};
        padding: 5px;
    }
    a.active{
        color: ${props=>props.theme[props.theme.theme].textInverted};
        background-color: ${props=>props.theme[props.theme.theme].primary};
    }
`