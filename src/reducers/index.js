import { combineReducers } from 'redux'
import sheet from './sheet'
import hand from './hand'
import nodes from './nodes'
import edges from './edges'

const reducer = combineReducers({
  sheet,
  hand,
  nodes,
  edges
})

export default reducer