import { START_EDGE, COMPLETE_EDGE, SELECT_EDGE } from '../actions/edge'

const initialState = {
  id: undefined,
  startNodeId: undefined,
  endNodeId: undefined,
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
    default:
      return state
  }
}

export default edge
