import { FULL_SELECT } from '../actions/meta'
import { CREATE_NODE, SELECT_NODE, MOVE_NODE } from '../actions/node'

const initialState = {
  id: undefined,
  cx: undefined,
  cy: undefined,
  selected: false,
  moving: false
}

const node = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
    case FULL_SELECT:
      return {
        ...state,
        ...action.payload
      }
    case SELECT_NODE:
      return {
        ...state,
        selected: state.moving ? state.selected : !state.selected,
        moving: false
      }
    case MOVE_NODE:
      return {
        ...state,
        ...action.payload,
        moving: true
      }
    default:
      return state
  }
}

export default node
