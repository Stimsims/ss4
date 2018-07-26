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
import { w, renderNothingithContext, getContext, withContext } from 'recompose';

import PropTypes from 'prop-types'

//import MyError from './Error.js';

import Menu from './components/layout/MainMenu.jsx';

const startTheme = theme();

function myAnimate(){
  this.state = 1;
  this.update = (type, phase) => {
    if((type === 'enter' && phase === 'end') || (type === 'leave' && phase === 'end') || (type === 'update' && phase === 'end')){
      this.state = 1;
    }else if(this.state === 1){
      this.state = 0;
    }
    console.log(`animationUpdate type: ${type} phase: ${phase} state: ${this.state}`);
  }
}
const animationState = new myAnimate();
//console.log("AnimationUpdate obj ", animationState);
// animationUpdate = animationUpdate();
//var animationUpdate = () => {};

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
    //  console.log("App animated route " + props.location.pathname, props);
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
            events: { 
              start: () => {animationState.update('start', 'start')}, 
              end: () => {animationState.update('start', 'end')} }
          })}
          enter={() => ({
            opacity: [1],
            translateY: [0],
            scale: [1],
            timing: { duration: 800, delay: 200, ease: easeQuadOut },
            events: { 
              start: () => {animationState.update('enter', 'start')}, 
              end: () => {animationState.update('enter', 'end')} 
            }
          })}
          update={() => ({
            opacity: [1],
            scale: [1],
            timing: { duration: 800, delay: 200, ease: easeQuadOut },
            events: { 
              start: () => {animationState.update('update', 'start')}, 
              end: () => {animationState.update('update', 'end')} }
          })}
          leave={() => ({
            opacity: [0],
            translateY: [-0],
            scale: [0.2],
            timing: { duration: 800, ease: easeQuadOut },
            events: { 
              start: () => {animationState.update('leave', 'start')}, 
              end: () => {animationState.update('leave', 'end')}
             }
          })}
        >
          {nodes => (
            <div style={{ position: 'relative' }}>
              {nodes.map((props) => {
                let { key, data, type, state: { opacity, translateY, scale } } = props;
                console.log("pageRendering props anim state " + animationState.state, props);
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
                    <data.Comp {...data.props} animationState={animationState.state} />
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




//${props=>props.theme[props.theme.theme].accent}


class App extends React.Component{
  constructor(props){
    super(props);
    //let startTheme = theme();
   // startTheme.theme = startTheme.setTheme(); //set to default for consistent static package class names?
      this.state = {
        myTheme: startTheme,
        themeKey: startTheme.theme
    }

    this.injectStyles();
    //console.log("my random theme ", this.state.myTheme);
  }

  componentDidMount(){
    try{
      let fail = 10/0;
      console.log("app try succeeded in dividing by 0 " + fail);
      throw new Error('divided by zero');
    }catch(e){
      console.log("app catch block failed to divide by 0", e);
      throw e;
      //MyError(e);
    }
    // this.setState({
    //   mounted: true
    // })
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
    `
  }
  // renderThing(){
  //   if(this.state.mounted){
  //     return this.state.none.prop;
  //   }
  //   return null;
  // }
  render(){
    return(
      <Provider store={store}>
        <Router >
          <div style={{position: 'relative'}}>
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
            
          </div>
        </Router>
      </Provider>
    )
  }
}

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

/*
  
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
