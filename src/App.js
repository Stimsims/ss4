import React from 'react'
import { Router, Route, Switch, Link, cleanPath } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
//
import store from './connectors/redux'

import './app.css'
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import theme from './components/UI/theme.js';

import Analytics from './components/apis/Analytics.jsx';
import Gapi from './components/apis/Gapi.jsx';

import { easeQuadOut } from 'd3-ease'
import { NodeGroup } from 'react-move'
import { withContext, getContext } from 'recompose'
import PageAnim from './components/UI/animations/Page.jsx';

import PropTypes from 'prop-types';
import animationState from './components/UI/animations/Page.jsx';
import Menu from './components/layout/Ma.jsx';

import ReactCSSTransitionGroup from 'react-transition-group';
import FadeIn from './components/UI/animations/FadeIn.jsx';
import Container from './components/UI/elements/Container.jsx';

const startTheme = theme();


// const AnimatedRoutes = getContext({
//   // We have to preserve the router context for each route
//   // otherwise, a component may rerender with the wrong data
//   // during animation
//   router: PropTypes.object,
//   // We'll also look for the staticURL, so we can disable the animation during static render
//   staticURL: PropTypes.string,
// })(({ getComponentForPath, router, staticURL }) => (
//   <Route
//     path="*"
//     render={props => {
//       // Get the component for this path
//       let Comp = getComponentForPath(cleanPath(props.location.pathname))
//       if (!Comp) {
//         Comp = getComponentForPath('404')
//       }
//     //  console.log("App animated route " + props.location.pathname, props);
//       // When we're rendering for static HTML, be sure to NOT animate in.
//       if (staticURL) {
//         return (
//           // This relative wrapper is necessary for accurate rehydration :)
//           <div style={{ position: 'relative' }}>
//             <Comp {...props} />
//           </div>
//         )
//       }

//       // Use React-Move to animate the different components coming in and out
//       return (
//         // <PageAnim comp={Comp} router={router} props={props}/>
//         <NodeGroup
//         // React-move will handle the entry and exit of any items we pass in `data`
//         data={[
//           {
//             // pass the current Comp, props, ID and router
//             id: props.location.pathname,
//             Comp,
//             props,
//             router,
//           },
//         ]}
//         keyAccessor={d => d.id}
//         start={() => ({
//           opacity: [0],
//           scale: [1.2],
//           translateY: [20],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('start', 'start')}, 
//             end: () => {animationState.update('start', 'end')} }
//         })}
//         enter={() => ({
//           opacity: [1],
//           translateY: [0],
//           scale: [1],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('enter', 'start')}, 
//             end: () => {animationState.update('enter', 'end')} 
//           }
//         })}
//         update={() => ({
//           opacity: [1],
//           scale: [1],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('update', 'start')}, 
//             end: () => {animationState.update('update', 'end')} }
//         })}
//         leave={() => ({
//           opacity: [0],
//           translateY: [-0],
//           scale: [0.2],
//           timing: { duration: 800, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('leave', 'start')}, 
//             end: () => {animationState.update('leave', 'end')}
//            }
//         })}
//       >
//         {nodes => (
//           <div style={{ position: 'relative' }}>
//             {nodes.map((props) => {
//               let { key, data, type, state: { opacity, translateY, scale } } = props;
//               console.log("pageRendering props anim state " + animationState.state, props);
//               // Here, we override the router context with the one that was
//               // passed with each route scale(${scale}, ${scale}) 
//               //console.log(`animating map ${key} with opacity ${opacity} and scaleY ${scale} and rotate ${rotate}`);
//               //animationState={animationState.state} 
//               const PreservedRouterContext = withContext(
//                 {
//                   router: PropTypes.object,
//                 },
//                 () => ({
//                   router: data.router,
//                 }),
//               )(props => <div {...props} />)

