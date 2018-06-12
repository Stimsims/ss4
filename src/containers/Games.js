
import React from 'react'
import { withRouteData, Link, withSiteData } from 'react-static'
import Dynamic from './../components/DynamicComponent.jsx';
import ReactGA from 'react-ga';
import FadeIn from './../components/UI/animations/FadeIn.jsx';

class Games extends React.Component{
    constructor(props){
        super(props);
        // console.log("games");
        // console.log(this.props);
        this.state = {
            showKatex: false
        }
    }
    renderKatex(){
        if(this.state.showKatex){
            return <Dynamic payload="./FatComponent.jsx" />
        }else{
            return <button onClick={()=>{this.setState({showKatex:true})}}>Katex</button>
        }
    }
    sendEvent(){
   //     console.log("send event");
        ReactGA.event({
            category: 'Editing',
            action: 'Deleted Component',
            label: 'Game Widget'
        });
    }
    render(){
        return (
            <div>
              <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
              <h2>site 3</h2>
              <button onClick={()=>{this.sendEvent()}}>event</button>
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
