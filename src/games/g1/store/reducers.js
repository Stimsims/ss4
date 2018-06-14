import { combineReducers } from 'redux'

//import simulation from './../simulation/reducers.js';
import {reducer as simulation} from './../simulation/index.js';
import {reducer as start} from './../story/start/store.js';
import {reducer as rooms} from './../story/rooms/store.js';

console.log("g1 reducers");

const reducer = combineReducers({
  simulation,
  start,
  rooms
})

export default reducer;
