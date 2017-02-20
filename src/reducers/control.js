import Immutable from 'immutable'
import { START_EDGE, SELECT_EDGE } from '../actions/edge'
import { MOVE_CONTROL, RESET_CONTROL } from '../actions/control'

const initialState = Immutable.fromJS({
  id: undefined,
  loc: undefined,
  selected: false
})

const control = (state = initialState, action) => {
  switch (action.type) {
    case START_EDGE:
      return state.set('id', action.payload.id)
    case SELECT_EDGE:
      return state.update('selected', s => !s)
    case MOVE_CONTROL:
      return state.set('loc', action.payload.loc)
    case RESET_CONTROL:
      return state.set('loc', undefined)
    default:
      return state
  }
}

export default control
