import React from 'react';
import { Link, withSiteData, withRouteData, Switch, Route, withRouter } from 'react-static';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './../UI/elements/IconButton.jsx';
import Dropdown from './../UI/elements/Dropdown/index.jsx';



export class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            minimize: this.setMinimize(props.location.pathname)
        }
    }
    setMinimize(path){
        let min = path.includes('/games/');
        console.log(`Menu setMinimize path ${path} minimize? ${min}`)
        return path.includes('/games/');
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.location.pathname !== prevProps.location.pathname){
           // let path = this.setPath(this.props.location.pathname);
            this.setState({
                minimize: this.setMinimize(this.props.location.pathname)
            })
        }
    }

    renderMore(){
        let items = [{text: '', to: null}, {text: 'privacy', to: '/privacy'}, {text: 'about', to: '/about'},{text: 'settings', to: '/settings'}];
       return (
        <Dropdown alignRight icon={'more'} round={'50%'}>
            {items.map(e => {
                if(e.to){
                    return <Link to={e.to} style={{display: 'block'}}>{e.text}</Link>
                }else{
                    return <span />
                }
                
            })}
        </Dropdown>
       )
    }

    // getClassName(){
    //     if(this.state.minimize){
    //         return 'minimize'
    //     }
    //     return null;
    // }

    render(){
        return(
            <Wrapper>
                    <Outer className={this.state.minimize?'minimize':''}>
                        <Container>
                            <PostTitle><Link exact to="/" className={'title'}><h2>{this.props.siteTitle}</h2></Link></PostTitle>
                            <Mid key={"mid"} style={{flex: '1'}}/>
                            <MenuItem key={"games"}><Link to="/games"><h4>Games</h4></Link></MenuItem>
                            <MenuItem key={"posts"}><Link to="/posts"><h4>Posts</h4></Link></MenuItem>
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

Menu.displayName = 'Menu';
//const e = withRouter(Menu);
export default withSiteData(withRouteData(withRouter(Menu)));

Menu.PropTypes = {
    location: PropTypes.object
}

const Options=styled.span`
    position: absolute; 
    float:right; 
    right:0px; top:0px;
    borders: none;
    outline: 0;
    height: 100%;
    transition: all ${props=>props.theme.animS} ease;
`
const PostTitle = styled.h1`
    font-size: ${props=>props.theme.textSizeM};
    color: yellow;
    padding-left: ${props=>props.theme.spaceM}px;
    display: inline-block;
    align-self: center;
    height:100%;
    h1, h2, p, h4, a{
        line-height:50px;
        height: 100%;
        margin:0px auto;
        padding:0px;
        display: inline-block;
        vertical-align: middle;
        color: ${props=>props.theme.text};
    }
`

const Mid = styled.span`
    display: inline-block;
    flex: 1;
    transition: all ${props=>props.theme.animS} ease;
`

const MenuItem = styled.span`
    display: inline-block;
    align-self: center;
    height:100%;
    vertical-align: bottom;
    transition: all ${props=>props.theme.animS} ease;
    h1, h2, p, h4, a{
        line-height:50px;
        height: 100%;
        margin:0px auto;
        padding:0px;
        display: inline-block;
        vertical-align: middle;
        color: ${props=>props.theme.text};
    }
    a{
        padding:0px 10px;
        color: ${props=>props.theme.text};
        transition: all ${props=>props.theme.animS} ease;
        height: 100%;
        margin:0;
        &:hover{
            background-color: ${props=>props.theme.primaryL};
        }
    }
    a.active{
        background-color: ${props=>props.theme.primary};
    }  
`

const Container = styled.div`
    width:100%;
    height: ${props=>props.theme.menuHeight};
    display: flex;
    padding:0 0px;
    padding-right: 50px;
    margin:0;
    position: relative;

`

const Outer = styled.div`
    z-index: 1000;
    width:100%;
    background: ${props=>props.theme.neutral};
    padding:0px;
    margin:0;
    border-bottom: 2px solid ${props=>props.theme.neutralD};
    transition: transform 1s ease 0s, height 0.5s linear 2s;
`
Outer.displayName = 'Outer';
const Wrapper = styled.span`
    .minimize{
        transform: translateY(-${props=>props.theme.menuHeight});
        height: 0px;
        border-bottom: 0px:
    }
`






