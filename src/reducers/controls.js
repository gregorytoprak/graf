import control from './control'
import { START_EDGE, DELETE_EDGE, SELECT_EDGE } from '../actions/edge'
import { RESET_CONTROL, MOVE_CONTROL } from '../actions/control'

const initialState = []

const controls = (state = initialState, action) => {
  switch (action.type) {
    case START_EDGE:
      return [
        ...state,
        control(undefined, action)
      ]
    case DELETE_EDGE:
      return state.filter(ct => ct.id !== action.payload.id)
    case SELECT_EDGE:
    case RESET_CONTROL:
    case MOVE_CONTROL:
      return state.map(ct => ct.id === action.payload.id ? control(ct, action) : ct)
    default:
      return state
  }
}

export default controls