//               return (
//                   // <data.Comp key={key}
//                   // style={{
//                   //   position: 'absolute',
//                   //   top: 0,
//                   //   right: 0,
//                   //   bottom: 0,
//                   //   left: 0,
//                   //   transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
//                   //   opacity,
//                   // }}
//                   // animationState={animationState.state}  />
//                 <PreservedRouterContext
//                   key={key}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     bottom: 0,
//                     left: 0,
//                     transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
//                     opacity,
//                   }}
//                 >
//                   <data.Comp  {...data.props} />
//                 </PreservedRouterContext>
//               )
//             })}
//           </div>
//         )}
//       </NodeGroup>
//       )
//     }}
//   />
// ))

// const AnimatedRoutes = getContext({
//   // We have to preserve the router context for each route
//   // otherwise, a component may rerender with the wrong data
//   // during animation
//   router: PropTypes.object,
//   // We'll also look for the staticURL, so we can disable the animation during static render
//   staticURL: PropTypes.string,
// })(({ getComponentForPath, router, staticURL }) => (
//   <Route
//     path="*"
//     render={props => {
//       // Get the component for this path
//       let Comp = getComponentForPath(cleanPath(props.location.pathname))
//       if (!Comp) {
//         Comp = getComponentForPath('404')
//       }
//     //  console.log("App animated route " + props.location.pathname, props);
//       // When we're rendering for static HTML, be sure to NOT animate in.
//       if (staticURL) {
//         return (
//           // This relative wrapper is necessary for accurate rehydration :)
//           <div style={{ position: 'relative' }}>
//             <Comp {...props} />
//           </div>
//         )
//       }

//       // Use React-Move to animate the different components coming in and out
//       return (
//         // <PageAnim comp={Comp} router={router} props={props}/>
//         <NodeGroup
//         // React-move will handle the entry and exit of any items we pass in `data`
//         data={[
//           {
//             // pass the current Comp, props, ID and router
//             id: props.location.pathname,
//             Comp,
//             props,
//             router,
//           },
//         ]}
//         keyAccessor={d => d.id}
//         start={() => ({
//           opacity: [0],
//           scale: [1.2],
//           translateY: [20],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('start', 'start')}, 
//             end: () => {animationState.update('start', 'end')} }
//         })}
//         enter={() => ({
//           opacity: [1],
//           translateY: [0],
//           scale: [1],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('enter', 'start')}, 
//             end: () => {animationState.update('enter', 'end')} 
//           }
//         })}
//         update={() => ({
//           opacity: [1],
//           scale: [1],
//           timing: { duration: 800, delay: 200, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('update', 'start')}, 
//             end: () => {animationState.update('update', 'end')} }
//         })}
//         leave={() => ({
//           opacity: [0],
//           translateY: [-0],
//           scale: [0.2],
//           timing: { duration: 800, ease: easeQuadOut },
//           events: { 
//             start: () => {animationState.update('leave', 'start')}, 
//             end: () => {animationState.update('leave', 'end')}
//            }
//         })}
//       >
//         {nodes => (
//           <div style={{ position: 'relative' }}>
//             {nodes.map((props) => {
//               let { key, data, type, state: { opacity, translateY, scale } } = props;
//               console.log("pageRendering props anim state " + animationState.state, props);
//               // Here, we override the router context with the one that was
//               // passed with each route scale(${scale}, ${scale}) 
//               //console.log(`animating map ${key} with opacity ${opacity} and scaleY ${scale} and rotate ${rotate}`);
//               //animationState={animationState.state} 
//               const PreservedRouterContext = withContext(
//                 {
//                   router: PropTypes.object,
//                 },
//                 () => ({
//                   router: data.router,
//                 }),
//               )(props => <div {...props} />)

//               return (
//                   // <data.Comp key={key}
//                   // style={{
//                   //   position: 'absolute',
//                   //   top: 0,
//                   //   right: 0,
//                   //   bottom: 0,
//                   //   left: 0,
//                   //   transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
//                   //   opacity,
//                   // }}
//                   // animationState={animationState.state}  />
//                 <PreservedRouterContext
//                   key={key}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     bottom: 0,
//                     left: 0,
//                     transform: `translateY(${translateY}px) scale(${scale}, ${scale})`,
//                     opacity,
//                   }}
//                 >
//                   <data.Comp  {...data.props} />
//                 </PreservedRouterContext>
//               )
//             })}
//           </div>
//         )}
//       </NodeGroup>
//       )
//     }}
//   />
// ))



