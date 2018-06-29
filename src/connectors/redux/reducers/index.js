import { combineReducers } from 'redux'

import counter from './counter'
import {reducer as gapi} from './../../../components/apis/apiReducer.js'

const reducer = combineReducers({
  counter,
  gapi
})

export default reducer
