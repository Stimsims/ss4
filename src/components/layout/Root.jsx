import React from 'react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import theme, {day, night} from './../UI/theme.js';
import Routes from 'react-static-routes'
import Analytics from './../apis/Analytics.jsx';
import Gapi from './../apis/Gapi.jsx';
import { Router, Route, Switch, Link, cleanPath } from 'react-static'

import { withContext, getContext } from 'recompose'

import PropTypes from 'prop-types';
import Menu from './Menu.jsx';
import FadeIn from './../UI/animations/FadeIn.jsx';

class Root extends React.Component{

    render(){
        return (
            <div  style={{position: 'relative'}}>

                <ThemeProvider theme={day}>
                    <Base className="content" 
                                onDoubleClick={()=>{
                                    let nTheme = this.state.myTheme;
                                    nTheme.setTheme(nTheme);
                                    this.setState({
                                    myTheme: {...nTheme},
                                    themeKey: nTheme.theme
                                })}}>
                        <Analytics />
                        <Gapi />
                        <Top>
                            <Menu />
                        </Top>
                        <Content>
                            <Routes component={AnimatedRoutes} />
                        </Content>
                    </Base>
                </ThemeProvider>

                </div>
        )
    }
}

export default Root;
{/* <div  style={{position: 'relative'}}>

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
          <Top>
            <Menu />
          </Top>
          <Content>
            <Routes component={AnimatedRoutes} />
          </Content>
      </Root>
</ThemeProvider>

</div> */}

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
const Base = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: ${props => props.theme[props.theme.theme].neutral};
`


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