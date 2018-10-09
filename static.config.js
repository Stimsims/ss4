//import axios from 'axios'
import posts from './data/posts/index.js';
import games from './data/games/index.js';
import React from 'react';
import { makePageRoutes } from 'react-static/node'
import { ServerStyleSheet } from 'styled-components'
import ReactStaticFavicons from 'react-static-favicons';
const WorkboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const path = require('path');
const siteRoot = 'https://illulli-1e5a.com';
const siteTitle = 'IoH'
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
  siteRoot,
  //bundleAnalyzer: true,
  getSiteData: () => ({
    siteTitle,
    siteRoot
  }),
  getRoutes: async () => {
   // const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
   let featured = posts.filter(e => {
     return e.featured
   })
   let tags = extractUniqueValues(posts, 'tags');
   let pages = getTagPages(posts, 'tags', tags);
   return [
    ...pages,
    {
      path: '/',
      component: 'src/containers/Home.jsx',
      getData: () => ({
        items: featured,
      }),
      children: featured.map(p => {
        return({
          path: `/posts/${p.id}`,
          component: 'src/containers/Post.jsx',
          getData: () => ({
            item: p,
          }),
        })
      })
    },
    ...makePages(posts, 100, 'posts','src/containers/Posts.jsx', 
    (cid)=>{return `/posts/${cid}`},'src/containers/Post.jsx', 
    {title: 'Posts', tag: null, tags, base: "posts",  pageToken: 'post'}),
    ...posts.map(post => ({
      path: `/posts/${post.id}`,
      component: 'src/containers/Post.jsx',
      getData: () => ({
        item: post
      }),
    })),
      {
        path: '/games',
        component: 'src/containers/Games.jsx',
        getData: () => ({
          items: games
        }),
        children: games.map(g => {
          return({
            path: `/games/${g.id}`,
            component: 'src/containers/Game.jsx',
            getData: () => ({
              item: g,
            }),
          })
        })
      },
      // ...makePages(games, 100, 'games', 'src/containers/Games.jsx', 
      // (cid)=>{return `/games/${cid}`}, 'src/containers/Game.jsx', 
      // {title: 'Games', tag: null, tags, base: "games", pageToken: 'games', childKey: 'game', parentKey: 'games'}),
      ...games.map(game => ({
        path: `/games/${game.id}`,
        component: 'src/containers/Game.jsx',
        getData: () => ({
          item: game
        }),
      })),
      {
        path: '/about',
        component: 'src/containers/About.jsx',
        getData: () => ({
        }) //have to call get data to use is component
      },
      {
        path: '/settings',
        component: 'src/containers/Settings.jsx',
        getData: () => ({
        }) //have to call get data to use is component
      },
      {
        path: '/privacy',
        component: 'src/containers/Privacy.jsx',
        getData: () => ({
        }) //have to call get data to use is component
      },
      {
        is404: true,
        component: 'src/containers/404.jsx'
      },
    ]
  },
  renderToHtml:(render, C, meta) => {
   // meta.faviconsElements = await reactStaticFavicons.render();  async 
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<C />));
    meta.styleTags = sheet.getStyleElement();
    
    return html
  },
  Document: class CustomHtml extends React.Component {
    constructor(props){
      super(props);
      //console.log("document constructor")
    }
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props
      const workboxScript = `// Check that service workers are registered
      if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js');
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
            <meta name="robots" content="noindex" />
            {/* <title>{siteTitle}</title>
            <meta property="og:image" content="/webpackicons/android-chrome-256x256.png" /> */}
            {/* {renderMeta.faviconsElements} */}
            {renderMeta.styleTags}
            <link rel="manifest" href="/webpackicons/manifest.json"/>
            <link rel="shortcut icon"  href="/webpackicons/favicon.ico" />
          </Head>
          <Body>
         
          {children}
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: workboxScript }} />

          </Body>
        </Html>
      )
    }
  },
  
  webpack:[
    (prev, 
      {
      stage, defaultLoaders
      }
    ) => {
        //console.log("webpack mod called");
      //  console.log(prev);
        prev.resolve= {
          ...prev.resolve,
          alias:{
            LogError: path.resolve(__dirname, 'src/Error.js'),
            MyLog: path.resolve(__dirname, 'src/utilities/MyLog.js')
          }
        }
        return {
          ...prev
        };
    },
    (prev, 
      {
      stage, defaultLoaders
      }
    ) => {
      let favPath = path.join(__dirname, 'favicon.png');
        console.log("webpack mod called, favPath " + favPath)
        //console.log(prev);
        prev.plugins = [
          ...prev.plugins,
          new FaviconsWebpackPlugin({
            logo: favPath,
            inject: true,
            title: 'Instance of Humanity',
            background: '#ff2a2a',
            theme: '#ff2a2a',
            theme_color: "#ff2a2a",
            prefix: 'webpackicons/'
          })
        ]
        return {
          ...prev
        };
    },
    (prev, 
      {
      stage, defaultLoaders
      }
    ) => {
        console.log("webpack mod called")
       // console.log(prev);
        prev.plugins = [
          ...prev.plugins,
          new WorkboxPlugin.GenerateSW()
        ]
        return {
          ...prev
        };
    }
  ]
}

const reactStaticFavicons = new ReactStaticFavicons({
  // string: directory where the image files are written
  outputDir: path.join(__dirname, 'dist'),

  // string: the source image
  inputFile: path.join(__dirname, 'fav.png'),

  // object: the configuration passed directory to favicons
  configuration: {
    appName: 'appName',
    appShortName: 'myshortname',
    shortName: 'another short name',
    background: '#3367D6',
    "theme_color": '#3367D6',
    "start_url": "/posts",
    display: "standalone",
      icons: {
          favicons: true
          // other favicons configuration
      }
  },
});

const getTagPages = (items, key, tags) => {
  let pages = [];
  tags.map(t => {
     let tagPosts =items.filter(e => {
       return e[key].indexOf(t) > -1
     })
     pages = [
       ...pages,
       ...makePages(tagPosts, 2, t, 'src/containers/Posts.jsx', 
       (cid)=>{return `/posts/${cid}`}, 'src/containers/Post.jsx',
       {title: t ,tag: t, tags, base: t, pageToken: 'page'})
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
 // console.log("making " + items.length + " pages for route " + parentPath);
 // console.log("make pages items: " + items.length + " page size " + pageSize);
  if(items.length > pageSize){
      //make paginated pages
      return makePageRoutes({
        items,
        pageSize,
        ...childProps,
        route: {
          // Use this route as the base route
          path: parentPath, //"t1",
          component: parentComponent //'src/containers/Posts',
        },
        decorate: (items, i, totalPages) => ({
          // For each page, supply the posts, page and totalPages
          getData: () => ({
            items,
            currentPage: i,
            totalPages,
            brink: 'manhs',
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
        ...childProps,
        items: items,
      }),
      children: items.map(p => {
        return({
          path: childPath(p.id), //`/posts/${p.id}`,
          component: childComponent, //'src/containers/Post',
          getData: () => ({
           item: p,
          }),
        })
      })
    }]
  }
}















/*

      const workboxScript = `// Check that service workers are registered
      if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js');
        });
      }`;


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