import { combineReducers } from 'redux'

import {reducer as game} from './story/gameReducer.js';
import {reducer as fsm} from './story/fsm/reducer.js';
import {reducer as items} from './story/items/reducer.js';
import {reducer as relations} from './story/relationsReducer.js';
import {reducer as simulation} from './simulation/reducer.js';
import {parentReducer} from './parentReducer.js';
//multiaction reducers
//change zone - change from state, change to state, change game position


const reducers = combineReducers({
    simulation,
    game,
    fsm,
    items,
    relations
});


const rootReducer = (state, action) => {
    const finalState = parentReducer(state, action);
    const intermediateState = reducers(finalState, action);
    //const finalState = crossSliceReducer(intermediateState, action);
    
    return intermediateState;
}


export default rootReducer;