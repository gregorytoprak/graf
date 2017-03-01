import { START_EDGE, COMPLETE_EDGE, SELECT_EDGE, MOVE_CONTROL, RESET_CONTROL } from '../actions/edge'

const initialState = {
  id: undefined,
  startNodeId: undefined,
  endNodeId: undefined,
  controlx: undefined,
  controly: undefined,
  complete: false,
  curved: false,
  selected: false
}

const edge = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EDGE:
      return {
        ...state,
        selected: !state.selected
      }
    case START_EDGE:
    case COMPLETE_EDGE:
    case MOVE_CONTROL:
    case RESET_CONTROL:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default edge
