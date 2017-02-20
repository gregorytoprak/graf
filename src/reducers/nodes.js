import Immutable from 'immutable'
import node from './node'
import { CREATE_NODE } from '../actions'

const initialState = Immutable.fromJS([])

const nodes = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return state.push(node(undefined, action))
    default:
      return state
  }
}

export default nodes
