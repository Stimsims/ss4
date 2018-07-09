
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import Dynamic from './../components/DynamicComponent.jsx';
import ReactGA from 'react-ga';
import FadeIn from './../components/UI/animations/FadeIn.jsx';
import Menu from './../components/layout/MainMenu.jsx';
import GameItem from './../components/layout/GameListItem.jsx';
import Container from './../components/UI/elements/Container';
import Icon from './../components/UI/elements/IconButton.jsx';

const fnc = () => {
    return <p>hello</p>
}

class Games extends React.Component{
    constructor(props){
        super(props);
        this.addKatex = this.addKatex.bind(this);
        this.getKatex = this.getKatex.bind(this);
        this.state = {
            katex: []
        }
    }
    getKatex(equation){
        return <Dynamic payload="./UI/math/Katex.jsx" />
    }
    addKatex(){
        this.setState({
            katex: [
                ...this.state.katex,
                <Dynamic payload="./UI/math/Katex.jsx" />
            ]
        })
    }
    renderKatex(){
        return this.state.katex.map(e => {
            return e;
        })
    }
    render(){
        return (
            <Container color={'blue'}>
                <Menu />
              <button onClick={this.addKatex}>Katex</button>
              {this.renderKatex()}
              All Posts:
                <div>
                    {this.props.games.map(post => {
                        return(
                            <GameItem game={post} />
                        )
                    })}
                </div>
            </Container>
          )
    }
}

export default withSiteData(withRouteData(Games));
