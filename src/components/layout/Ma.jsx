import React from 'react';
import { Link, withSiteData, withRouteData, Switch, Route, withRouter } from 'react-static';
//import './menu.css';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { withContext, getContext } from 'recompose';
import Icon from './../UI/elements/IconButton.jsx';
import iMore from './../../assets/baseline-more_vert-24px.svg';
import Dropdown from './../UI/elements/Dropdown/index.jsx';
import iArrow from './../../assets/baseline-keyboard_arrow_right-24px.svg';


class Menu extends React.Component{
    constructor(props){
        super(props);
        let path = this.setPath(props.location.pathname);
        let categories = [{to: '/games', text:'games'}, {to: '/posts', text:'posts'}, {to: '/t1', text:'t1'}];
        categories.sort((x, y) => {
            return x.text === path[0]?-1 : y.text===path[0]?1:0
        })
        console.log(`current pant ${path[0]} categories sorted: `, categories);
        this.state = {
            path,
            categories,
            options: ['settings', 'privacy', 'about'],
            more: false,
            cat: false
        }
    }
    setPath(pathname){
        let path = pathname.split('/');
        path = path.filter(p => {
            return p !== '';
        })
        return path;
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.location.pathname !== prevProps.location.pathname){
            this.setState({
                path: this.setPath(this.props.location.pathname),
                cat: false
            })
        }
    }

    handleClick(key, value){
        console.log('handle click key = ' + key + " value " + value, this.state);
        // [key]: value
        this.setState({
            more: key==='more'?value:false,
            cat: key==='cat'?value:false
        })
    }
    renderOpenButton(){
        return (
            <Wrapper style={{transform: `${this.state.cat?'rotate(90deg)':'rotate(0deg)'}`}}>
                <Icon icon={"arrow"} bg={'transparent'} hover={'transparent'} onInput={()=>{this.handleClick('cat', !this.state.cat)}}/>
            </Wrapper>
         )
    }
    renderDrop(){
        return (<Dropdown links={this.state.categories}>
                        <Link className="dropbtn" tabIndex="1" to={`/${this.state.path[0]? this.state.path[0]: ''}`} 
                            style={{verticalAlign: 'middle', height: '50px'}}>
                            <h4 style={{verticalAlign: 'middle', lineHeight: '50px', display: 'inline-block'}}>{this.state.path[0]? this.state.path[0]: ''}</h4>
                            <DropArrow />
                        </Link>
            </Dropdown>)
    }
    renderMore(){
       return (
        <Dropdown links={[ {text: 'about', to: '/about'}, {text: 'privacy', to: '/privacy'}, 
        {text: 'settings', to: '/settings'}]}>
            <Icon classes="dropbtn" tabIndex="1" icon={"more"} hover={'grey'}
                            onInput={()=>{this.handleClick('more', !this.state.more)}}/>
        </Dropdown>
       )
    }

    renderPostHeading(){
        if(this.state.path[1] && this.state.path[1] === 'page'){
            return (
                <p style={{fontSize: '1em', paddingLeft: '10px'}}>{this.state.path[1]? this.state.path[1]: ''} {this.state.path[2]? ' ' + this.state.path[2]: ''}</p>
            )
        }else{
            return <PostTitle style={{fontSize: '1em', paddingLeft: '10px'}}>{this.state.path[1]? this.state.path[1]: ''}</PostTitle>
        }
    }

    renderCat(){
        //this.state.path[0]
        if(this.state.path[0]){
            return(
                <Outer>
                    <Container>
                        <FlexChild ><Link exact to="/" className={'title'}><h2>Title</h2></Link></FlexChild>
                        <Mid key={"mid"} style={{flex: '0'}}/>
                        <FlexChild key={this.state.path[0]? this.state.path[0]: ''}>
                            {/* <Selected style={{height: '50px', margin: 'auto'}}>
                                <Link to={`/${this.state.path[0]? this.state.path[0]: ''}`}>
                                <h4>{this.state.path[0]? this.state.path[0]: ''}</h4>
                                </Link>
                                {this.renderOpenButton()}
                            </Selected> */}
                            {this.renderDrop()}
                        </FlexChild>
                        <FlexChild >
                            {this.renderPostHeading()}
                        </FlexChild>
                        <Options key={"more"}>
                            {/* <Icon icon={"more"} bg={'transparent'} hover={'grey'} 
                            onInput={()=>{this.handleClick('more', !this.state.more)}}/> */}
                            {this.renderMore()}   
                        </Options>
                    </Container>
                    <p style={{textAlign: 'center', margin: '0px', color: 'grey'}}>double tap screen to change theme colors</p>
                </Outer>
            )
        }else{
            return(
                <Outer>
                    <Container>
                        <FlexChild ><Link exact to="/" className={'title'}><h2>Title</h2></Link></FlexChild>
                        <Mid key={"mid"} style={{flex: '1'}}/>
                        <FlexChild key={"games"}><Link to="/games"><h4>Games</h4></Link></FlexChild>
                        <FlexChild key={"posts"}><Link to="/posts"><h4>Posts</h4></Link></FlexChild>
                        <FlexChild key={"about"}><Link to="/about"><h4>About</h4></Link></FlexChild>
                        <Options key={"more"} >
                            {/* <Icon icon={"more"} bg={'transparent'} hover={'grey'}
                            onInput={()=>{this.handleClick('more', !this.state.more)}}/> */}
                            {this.renderMore()}   
                        </Options>
                    </Container>
                  
                    <p style={{textAlign: 'center', margin: '0px', color: 'grey'}}>double tap screen to change theme colors</p>
                </Outer>
            )
        }
    }
    render(){
        return(
            this.renderCat()
        )
    }
}

