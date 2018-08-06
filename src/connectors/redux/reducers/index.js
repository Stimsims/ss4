import { combineReducers } from 'redux'

import {reducer as gapi} from './../../../components/apis/apiReducer.js'

const reducer = combineReducers({
  gapi
})

export default reducer
