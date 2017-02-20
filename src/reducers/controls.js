import Immutable from 'immutable'
import control from './control'
import { START_EDGE, DELETE_EDGE, SELECT_EDGE } from '../actions/edge'
import { RESET_CONTROL, MOVE_CONTROL } from '../actions/control'

const initialState = Immutable.fromJS([])

const controls = (state = initialState, action) => {
  switch (action.type) {
    case START_EDGE:
      return state.push(control(undefined, action))
    case DELETE_EDGE:
      return state.filterNot(n => n.get('id') === action.payload.id)
    case SELECT_EDGE:
    case RESET_CONTROL:
    case MOVE_CONTROL:
      return state.map(c => c.get('id') === action.payload.id ? control(c, action) : c)
    default:
      return state
  }
}

export default controls
