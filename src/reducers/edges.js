import Immutable from 'immutable'
// import edge from './edge'
import { DELETE_NODE, CREATE_EDGE, DELETE_EDGE } from '../actions'

const initialState = Immutable.fromJS([])

const edges = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NODE:
    case CREATE_EDGE:
    case DELETE_EDGE:
    default:
      return state
  }
}

export default edges
