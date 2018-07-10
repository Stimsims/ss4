import React from 'react';
import { Provider } from 'react-redux'
import { createStore,  applyMiddleware } from 'redux'
import logger from 'redux-logger';
//import reducers from './../../games/g5/reducers.js';

if (typeof window === 'undefined') {
    global.window = {}
}


class Index extends React.Component{
    constructor(props){
        super(props);

      this.store = createStore(props.reducers,{},applyMiddleware(logger))
    }
    render(){
        return(
          <Provider store={this.store}>
                    {this.props.children}
          </Provider>
        )
    }
}

export default Index;
