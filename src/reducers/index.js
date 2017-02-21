import { combineReducers } from 'redux-immutable'
import browser from './browser'
import sheet from './sheet'
import nodes from './nodes'
import edges from './edges'
import controls from './controls'

const reducer = combineReducers({
  browser,
  sheet,
  nodes,
  edges,
  controls
})

export default reducer
