import { combineReducers } from 'redux'

import simulation from './../simulation/reducers.js';

console.log("g1 reducers");

const reducer = combineReducers({
  simulation,
})

export default reducer;
