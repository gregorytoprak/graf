import { START_EDGE, SELECT_EDGE } from '../actions/edge'
import { MOVE_CONTROL, RESET_CONTROL } from '../actions/control'

const initialState = {
  id: undefined,
  cx: undefined,
  cy: undefined,
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
