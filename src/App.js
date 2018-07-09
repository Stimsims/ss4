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

// const theme = {
//   main: 'mediumseagreen'
// };


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
