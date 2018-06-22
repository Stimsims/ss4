import { combineReducers } from 'redux'

//import simulation from './../simulation/reducers.js';
import {reducer as index} from './../story/Reducers.js';
import {reducer as start} from './../story/start/index.js';


const reducers = combineReducers({
    index,
    start
})

console.log("exporting reducers");
console.log(reducers);
export default reducers;
