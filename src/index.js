import React from 'react'
import ReactDOM from 'react-dom'
import MyError from './Error.js';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(
        <ErrorBoundary>
          <Comp />
        </ErrorBoundary>
      , document.getElementById('root'))
  }

  // Render!
  render(
    App
  )
}
