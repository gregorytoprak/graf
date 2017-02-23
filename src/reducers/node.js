import { CREATE_NODE, SELECT_NODE, MOVE_NODE } from '../actions/node'

const initialState = {
  id: undefined,
  cx: undefined,
  cy: undefined,
  selected: false
}

const node = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return {
        ...state,
        ...action.payload
      }
    case SELECT_NODE:
      return {
        ...state,
        selected: !state.selected
      }
    case MOVE_NODE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default node
