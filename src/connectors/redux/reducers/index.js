import { combineReducers } from 'redux'

import {reducer as gapi} from './../../../components/apis/apiReducer.js'
import {reducer as settings} from './../../../components/game/SettingsReducer.js'

const reducer = combineReducers({
  gapi, settings
})

export default reducer
