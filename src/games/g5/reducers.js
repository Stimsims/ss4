import { combineReducers } from 'redux'

import {reducer as world} from './app/world/reducer.js';
import {reducer as game} from './app/game/reducer.js';
//multiaction reducers
//change zone - change from state, change to state, change game position


const reducers = combineReducers({
    world,
    game
});


// const rootReducer = (state, action) => {
//     const finalState = parentReducer(state, action);
//     const intermediateState = reducers(finalState, action);
//     //const finalState = crossSliceReducer(intermediateState, action);
    
//     return intermediateState;
// }


export default reducers;