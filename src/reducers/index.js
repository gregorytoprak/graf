import { combineReducers } from 'redux-immutable'
import sheet from './sheet'
import nodes from './nodes'
import edges from './edges'
import controls from './controls'
import viewport from './viewport'

const reducer = combineReducers({
  sheet,
  nodes,
  edges,
  controls,
  viewport
})

export default reducer
