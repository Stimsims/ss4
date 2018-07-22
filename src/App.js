import React from 'react'
import { Router, Link, Link, cleanPath } from 'react-static'
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
                  
                  <Routes />
                
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
