import Immutable from 'immutable'
import nodes from './nodes'
import { CREATE_NODE } from '../actions'

const initialState = Immutable.fromJS({
  nodes: [],
  edges: []
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return state.update('nodes', nodesState => nodes(nodesState, action))
    default:
      return state
  }
}

export default reducer
