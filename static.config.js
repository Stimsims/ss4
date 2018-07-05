//import axios from 'axios'
import posts from './data/posts/index.js';
import games from './data/games/index.js';
import React from 'react';

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
*/

export default {
  siteRoot: 'https://illulli-1e5a.com/',
  getSiteData: () => ({
    siteTitle: 'Q Games',
    hello: 'world'
  }),
  getRoutes: async () => {
   // const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
   return [
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
              g,
            }),
          })
        })
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'src/containers/404',
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
*/