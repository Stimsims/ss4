import React from 'react';
import { Link, withSiteData, withRouteData, Switch, Route, withRouter } from 'react-static';
import './menu.css';
import styled, { StaticRouter } from 'styled-components';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { withContext, getContext } from 'recompose';
import Icon from './../UI/elements/IconButton.jsx';

class Menu extends React.Component{
    constructor(props){
        super(props);
        
        //display path in pieces descending in size
        // let path = props.location.pathname.split('/');
        // path = path.filter(p => {
        //     return !p || p === '';
        // })
         console.log("MainMenu constructor route data ", props);
        this.state = {
            path: this.setPath(props.location.pathname),
            categories: ['games', 'posts', 'about', 't1'],
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
        // console.log(`MainMenu componentDidUpdate prev ${prevProps
        //     .location.pathname} this ${this.props.location.pathname}`);
        if(this.props.location.pathname !== prevProps.location.pathname){
            this.setState({
                path: this.setPath(this.props.location.pathname),
                cat: false
            })
        }
    }

    handleClick(key, value){
        this.setState({
            [key]: value
        })
    }
    renderOpenButton(){
        if(this.state.cat){
            return (
                <Wrapper style={{transform: 'rotate(90deg)'}}>
                    <Icon icon={"arrow"} bg={'transparent'} hover={'transparent'} onInput={()=>{this.handleClick('cat', false)}}/>
                </Wrapper>
             )
        }else{
            return (
                <Wrapper style={{transform: 'rotate(0deg)'}}>
                    <Icon icon={"arrow"} bg={'transparent'} hover={'transparent'} onInput={()=>{this.handleClick('cat', true)}}/>
                </Wrapper>
             )
        }
    }
    renderDrop(){
        if(this.state.cat){
            return <Drop>
                {this.state.categories.map(c => {
                    return (<Link className={'drop-item'} to={`/${c}`}>
                    <h4>{c}</h4>
                    </Link>)
                })}
            </Drop>
        }
        return null;
    }
    renderTags(){
        if(this.props.tags){
            return (<div>{this.props.tags.map(t => {
              //  console.log(`tags rendering ${t} with target tag ${this.props.tag} does it match? ${t === this.props.tag}`);
                if(this.props.tag && t === this.props.tag){
                    return <Tag><Link to={`/${t}`} className={'active'}>{t}</Link></Tag>
                }else{
                    return <Tag><Link to={`/${t}`}>{t}</Link></Tag>
                }
            })
        }</div>)
        }
    }
    renderPostHeading(){
        if(this.state.path[1] && this.state.path[1] === 'page'){
            return (
                <p style={{fontSize: '1em'}}>{this.state.path[1]? this.state.path[1]: ''} {this.state.path[2]? ' ' + this.state.path[2]: ''}</p>
            )
        }else{
            return <PostTitle style={{fontSize: '1em'}}>{this.state.path[1]? this.state.path[1]: ''}</PostTitle>
        }
    }
    renderCat(){
        if(this.state.path[0]){
            return(
                <Outer>
                    <Container>
                        <FlexChild ><Link exact to="/" className={'title'}><h2>Title</h2></Link></FlexChild>
                        <Mid key={"mid"} style={{flex: '0'}}/>
                        <FlexChild key={this.state.path[0]? this.state.path[0]: ''}>
                            <Selected style={{height: '50px', margin: 'auto'}}>
                                <Link to={`/${this.state.path[0]? this.state.path[0]: ''}`}>
                                <h4>{this.state.path[0]? this.state.path[0]: ''}</h4>
                                </Link>
                                {this.renderOpenButton()}
                            </Selected>
                            {this.renderDrop()}
                            {this.renderPostHeading()}
                        </FlexChild>
                        <FlexChild >

                        </FlexChild>
                    </Container>
                    {this.renderTags()}
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
                    </Container>
                    {this.renderTags()}
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

/*
                <Switch>
                    <Route path="/games" exact component={() => {return <p>games route match</p>}} />
                    <Route path="/posts" exact component={() => {return <p>posts route match</p>}} />
                    <Route path="/" component={() => {return <p>no match</p>}} />
                </Switch>

                        return(
            <Container>
                <FlexChild><Link exact to="/" ><h1>Title</h1></Link></FlexChild>
                <Mid />
                <FlexChild><Link to="/games"><h4>Games</h4></Link></FlexChild>
                <FlexChild><Link to="/posts"><h4>Posts</h4></Link></FlexChild>
                <FlexChild><Link to="/about"><h4>About</h4></Link></FlexChild>
            </Container>
        )
*/

const e = withRouter(Menu);
export default withRouteData(e);
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
    padding-left: 10px;
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
const Selected = styled.div`
    background-color: ${props=>props.theme[props.theme.theme].accent};
`
const Container = styled.div`
    width:100%;
    height: 50px;
    display: flex;
    padding:0 10px;
    margin:0 0 10px 0;
   
`
const Outer = styled.div`
    width:100%;
    height: auto;
    background: ${props=>props.theme[props.theme.theme].neutral};
    padding:0px;
    margin:0;
`

const Wrapper = styled.div`
    verticalAlign: middle; 
    transform-origin: 50%;
    transition: transform ${props => {
        return props.theme[props.theme.theme].animM
    }} ease;
    display: inline-block; 
`
