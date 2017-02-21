import { combineReducers } from 'redux'
import sheet from './sheet'
import nodes from './nodes'
import edges from './edges'
import controls from './controls'

const reducer = combineReducers({
  sheet,
  nodes,
  edges,
  controls
})

export default reducer
