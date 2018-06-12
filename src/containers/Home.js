
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Menu from './../components/layout/MainMenu.jsx';

class Games extends React.Component{
    constructor(props){
        super(props);
        // console.log("home");
        // console.log(this.props);
    }
    render(){
        return (
          <div>
            <Menu />
          <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
          <h2>site 3</h2>
          All Posts:
          <ul>
            {this.props.posts.map(post => (
              <li key={post.id}>
                <Link key={post.id} to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
          )
    }
}

export default withRouteData(Games);