//${props=>props.theme[props.theme.theme].accent}
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
      const PreservedRouterContext = withContext(
        {
          router: PropTypes.object,
        },
        () => ({
          router: router,
        }),
      )(props => <div {...props} />)
      return (
        <PreservedRouterContext
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                      <FadeIn>
                          <Comp {...props} />
                      </FadeIn>
                  </PreservedRouterContext>
      )
    }}
  />
))

class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        myTheme: startTheme,
        themeKey: startTheme.theme
    }
    this.injectStyles();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.themeKey !== this.state.myTheme.theme){
        this.injectStyles();
    }
  }
  injectStyles(){
      injectGlobal`
      /* width */
      ::-webkit-scrollbar {
          width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
          background:  ${this.state.myTheme[this.state.myTheme.theme].neutral}; 
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
          background:  ${this.state.myTheme[this.state.myTheme.theme].accent}; 
          border-radius: 5px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
          background: ${this.state.myTheme[this.state.myTheme.theme].accentL}; 
      }
      ::-webkit-scrollbar-button{
        background: ${this.state.myTheme[this.state.myTheme.theme].neutralL}; 
        color: white;
      }
      .fade-enter{
        opacity: 0;
        transition: all 300ms;
      }
      .fade-enter-active{
        opacity: 1;
        transition: all 300ms;
      }
      .fade-leave{
        opacity: 1;
        transition: all 300ms;
      }
      .fade-leave-active{
        opacity: 0;
        transition: all 300ms;
      }
    `
  }

  render(){
    return(
      <Provider store={store}>
        <Router >
          <div  style={{position: 'relative'}}>
          <Analytics />
            <Gapi />
              <ThemeProvider theme={this.state.myTheme}>
                    <Root className="content" 
                              onDoubleClick={()=>{
                                  let nTheme = this.state.myTheme;
                                  nTheme.setTheme(nTheme);
                                  this.setState({
                                    myTheme: {...nTheme},
                                    themeKey: nTheme.theme
                                })}}>
                        <Top>
                          <Menu />
                        </Top>
                        {/* <Switch>
                          <Route path="/games/:game" exact component={() => {return null}} />
                          <Route path="/" component={() => {return <Menu />}} />
                        </Switch> */}
                        <Content>
                          <Routes component={AnimatedRoutes} />
                          {/* <Routes  /> */}
                        </Content>
                    </Root>
              </ThemeProvider>
            
          </div>
        </Router>
      </Provider>
    )
  }
}
const Top = styled.div` 
    width:100%
    padding: 0;
    margin: 0;
`
const Content = styled.div`
    flex:1;
    width:100%;
    height: 100%;
    position: relative;
    padding: 0;
    margin: 0;
    overflow-y: hidden;
`
const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme[props.theme.theme].neutral};
`
// const Top = styled.div`
//     display:table-row; 
//     width:100%
//     background-color:red;
// `
// const Content = styled.div`
// background-color:yellow;
//     display:table-row;
//     width:100%;
//     max-height: 100%;
// `
// const Root = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: table;
//   background-color: ${props => props.theme[props.theme.theme].neutral};
// `

/*overflow: hidden;
    width: 100%;
  height: 100vh;
    top: 0; left: 0; right: 0; bottom: 0;
 <Analytics />
            <Gapi />
              <ThemeProvider theme={this.state.myTheme}>
                      <Root className="content" style={{backgroundColor: this.state.myTheme[this.state.myTheme.theme].neutral}} onDoubleClick={()=>{
                                let nTheme = this.state.myTheme;
                                nTheme.setTheme(nTheme);
                                this.setState({
                                  myTheme: {...nTheme},
                                  themeKey: nTheme.theme
                              })
                      }}>
                      <Switch>
                        <Route path="/games/:game" exact component={() => {return null}} />
                        <Route path="/" component={() => {return <Menu />}} />
                      </Switch>
                      <Routes component={AnimatedRoutes} />
                    </Root>
              </ThemeProvider>
*/

export default hot(module)(App)
