//import axios from 'axios'
import posts from './data/posts/index.js';
import games from './data/games/index.js';
import React from 'react';
import { makePageRoutes } from 'react-static/node'
/*
  siteRoot: 'https://illulli.github.io/',
  basePath:'staticSite1',
  siteRoot: 'https://illulli.github.io/',
  basePath:'ss4',
  siteRoot: 'https://illulli-1e5a.com/',

   siteRoot: 'http://localhost:3000',

     siteRoot: 'https://illulli.github.io/',
  basePath:'staticSite2',

  fix build problem by deleting node modules and package-lock
 siteRoot: 'https://illulli-1e5a.com/',
    bundleAnalyzer: true,
bundleAnalyzer: true,
      bundleAnalyzer: true,
*/


export default {
  siteRoot: 'https://illulli-1e5a.com/',
  bundleAnalyzer: true,
  getSiteData: () => ({
    siteTitle: 'Q Games',
    hello: 'world'
  }),
  getRoutes: async () => {
   // const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
   let featured = posts.filter(e => {
     return e.featured
   })
   let tags = extractUniqueValues(posts, 'tags');
   let pages = getTagPages(posts, 'tags', tags);
   return [
    ...posts.map(post => ({
      path: `/post/${post.id}`,
      component: 'src/containers/Post',
      getData: () => ({
        post
      }),
    })),
    ...pages,
    // ...makePages(t1, 2, 't1', 'src/containers/Posts.jsx', 
    //   (cid)=>{return `/post/${cid}`}, 'src/containers/Post', {title: "t1" ,tag: "t1", tags, base: "t1"}),
    ...makePages(posts, 100, 'posts', 'src/containers/Posts.jsx', 
      (cid)=>{return `/post/${cid}`}, 'src/containers/Post.jsx', {title: 'Posts', tag: null, tags, base: "posts"}),
    {
      path: '/',
      component: 'src/containers/Home.jsx',
      getData: () => ({
        posts: featured,
      }),
      children: featured.map(p => {
        return({
          path: `/post/${p.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post: p,
          }),
        })
      })
    },
      {
        path: '/games',
        component: 'src/containers/Games',
        getData: () => ({
          games,
        }),
        children: games.map(g => {
          return({
            path: `/${g.id}`,
            component: 'src/containers/Game',
            getData: () => ({
              game: g,
            }),
          })
        })
      },
      {
        path: '/about',
        component: 'src/containers/About.jsx',
        getData: () => ({
        }) //have to call get data to use is component
      },
      {
        is404: true,
        component: 'src/containers/404.jsx'
      },
    ]
  },
  Document: class CustomHtml extends React.Component {
    constructor(props){
      super(props);
      //console.log("document constructor")
    }
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props
      // console.log("document render, head:");
      // console.log(Head);
      const script1 = "document.createElement('picture')"
      const workboxScript = `// Check that service workers are registered
      if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js');
        });
      }`;
      return (
        <Html lang="de">
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>My Title</title>
            {renderMeta.styleTags}
            
          </Head>
          <Body>
         
          {children}
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: workboxScript }} />
          </Body>
        </Html>
      )
    }
  },
  // webpack:[
  //   (prev, 
  //     {
  //     stage, defaultLoaders
  //     }
  //   ) => {
  //       console.log("webpack mod called")
  //       console.log(prev);
  //       prev.plugins = [
  //         ...prev.plugins,
  //         new workbox.GenerateSW()
  //       ]
  //       return {
  //         ...prev
  //       };
  //   }
  // ]
}


const getTagPages = (items, key, tags) => {
  // let tags = extractTags(posts);
  // console.log("extracted tags", tags);
  // let pages = [];
  // tags.map(t => {
  //    let tagPosts = posts.filter(e => {
  //      return e.tags.indexOf(t) > -1
  //    })
  //    pages = [
  //      ...pages,
  //      ...makePages(tagPosts, 2, t, 'src/containers/Posts.jsx', 
  //      (cid)=>{return `/post/${cid}`}, 'src/containers/Post', {title: t ,tag: t, tags, base: t})
  //    ]
  // })
  
 // console.log("extracted tags", tags);
  let pages = [];
  tags.map(t => {
     let tagPosts = posts.filter(e => {
       return e[key].indexOf(t) > -1
     })
     pages = [
       ...pages,
       ...makePages(tagPosts, 2, t, 'src/containers/Posts.jsx', 
       (cid)=>{return `/post/${cid}`}, 'src/containers/Post.jsx', {title: t ,tag: t, tags, base: t})
     ]
  })
  return pages;
}

const extractUniqueValues = (p, key) => {
  let map = new Map();
  p.map(e => {
    e[key].map(t => {
      if(!map.has(t)){
        map.set(t, null);
      }
    })
  })
  return Array.from( map.keys() );
}


//let t1 = makePages(t1, 100, 't1', 'src/containers/Posts', (cid)=>{return `/post/${cid}`}, 'src/containers/Post', {tag: "t1", tags, base: "t1"})
const makePages = (items, pageSize, parentPath, parentComponent, childPath, childComponent, childProps) => {
  console.log("making " + items.length + " pages for route " + parentPath);
  console.log("make pages items: " + items.length + " page size " + pageSize);
  if(items.length > pageSize){
      //make paginated pages
      return makePageRoutes({
        items,
        pageSize,
        pageToken: "page", // use page for the prefix, eg. blog/page/3
        route: {
          // Use this route as the base route
          path: parentPath, //"t1",
          component: parentComponent //'src/containers/Posts',
        },
        decorate: (posts, i, totalPages) => ({
          // For each page, supply the posts, page and totalPages
          getData: () => ({
            posts,
            currentPage: i,
            totalPages,
            pageToken: 'page',
            ...childProps
          }),
        }),
      })
  }else{
    //make regular page
    return [{
      path: parentPath, //'/',
      component: parentComponent, //'src/containers/Home',
      getData: () => ({
        posts: items,
        ...childProps
      }),
      children: items.map(p => {
        return({
          path: childPath(p.id), //`/posts/${p.id}`,
          component: childComponent, //'src/containers/Post',
          getData: () => ({
            post: p,
          }),
        })
      })
    }]
  }
}















/*
      // Make an index route for every 5 blog posts
      ...makePageRoutes({
        items: posts,
        pageSize: 5,
        pageToken: 'page', // use page for the prefix, eg. blog/page/3
        route: {
          // Use this route as the base route
          path: 'blog',
          component: 'src/pages/blog',
        },
        decorate: (posts, i, totalPages) => ({
          // For each page, supply the posts, page and totalPages
          getData: () => ({
            posts,
            currentPage: i,
            totalPages,
          }),
        }),
      }),




          {
      path: '/',
      component: 'src/containers/Home',
      getData: () => ({
        posts,
      }),
      children: posts.map(p => {
        return({
          path: `/posts/${p.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            p,
          }),
        })
      })
    },





        // ...makePageRoutes({
    //   items: t1,
    //   pageSize: 100,
    //   pageToken: "page", // use page for the prefix, eg. blog/page/3
    //   route: {
    //     // Use this route as the base route
    //     path: "t1",
    //     component: 'src/containers/Posts',
    //   },
    //   decorate: (posts, i, totalPages) => ({
    //     // For each page, supply the posts, page and totalPages
    //     getData: () => ({
    //       posts,
    //       currentPage: i,
    //       totalPages,
    //       tag: "t1",
    //       tags,
    //       base: "t1",
    //       pageToken: 'page'
    //     }),
    //   }),
    // }),
*/