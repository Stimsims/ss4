import React from 'react'
import { Router, Link } from 'react-static'
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
//import charts from 'recharts';
//import All from './components/AllComponents.js';
//import Katex from './components/UI/math/Katex.jsx';

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
