import React from 'react'
import { Router, Route, Link, cleanPath } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
//
import store from './connectors/redux'

import './app.css'
import styled, {ThemeProvider} from 'styled-components';
import theme from './components/UI/theme.js';

import Analytics from './components/apis/Analytics.jsx';
import Gapi from './components/apis/Gapi.jsx';



import { easeQuadOut } from 'd3-ease'
import { NodeGroup } from 'react-move'
import { withContext, getContext } from 'recompose'
import PropTypes from 'prop-types'

import Menu from './components/layout/MainMenu.jsx';

const AnimatedRoutes = getContext({
  // We have to preserve the router context for each route
  // otherwise, a component may rerender with the wrong data
  // during animation
  router: PropTypes.object,
  // We'll also look for the staticURL, so we can disable the animation during static render
  staticURL: PropTypes.string,
})(({ getComponentForPath, router, staticURL }) => (
  <Route
    path="*"
    render={props => {
      // Get the component for this path
      let Comp = getComponentForPath(cleanPath(props.location.pathname))
      if (!Comp) {
        Comp = getComponentForPath('404')
      }
      console.log("App animated route " + props.location.pathname, props);
      // When we're rendering for static HTML, be sure to NOT animate in.
      if (staticURL) {
        return (
          // This relative wrapper is necessary for accurate rehydration :)
          <div style={{ position: 'relative' }}>
            <Comp {...props} />
          </div>
        )
      }

      // Use React-Move to animate the different components coming in and out
      return (
        <NodeGroup
          // React-move will handle the entry and exit of any items we pass in `data`
          data={[
            {
              // pass the current Comp, props, ID and router
              id: props.location.pathname,
              Comp,
              props,
              router,
            },
          ]}
          keyAccessor={d => d.id}
          start={() => ({
            opacity: [0],
            scale: [1.2],
            translateY: [20],
            timing: { duration: 800, delay: 200, ease: easeQuadOut },
          })}
          enter={() => ({
            opacity: [1],
            translateY: [0],
            scale: [1],
            timing: { duration: 800, delay: 200, ease: easeQuadOut },
          })}
          update={() => ({
            opacity: [1],
            scale: [1],
            timing: { duration: 800, delay: 200, ease: easeQuadOut },
          })}
          leave={() => ({
            opacity: [0],
            translateY: [-0],
            scale: [0.2],
            timing: { duration: 800, ease: easeQuadOut },
          })}
        >
          {nodes => (
            <div style={{ position: 'relative' }}>
              {nodes.map(({ key, data, state: { opacity, translateY, scale } }) => {
                // Here, we override the router context with the one that was
                // passed with each route scale(${scale}, ${scale}) 
                //console.log(`animating map ${key} with opacity ${opacity} and scaleY ${scale} and rotate ${rotate}`);
                const PreservedRouterContext = withContext(
                  {
                    router: PropTypes.object,
                  },
                  () => ({
                    router: data.router,
                  }),
                )(props => <div {...props} />)

                return (
                  <PreservedRouterContext
                    key={key}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
                      opacity,
                    }}
                  >
                    <data.Comp {...data.props} />
                  </PreservedRouterContext>
                )
              })}
            </div>
          )}
        </NodeGroup>
      )
    }}
  />
))

class App extends React.Component{
  constructor(props){
    super(props);
    let startTheme = theme();
   // startTheme.theme = startTheme.setTheme(); //set to default for consistent static package class names?
      this.state = {
        myTheme: startTheme
    }
    //console.log("my random theme ", this.state.myTheme);
  }
  render(){
    return(
      <Provider store={store}>
        <Router >
          <div>
            <Analytics />
            <Gapi />
            <div className="content" onDoubleClick={()=>{
                      let nTheme = this.state.myTheme;
                      nTheme.setTheme(nTheme);
                      this.setState({
                        myTheme: {...nTheme}
                    })
            }}>
              <ThemeProvider theme={this.state.myTheme}>
                  <div>
                    <Route component={() => {return <Menu />}} />
                    <Routes component={AnimatedRoutes} />
                  </div>
              </ThemeProvider>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}
// const App = () => (
//   <Provider store={store}>
//     <Router >
//       <div>
//         <Analytics />
//         <Gapi />
//         <div className="content" onDoubleClick={()=>{
//                   this.setState({
//                     myTheme: theme()
//                 })
//         }}>
//           <ThemeProvider theme={this.state.myTheme}>
              
//               <Routes />
            
//           </ThemeProvider>
//         </div>
//       </div>
//     </Router>
//   </Provider>
// )

export default hot(module)(App)