Menu.displayName = 'Menu';
const e = withRouter(Menu);
export default withRouteData(e);

const Options=styled.span`
    position: absolute; 
    float:right; right:7px; top:7px; height: 50px;
    borders: none;
`
const Drop = styled.div`
    position: absolute;
    z-index: 100; 
    padding: 10px; 
    background-color: white;
    .active {
        h4 {
            color: ${props=>props.theme[props.theme.theme].textInverted} !important;
        }
    }
    .drop-item{
        display:block;
        h4 {
            color: ${props=>props.theme[props.theme.theme].text};
        }
        &:hover{
            background-color: grey;
        }
    }

`
const PostTitle = styled.h1`
    font-size: ${props=>props.theme[props.theme.theme].textSizeM};
    color: ${props=>props.theme[props.theme.theme].primaryL};
    padding-left: ${props=>props.theme[props.theme.theme].spaceM}px;
    display: inline-block;
`
const Tag = styled.h4`
    display: inline;
    padding: 0px 10px;
    a{
        color: ${props=>props.theme[props.theme.theme].neutralL};
    }
    a.active{
        color: ${props=>props.theme[props.theme.theme].accent};
    }
`
const Mid = styled.span`
    display: inline-block;
    flex: 1;
    transition: all ${props=>props.theme[props.theme.theme].animS} ease;
`

const FlexChild = styled.span`
    display: inline-block;
    align-self: center;
    height:100%;
    vertical-align: bottom;
    transition: all ${props=>props.theme[props.theme.theme].animS} ease;
    h1, h2, p, h4, a{
        line-height:50px;
        height: 100%;
        margin:0px auto;
        padding:0px;
        display: inline-block;
        vertical-align: middle;
        color: ${props=>props.theme[props.theme.theme].textInverted};
    }
    .title{
        h2:{
            color: ${props=>props.theme[props.theme.theme].primaryL}
        }
        &:hover{
            background-color: white;
        }
    }
    a{
        padding:0 10px;
        color: ${props=>props.theme[props.theme.theme].text};
        transition: all ${props=>props.theme[props.theme.theme].animS} ease;
        &:hover{
            background-color: ${props=>props.theme[props.theme.theme].neutral};
        }
    }
    a.active{
        background-color: ${props=>props.theme[props.theme.theme].accent};
        color: ${props=>props.theme[props.theme.theme].textInverted}
        &:hover{
            background-color: ${props=>props.theme[props.theme.theme].accentL};
        }
    }  
`
const Selected = styled.a`
    background-color: ${props=>props.theme[props.theme.theme].accent};
`
const Container = styled.div`
    width:100%;
    height: 50px;
    display: flex;
    padding:0 0px;
    padding-right: 50px;
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

const Wrapper = styled.div`
    verticalAlign: middle; 
    transform-origin: 50%;
    transition: transform ${props => {
        return props.theme[props.theme.theme].animM
    }} ease;
    display: inline-block; 
`

const DropArrow = styled.div`
    height: ${props=>props.theme[props.theme.theme].menuHeight};
    width: 36px;
    float: right;
    display: inline-block;
    background-image: url(${iArrow});
    background-repeat: no-repeat;
    background-position: center; 
    transform: rotate(90deg);
`