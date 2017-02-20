import Immutable from 'immutable'
import { CREATE_NODE } from '../actions'

const initialState = Immutable.fromJS({
  id: undefined,
  loc: undefined,
  selected: false,
  moving: false
})

const node = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return state.merge(Immutable.fromJS(action.data))
    default:
      return state
  }
}

export default node
