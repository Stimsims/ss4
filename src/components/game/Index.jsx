import React from 'react';
import { Provider } from 'react-redux'
import { createStore,  applyMiddleware } from 'redux'
import logger from 'redux-logger';
import reducers from './../../games/g4/store.js';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { createTransform } from 'redux-persist';

const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // convert mySet to an Array.
    //return { ...inboundState, mySet: [...inboundState.mySet] };
    console.log("transform persisted key: " + key, inboundState);
    return inboundState;
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // convert mySet back to a Set.
    //return { ...outboundState, mySet: new Set(outboundState.mySet) };
    console.log("transform rehydration key: " + key, outboundState);
    return outboundState;
  }
);
const persistConfig = {
  key: 'rootB',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  //transforms: [SetTransform]
 };

 const pReducer = persistReducer(persistConfig, reducers);

if (typeof window === 'undefined') {
    global.window = {}
  }
  

import Game from './Game.jsx';
//import Sim from './Simulation.jsx';
const onBeforeLift = (arg1) => {
  // take some action before the gate lifts
  console.log("persistor before lift ", arg1);
}

class Index extends React.Component{
    constructor(props){
        super(props);
        // console.log("index constructor ");
        // console.log(reducers);
        //expects to recieve the game
        //the game gives reducers, selectors, mapStteToProps, dispatchToStore, 
        //simulation and iterates through story nodes
        //the game displays the content, the simulation runs, stops and persists state
     //  let reducers = props.game.getReducers();
       // this.store = createStore(reducers);
      //  this.store = createStore(
      //       reducers,
      //       {},
      //       applyMiddleware(logger),
      //   )
      this.store = createStore(pReducer,{},applyMiddleware(logger))
      this.persistor = persistStore(this.store);
      console.log("persistor", this.persistor);
       // console.log("sub store created");
    }
    render(){
        return(
          <div>
          <Provider store={this.store}>
          <PersistGate loading={<p>persisting!</p>} 
           onBeforeLift={onBeforeLift}
            persistor={this.persistor}>
            <div>
                <Game game={this.props.game} persistor={this.persistor}/>
            </div>
            </PersistGate>
          </Provider>

          </div>
        )
    }
    componentDidMount(){
      let storage = window.localStorage;
      console.log("storage", storage);
      let stored = storage.getItem('persist:rootA');
      console.log("stored", stored);
      //cannot read a serialized json file
      storage.setItem('metadata:rootA', 'Thu 05 18 5:06pm, health: 100pts');
      storage.setItem('persist:rootB', stored);
    }
}
/*
<Provider store={this.store}>
            <div>
                <Game game={this.props.game} />
            </div>
          </Provider>
*/

export default Index;

/*
import { createStore,  applyMiddleware } from 'redux'
import logger from 'redux-logger';

import reducer from './reducers'

if (typeof window === 'undefined') {
  global.window = {}
}

const store = createStore(
    reducer,
    {},
    applyMiddleware(logger),
  )
  
*/