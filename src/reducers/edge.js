import Immutable from 'immutable'
import { CREATE_EDGE } from '../actions'

const initialState = Immutable.fromJS({})

const edge = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EDGE:
    default:
      return state
  }
}

export default edge
