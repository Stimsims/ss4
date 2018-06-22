import { combineReducers } from 'redux'
//import reduceReducers from 'reduce-reducers';
//import simulation from './../simulation/reducers.js';
// import {reducer as index} from './../story/Reducers.js';
// import {reducer as start} from './../story/start/index.js';
import {reducer as zones} from './../story/zones/reducers.js';
import {reducer as questions} from './../story/questions/reducers.js';
import {reducer as actions} from '../story/actions/reducers';
import {reducer as log} from './log.js';
import {reducer as simulation} from './../story/simulation/reducer.js';

const reducers = combineReducers({
    simulation,
    zones,
    questions,
    actions,
    log
});

export default reducers;