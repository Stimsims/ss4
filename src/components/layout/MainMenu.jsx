import React from 'react';
import { Link, withSiteData, withRouteData, Switch, Route, withRouter } from 'react-static';
import './menu.css';
import styled from 'styled-components';
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
        console.log(`MainMenu componentDidUpdate prev ${prevProps
            .location.pathname} this ${this.props.location.pathname}`);
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
            return <div style={{position: 'absolute', zIndex: '10', padding: '10px', backgroundColor: 'white'}}>
                {this.state.categories.map(c => {
                    return (<Link style={{display: 'inline-block'}} to={`/${c}`}>
                    <h4>{c}</h4>
                    </Link>)
                })}
            </div>
        }
        return null;
    }
    renderTags(){
        if(this.props.tags){
            return (<div>{this.props.tags.map(t => {
                console.log(`tags rendering ${t} with target tag ${this.props.tag} does it match? ${t === this.props.tag}`);
                if(this.props.tag && t === this.props.tag){
                    return <Tag><Link to={`/${t}`} className={'active'}>{t}</Link></Tag>
                }else{
                    return <Tag><Link to={`/${t}`}>{t}</Link></Tag>
                }
            })
        }</div>)
        }
    }
    renderCat(){
        if(this.state.path[0]){
            return(
                <Outer>
                    <Container>
                        <FlexChild ><Link exact to="/" ><h1>Title</h1></Link></FlexChild>
                        <Mid key={"mid"} style={{flex: '0'}}/>
                        <FlexChild key={this.state.path[0]? this.state.path[0]: ''}>
                            <Selected style={{height: '50px', margin: 'auto'}}>
                                <Link to={`/${this.state.path[0]? this.state.path[0]: ''}`}>
                                <h4>{this.state.path[0]? this.state.path[0]: ''}</h4>
                                </Link>
                                {this.renderOpenButton()}
                            </Selected>
                            {this.renderDrop()}
                            
                        </FlexChild>
                        <FlexChild >
                            <h1 style={{fontSize: '1em'}}>{this.state.path[1]? this.state.path[1]: ''}</h1>
                            <p style={{fontSize: '1em'}}>{this.state.path[2]? ' ' + this.state.path[2]: ''}</p>
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
                        <FlexChild ><Link exact to="/" ><h1>Title</h1></Link></FlexChild>
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

const Tag = styled.h4`
    display: inline;
    padding: 0px 10px;
    a{
        color: grey;
    }
    a.active{
        color: red;
    }
`
const Mid = styled.span`
    display: inline-block;
    flex: 1;
    transition: all 1s ease;
`

const FlexChild = styled.span`
    position: relative;
    display: inline-block;
    align-self: center;
    height:100%;
    vertical-align: bottom;
    transition: all 1s ease;
    padding:0 10px;
    margin:0;
    h1, p{
        line-height:50px;
        margin:0;
        padding:0px;
        display: inline;
    }
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

const Container = styled.div`
    width:100%;
    height: 50px;
    display: flex;
    padding:0 10px;
    margin:0;
   
`
const Outer = styled.div`
    width:100%;
    height: auto;
    background: ${props=>props.theme[props.theme.theme].neutralL};
    padding:0px;
    margin:0;
`

const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    verticalAlign: middle; 
    transform-origin: 50%;
    transition: transform ${props => {
        return props.theme[props.theme.theme].animM
    }} ease;
    display: inline-block; 
`
const Selected = styled.div`
    background-color: ${props=>props.theme[props.theme.theme].accent};
`