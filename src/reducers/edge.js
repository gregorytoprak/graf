import { RESET_CONTROL, MOVE_CONTROL } from '../actions/control'
import { START_EDGE, COMPLETE_EDGE, SELECT_EDGE } from '../actions/edge'

const initialState = {
  id: undefined,
  startNodeId: undefined,
  endNodeId: undefined,
  curved: false,
  selected: false
}

const edge = (state = initialState, action) => {
  switch (action.type) {
    case START_EDGE:
      return {
        ...state,
        ...action.payload
      }
    case COMPLETE_EDGE:
      return {
        ...state,
        ...action.payload
      }
    case SELECT_EDGE:
      return {
        ...state,
        selected: !state.selected
      }
    case RESET_CONTROL:
      return {
        ...state,
        curved: false
      }
    case MOVE_CONTROL:
      return {
        ...state,
        curved: true
      }
    default:
      return state
  }
}

export default edge
