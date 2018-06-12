
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Dynamic from './../components/DynamicComponent.jsx';

class Games extends React.Component{
    constructor(props){
        super(props);
        console.log("games");
        console.log(this.props);
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
    render(){
        return (
            <div>
              <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
              <h2>site 3</h2>
              {this.renderKatex()}
              All Posts:
              <ul>
                {this.props.posts.map(post => (
                  <li key={post.id}>
                    <Link key={post.id} to={`/post/${post.id}/`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )
    }
}

export default withRouteData(Games);
