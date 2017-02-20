import Immutable from 'immutable'
import { START_EDGE, COMPLETE_EDGE, SELECT_EDGE } from '../actions/edge'

const initialState = Immutable.fromJS({
  id: undefined,
  startNodeId: undefined,
  endNodeId: undefined,
  selected: false
})

const edge = (state = initialState, action) => {
  switch (action.type) {
    case START_EDGE:
      return state.set('id', action.payload.id).set('startNodeId', action.payload.startNodeId)
    case COMPLETE_EDGE:
      return state.set('endNodeId', action.payload.endNodeId)
    case SELECT_EDGE:
      return state.update('selected', s => !s)
    default:
      return state
  }
}

export default edge
