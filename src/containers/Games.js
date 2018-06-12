
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import Dynamic from './../components/DynamicComponent.jsx';
import ReactGA from 'react-ga';
import FadeIn from './../components/UI/animations/FadeIn.jsx';
import Menu from './../components/layout/MainMenu.jsx';
import Icon from './../components/UI/elements/IconButton.jsx';

class Games extends React.Component{
    constructor(props){
        super(props);
        this.addKatex = this.addKatex.bind(this);
        this.state = {
            katex: []
        }
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
    sendEvent(){
        ReactGA.event({
            category: 'Editing',
            action: 'Deleted Component',
            label: 'Game Widget'
        });
    }
    render(){
        return (
            <div>
                <Menu />
              <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
              <h2>site 3</h2>
              <Icon icon={"google"} />
              <Icon icon={"facebook"} />
              <Icon icon={"twitter"} />
              <Icon icon={"paragraph-left"} />
              <button onClick={()=>{this.sendEvent()}}>event</button>
              <button onClick={this.addKatex}>Katex</button>
              {this.renderKatex()}
              All Posts:
              <FadeIn>
             
              <ul>
                {this.props.games.map(post => (
                  <li key={post.id}>
                    <Link key={post.id} to={`/games/${post.id}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
              </FadeIn>
            </div>
          )
    }
}

export default withSiteData(withRouteData(Games));
