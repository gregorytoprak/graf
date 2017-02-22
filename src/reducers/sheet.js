import Immutable from 'immutable'
import { PAN_SHEET, ZOOM_SHEET } from '../actions/sheet'

const initialState = Immutable.fromJS({
  loc: { cx: 0, cy: 0 },
  s: 10
})

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case PAN_SHEET:
      return state.set('loc', Immutable.Map(action.payload.loc))
    case ZOOM_SHEET:
      return state.set('loc', Immutable.Map(action.payload.loc)).set('s', action.payload.s)
    default:
      return state
  }
}

export default sheet
