import React from 'react';
import { withSiteData } from 'react-static'
import styled from 'styled-components';
import SignInUi from './../apis/SignInUi.jsx';
import ClassShare from './../apis/ClassShare.jsx';
import IconButton from './../UI/elements/IconButton.jsx';
import Dropdown from './../UI/elements/Dropdown/index.jsx';

class Menu extends React.Component{
    constructor(props){
        super(props);
        console.log('GameMenu constructor props',props);
        this.state = {
            open: false
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.renderId !== this.props.renderId){
            this.forceUpdate();
        }
    }
    renderAdditionalMenuItems(position, wrapper){
        console.log(`rendering ${this.props.menuItems.length} menu items`, this.props.menuItems);
        return this.props.menuItems
        .filter(f => {
            return position === f.position;
        })
        .map(m => {
            console.log("rendering menu item", m);
            return wrapper(m);
        })
    }
    render(){
        console.log(`gamemenu render `, this.props);
        //TODO game menu: make right div flexible width
        if(this.props.width < 500){
            return (
                <Bar>
                    <Left>
                        {this.renderAdditionalMenuItems('left', (item) => {return <span>{item.component}</span>})} 
                    </Left>
                    <Options>
                        <Dropdown alignRight icon="more">
                            {this.renderAdditionalMenuItems('right', (item) => {
                                console.log(`rendering item in wrapper `, item)
                                return (
                                <div style={{textAlign: 'center'}}>
                                        {item.component}
                                        <p style={{display: 'inline'}}>{item.text}</p>
                                </div>
                            )})} 
                            <div style={{textAlign: 'center'}}>
                                <ClassShare />
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <SignInUi />
                            </div>
                        </Dropdown>
                    </Options>
                </Bar>
            )
        }else{
            return(
                <Bar>
                    <Left>
                        {this.renderAdditionalMenuItems('left', (item) => {return <span>{item}</span>})} 
                    </Left>
                        <span style={{display: 'block', position: 'relative', height:'100%', float: 'right', right: '168px'}}>
                            {this.renderAdditionalMenuItems('right', (item) => {return <span>{item}</span>})} 
                        </span>
                        {/* {this.renderAdditionalMenuItems('right')}  */}
                        <span style={{display: 'block', width: '48px', height:'100%', height: '48px', position: 'absolute', right: '120px'}}>
                            <ClassShare />
                        </span>
                        <span style={{display: 'block', width: '120px', height:'100%', position: 'absolute', right: '0'}}>
                            <SignInUi />
                        </span>
                </Bar>
            )
        }

    }
}
Menu.displayName = 'GameMenu';
export default withSiteData(Menu);
const Pop = styled.div`
    position: fixed;
    right:0;
    top:${props => props.theme[props.theme.theme].gameMenuHeight};
    background-color: white;
    text-align: center;
`
const Options=styled.span`
    position: absolute; 
    float:right; 
    right:0px; top:0px;
    borders: none;
    height: 100%;
    transition: all ${props=>props.theme[props.theme.theme].animS} ease;
`
/*
    visibility: ${props=> {
        console.log(`styled Pop propns`, props);
        return props.open?'visible':'gone'
    }};
*/
const Bar = styled.div`
    height: ${props => props.theme[props.theme.theme].gameMenuHeight};
    position: relative;
    border-bottom: 2px solid grey;
    background-color: ${props=>props.theme[props.theme.theme].neutral};
`
const Left = styled.div`
    float:left;
    align-self: flex-start;
    display: inline-block;
    height: 100%;
    z-index=2;
`
const Right = styled.div`
    display: flex;
    float:right;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-end;
    display: block;
    position: relative;
    height: 100%;
    z-index=2;
`
const Mid = styled.div`
    align-self: center:
    flex:1;
    span h1{
        font-size: 1em
    }
    @media only screen and (min-width: ${props=>props.theme[props.theme.theme].mediaMinWidth}) {
        span h1{
            font-size: 1.5em
        }
    }
`