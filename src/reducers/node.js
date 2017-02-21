import Immutable from 'immutable'
import { CREATE_NODE, SELECT_NODE, MOVE_NODE } from '../actions/node'

const initialState = Immutable.fromJS({
  id: undefined,
  loc: undefined,
  selected: false
})

const node = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return state.set('id', action.payload.id).set('loc', Immutable.Map(action.payload.loc))
    case SELECT_NODE:
      return state.update('selected', s => !s)
    case MOVE_NODE:
      return state.set('loc', Immutable.Map(action.payload.loc))
    default:
      return state
  }
}

export default node
