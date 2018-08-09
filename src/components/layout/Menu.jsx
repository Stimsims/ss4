import React from 'react';
import { Link, withSiteData, withRouteData, Switch, Route, withRouter } from 'react-static';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './../UI/elements/IconButton.jsx';
import Dropdown from './../UI/elements/Dropdown/index.jsx';
import iArrow from './../../assets/baseline-keyboard_arrow_right-24px.svg';


export class Menu extends React.Component{
    constructor(props){
        super(props);
        let path = this.setPath(props.location.pathname);
        let categories = [{to: '/games', text:'games'}, {to: '/posts', text:'posts'}, 
        {to: '/t1', text:'t1'}];
        categories.sort((x, y) => {
            return x.text === path[0]?-1 : y.text===path[0]?1:0
        })
        this.state = {
            path,
            categories,
            minimize: this.setMinimize(path)
        }
    }
    setMinimize(path){
        if(path){
            return (path.length >= 2 && path[0] === 'games');
        }
        return true;
    }
    setPath(pathname){
        if(pathname){
            let path = pathname.split('/');
            path = path.filter(p => {
                return p !== '';
            })
            return path;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.location.pathname !== prevProps.location.pathname){
            let path = this.setPath(this.props.location.pathname);
            this.setState({
                path,
                minimize: this.setMinimize(path)
            })
        }
    }

    renderDrop(){
        //to={`/${this.state.path[0]? this.state.path[0]: ''}`} 
        return (<Dropdown links={this.state.categories}>
                        <Link className="dropbtn" tabIndex="1" style={{verticalAlign: 'middle', height: '50px'}}>
                            <h4 style={{verticalAlign: 'middle', lineHeight: '50px', display: 'inline-block'}}>{this.state.path[0]? this.state.path[0]: ''}</h4>
                            <DropArrow />
                        </Link>
            </Dropdown>)
    }
    renderMore(){
       return (
        <Dropdown links={[  {text: 'privacy', to: '/privacy'}, {text: 'about', to: '/about'},
        {text: 'settings', to: '/settings'}]}>
            <Icon classes="dropbtn" tabIndex="1" icon={"more"} hover={'grey'}/>
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
    getClassName(){
        if(this.state.minimize){
            return 'minimize'
        }
        return null;
    }
    renderCat(){
        //this.state.path[0]
        if(this.state.path[0]){
            return(
                <Wrapper>
                    <Outer className={this.getClassName()}>
                        <Container>
                            <FlexChild ><Link exact to="/" className={'title'}><h2>Title</h2></Link></FlexChild>
                            <Mid key={"mid"} style={{flex: '0'}}/>
                            <FlexChild key={this.state.path[0]? this.state.path[0]: ''}>
                                {this.renderDrop()}
                            </FlexChild>
                            <FlexChild >
                                {this.renderPostHeading()}
                            </FlexChild>
                            <Options key={"more"}>
                                {this.renderMore()}   
                            </Options>
                        </Container>
                    </Outer>
                </Wrapper>
            )
        }else{
            return(
                <Wrapper>
                    <Outer className={this.getClassName()}>
                        <Container>
                            <FlexChild ><Link exact to="/" className={'title'}><h2>Title</h2></Link></FlexChild>
                            <Mid key={"mid"} style={{flex: '1'}}/>
                            <FlexChild key={"games"}><Link to="/games"><h4>Games</h4></Link></FlexChild>
                            <FlexChild key={"posts"}><Link to="/posts"><h4>Posts</h4></Link></FlexChild>
                            {/* <FlexChild key={"about"}><Link to="/about"><h4>About</h4></Link></FlexChild> */}
                            <Options key={"more"} >
                                {this.renderMore()}   
                            </Options>
                        </Container>
                    </Outer>
                </Wrapper>
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
//const e = withRouter(Menu);
export default withRouteData(withRouter(Menu));

Menu.PropTypes = {
    location: PropTypes.object
}

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

const Container = styled.div`
    width:100%;
    height: ${props=>props.theme[props.theme.theme].menuHeight};
    display: flex;
    padding:0 0px;
    padding-right: 50px;
    margin:0;
    position: relative;

`

const Outer = styled.div`
    z-index: 1000;
    width:100%;
    background: ${props=>props.theme[props.theme.theme].neutral};
    padding:0px;
    margin:0;
    border-bottom: 2px solid ${props=>props.theme[props.theme.theme].neutralL};
    transition: transform 1s ease 0s, height 0.5s linear 2s;
`
Outer.displayName = 'Outer';
const Wrapper = styled.span`
    .minimize{
        transform: translateY(-${props=>props.theme[props.theme.theme].menuHeight});
        height: 0px;
        border-bottom: 0px:
    }
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