import { START_EDGE, COMPLETE_EDGE, SELECT_EDGE } from '../actions/edge'
import { MOVE_CONTROL, RESET_CONTROL } from '../actions/control'

const initialState = {
  id: undefined,
  cx: undefined,
  cy: undefined,
  complete: false,
  curved: false,
  selected: false
}

const control = (state = initialState, action) => {
  switch (action.type) {
    case START_EDGE:
      return {
        ...state,
        id: action.payload.id
      }
    case COMPLETE_EDGE:
      return {
        ...state,
        complete: true
      }
    case SELECT_EDGE:
      return {
        ...state,
        selected: !state.selected
      }
    case MOVE_CONTROL:
      return {
        ...state,
        ...action.payload
      }
    case RESET_CONTROL:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default control
