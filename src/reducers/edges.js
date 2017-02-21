import Immutable from 'immutable'
import edge from './edge'
import { DELETE_NODE } from '../actions/node'
import { START_EDGE, COMPLETE_EDGE, DELETE_EDGE, SELECT_EDGE } from '../actions/edge'

const initialState = Immutable.fromJS([])

const edges = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NODE:
      return state.filterNot(e =>
        e.get('startNodeId') === action.payload.id ||
        e.get('endNodeId') === action.payload.id)
    case START_EDGE:
      return state.push(edge(undefined, action))
    case DELETE_EDGE:
      return state.filterNot(e => e.get('id') === action.payload.id)
    case COMPLETE_EDGE:
    case SELECT_EDGE:
      return state.map(e => e.get('id') === action.payload.id ? edge(e, action) : e)
    default:
      return state
  }
}

export default edges
