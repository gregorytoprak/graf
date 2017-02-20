import { combineReducers } from 'redux'
import nodes from './nodes'
import edges from './edges'
import controls from './controls'

const reducer = combineReducers({
  nodes,
  edges,
  controls
})

export default reducer
