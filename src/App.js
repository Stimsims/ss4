import React from 'react'
import { Router, Link } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
//
import store from './connectors/redux'

import './app.css'
import Menu from './components/menu.jsx';
import Analytics from './components/apis/Analytics.jsx';
import Gapi from './components/apis/Gapi.jsx';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Analytics />
        <Gapi />
        <Menu />
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  </Provider>
)

export default hot(module)(App)
