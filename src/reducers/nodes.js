import Immutable from 'immutable'
import node from './node'
import { CREATE_NODE, DELETE_NODE, SELECT_NODE, MOVE_NODE } from '../actions/node'

const initialState = Immutable.fromJS([])

const nodes = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return state.push(node(undefined, action))
    case DELETE_NODE:
      return state.filterNot(n => n.get('id') === action.payload.id)
    case SELECT_NODE:
    case MOVE_NODE:
      return state.map(n => n.get('id') === action.payload.id ? node(n, action) : n)
    default:
      return state
  }
}

export default nodes
