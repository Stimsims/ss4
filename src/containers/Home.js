
import React from 'react'
import { withRouteData, Link } from 'react-static'
import logoImg from '../logo.png'

export default withRouteData(({ posts }) => {
  console.log("home posts");
  console.log(posts);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
      <img src={logoImg} alt="" />
      <h2>site 2</h2>
      All Posts:
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link key={post.id} to={`/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
})