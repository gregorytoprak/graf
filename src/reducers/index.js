import { combineReducers } from 'redux'
import nodes from './nodes'
import edges from './edges'

const reducer = combineReducers({
  nodes,
  edges
})

export default reducer
