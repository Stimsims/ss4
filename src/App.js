import React from 'react'
import { Router, Link } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
//
import store from './connectors/redux'

import './app.css'
import {ThemeProvider} from 'styled-components';
import theme from './components/UI/theme.js';

import Analytics from './components/apis/Analytics.jsx';
import Gapi from './components/apis/Gapi.jsx';

// import nerdamer from 'nerdamer';
// import calculus from 'nerdamer/Calculus';
// import algebra from 'nerdamer/Algebra';
// import solve from 'nerdamer/Solve';
// import extra from 'nerdamer/Extra';
// const theme = {
//   main: 'mediumseagreen'
// };
// var e = nerdamer('x^2+2*(cos(x)+x*x)');
// console.log(e.text());
// var sol = nerdamer.solveEquations('x^3+8=x^2+6','x');
// console.log(sol.toString());

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Analytics />
        <Gapi />
  
        <ThemeProvider theme={theme}>
          <div className="content">
            <Routes />
          </div>
        </ThemeProvider>
      </div>
    </Router>
  </Provider>
)

export default hot(module)(App)
