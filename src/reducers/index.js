import { combineReducers } from 'redux'
import sheet from './sheet'
import hand from './hand'
import nodes from './nodes'
import edges from './edges'
import controls from './controls'

const reducer = combineReducers({
  sheet,
  hand,
  nodes,
  edges,
  controls
})

export default reducer
