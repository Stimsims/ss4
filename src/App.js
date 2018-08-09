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

import { withContext, getContext } from 'recompose'

import PropTypes from 'prop-types';
import Menu from './components/layout/Menu.jsx';
import FadeIn from './components/UI/animations/FadeIn.jsx';

const startTheme = theme();

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
          <div style={{ position: 'absolute', height: '100%', width: '100%'}}>
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
                      height: '100%',
                      width: '100%',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                      <FadeIn>
                          <Comp {...props} />
                      </FadeIn>
                      {/* <SlideDown offset={100} duration={1500} childDelay={150}>
                          <Comp {...props} />
                      </SlideDown> */}
                      {/* <Comp {...props} /> */}
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

    `
  }

  render(){
    return(
      <Provider store={store}>
        <Router >
          <div  style={{position: 'relative'}}>

              <ThemeProvider theme={this.state.myTheme}>

                    <Root className="content" 
                              onDoubleClick={()=>{
                                  let nTheme = this.state.myTheme;
                                  nTheme.setTheme(nTheme);
                                  this.setState({
                                    myTheme: {...nTheme},
                                    themeKey: nTheme.theme
                                })}}>
                        <Analytics />
                        <Gapi />
                        {/* <p style={{display: 'none'}}>App root</p> */}
                        <Top>
                          <Menu />
                          {/* <Switch>
                            <Route path="/games/:game" exact component={() => {return null}} />
                            <Route path="/" component={() => {return <Menu />}} />
                          </Switch> */}
                        </Top>
                        <Content>
                          <Routes component={AnimatedRoutes} />
                        </Content>
                         {/* <Routes component={AnimatedRoutes} /> */}
                        {/* <Footer /> */}
                    </Root>
              </ThemeProvider>
            
          </div>
        </Router>
      </Provider>
    )
  }
}
const Top = styled.div` 
    width:100%;
    padding: 0;
    margin: 0;
    display: table-row;
`
const Content = styled.div`
    flex:1;
    width:100%;
    height: 100%;
    position: relative;
    padding: 0;
    margin: 0;
    overflow-y: auto;
`
const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: ${props => props.theme[props.theme.theme].neutral};
`

export default hot(module)(App)
