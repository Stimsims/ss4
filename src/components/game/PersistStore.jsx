import React from 'react';
import { Provider } from 'react-redux'
import { createStore,  applyMiddleware } from 'redux'
import logger from 'redux-logger';
//import reducers from './../../games/g5/reducers.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { createTransform } from 'redux-persist';

// const SetTransform = createTransform(
//   // transform state on its way to being serialized and persisted.
//   (inboundState, key) => {
//     // convert mySet to an Array.
//     //return { ...inboundState, mySet: [...inboundState.mySet] };
//     console.log("transform persisted key: " + key, inboundState);
//     return inboundState;
//   },
//   // transform state being rehydrated
//   (outboundState, key) => {
//     // convert mySet back to a Set.
//     //return { ...outboundState, mySet: new Set(outboundState.mySet) };
//     console.log("transform rehydration key: " + key, outboundState);
//     return outboundState;
//   }
// );
// const persistConfig = {
//   key: 'rootB',
//   storage: storage,
//   stateReconciler: autoMergeLevel2,
//   //transforms: [SetTransform]
//  };

 //const pReducer = persistReducer(persistConfig, reducers);

if (typeof window === 'undefined') {
    global.window = {}
}


class Persist extends React.Component{
    constructor(props){
        super(props);
        console.log("PersistStore props", props);
      this.persistConfig = {
            key: props.savefile,
            storage: storage,
            stateReconciler: autoMergeLevel2,
            transforms: [
                createTransform(
                    (inboundState, key) => {
                        // convert mySet to an Array.
                        console.log('persist create transform inbound ' + key);
                        return { ...inboundState};
                    },
                    // transform state being rehydrated
                    (outboundState, key) => {
                            // convert mySet back to a Set.
                            console.log('persist create transform outbound ' + key);
                            return { ...outboundState};
                    },
                    { whitelist: null}
                ),
            ]
        };
      this.pReducer = persistReducer(this.persistConfig, this.props.reducers);
      this.store = createStore(this.pReducer,{},applyMiddleware(logger))
      this.persistor = persistStore(this.store);
    }
    render(){
        return(
          <Provider store={this.store}>
            <PersistGate loading={<p>persisting!</p>} 
                persistor={this.persistor}>

                    {this.props.children}
                {/* <div>
                    <Game game={this.props.game}/>
                </div> */}
                </PersistGate>
          </Provider>
        )
    }
}

Persist.displayName ='PersistStore';
export default Persist;
