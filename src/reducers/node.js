import Immutable from 'immutable'
import { CREATE_NODE, SELECT_NODE, MOVE_NODE } from '../actions/node'

const initialState = Immutable.fromJS({
  id: undefined,
  cx: undefined,
  cy: undefined,
  selected: false
})

const node = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return state
        .set('id', action.payload.id)
        .set('cx', action.payload.cx)
        .set('cy', action.payload.cy)
    case SELECT_NODE:
      return state
        .update('selected', s => !s)
    case MOVE_NODE:
      return state
        .set('cx', action.payload.cx)
        .set('cy', action.payload.cy)
    default:
      return state
  }
}

export default node
