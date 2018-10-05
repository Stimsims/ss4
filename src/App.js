import React from 'react'
import { Router, Route, Switch, Link, cleanPath } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

//
import store from './connectors/redux'

import './app.css'


import Root from './components/layout/Root.jsx';

//const startTheme = theme();

class App extends React.Component{
  constructor(props){
    super(props);
    //   this.state = {
    //     myTheme: startTheme,
    //     themeKey: startTheme.theme
    // }
  //  this.injectStyles();
  }

  componentDidUpdate(prevProps, prevState){
    // if(prevState.themeKey !== this.state.myTheme.theme){
    //     this.injectStyles();
    // }
  }
  // injectStyles(){
  //     injectGlobal`
  //     /* width */
  //     ::-webkit-scrollbar {
  //         width: 10px;
  //     }

  //     /* Track */
  //     ::-webkit-scrollbar-track {
  //         background:  ${this.state.myTheme[this.state.myTheme.theme].neutral}; 
  //     }

  //     /* Handle */
  //     ::-webkit-scrollbar-thumb {
  //         background:  ${this.state.myTheme[this.state.myTheme.theme].accent}; 
  //         border-radius: 5px;
  //     }

  //     /* Handle on hover */
  //     ::-webkit-scrollbar-thumb:hover {
  //         background: ${this.state.myTheme[this.state.myTheme.theme].accentL}; 
  //     }
  //     ::-webkit-scrollbar-button{
  //       background: ${this.state.myTheme[this.state.myTheme.theme].neutralL}; 
  //       color: white;
  //     }

  //   `
  // }

  render(){
    return(
      <Provider store={store}>
        <Router >
            <Root />
        </Router>
      </Provider>
    )
  }
}


export default hot(module)(App)




/*


*/