
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import Dynamic from './../components/DynamicComponent.jsx';
import ReactGA from 'react-ga';
import FadeIn from './../components/UI/animations/FadeIn.jsx';
import Menu from './../components/layout/MainMenu.jsx';
import Icon from './../components/UI/elements/IconButton.jsx';
import Wrapper from './../components/game/Wrapper.jsx';
import IFrame from './../components/UI/IFrame.jsx';
import SampleGame from './../components/game/SampleGame.jsx';

const fnc = () => {
    return <p>hello</p>
}

class Games extends React.Component{
    constructor(props){
        super(props);
        this.addKatex = this.addKatex.bind(this);
        this.getKatex = this.getKatex.bind(this);
        this.getExpression = this.getExpression.bind(this);
      //  let text = `this.getKatex("c = \\pm\\sqrt{a^2 + b^2}")`;
        //let text = `${fnc()}`;
        this.state = {
            katex: []
        }
    }
    getKatex(equation){
        return <Dynamic payload="./UI/math/Katex.jsx" />
    }
    getExpression(){
        return this.getKatex("c = \\pm\\sqrt{a^2 + b^2}");
    }
    getText(text){
        return <p style={{color:'red', backgroundColor: 'blue', display:'inline'}}>{text}</p>
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
                <SampleGame />
              <p>set variable</p>
              <p>{this.getExpression()}{this.getText("hello")}{this.getExpression()}</p>
              <div>
              <Icon icon={"google"} />
              <Icon icon={"facebook"} />
              <Icon icon={"twitter"} />
              <Icon icon={"paragraph-left"} />
              </div>
              <button onClick={()=>{this.sendEvent()}}>event</button>
              <button onClick={this.addKatex}>Katex</button>
              {this.renderKatex()}
              <Wrapper index={0} input={{index:0}} />
              <IFrame src={"https://datastudio.google.com/embed/reporting/1AD-Xywiz627t-znwAMj1oe_7WL8fv-XM/page/MCWT"} />
              All Posts:
              <FadeIn>
              {/* <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/1AD-Xywiz627t-znwAMj1oe_7WL8fv-XM/page/MCWT" frameborder="0" allowfullscreen></iframe> */}
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
