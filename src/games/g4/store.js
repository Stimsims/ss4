import { combineReducers } from 'redux'

import {reducer as game} from './story/gameReducer.js';
import {reducer as fsm} from './story/fsm/reducer.js';
import {reducer as items} from './story/items/reducer.js';
import {parentReducer} from './parentReducer.js';
//multiaction reducers
//change zone - change from state, change to state, change game position


const reducers = combineReducers({
    game,
    fsm,
    items
});


const rootReducer = (state, action) => {
    const intermediateState = reducers(state, action);
    //const finalState = crossSliceReducer(intermediateState, action);
    const finalState = parentReducer(intermediateState, action);
    return finalState;
}


export default rootReducer;