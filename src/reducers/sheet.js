import Immutable from 'immutable'
import { PAN_SHEET, ZOOM_SHEET } from '../actions/sheet'

const initialState = Immutable.fromJS({
  loc: { x: 0, y: 0 },
  s: 10
})

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case PAN_SHEET:
      return state.set('loc', action.payload.loc)
    case ZOOM_SHEET:
      return state.set('loc', action.payload.loc).set('s', action.payload.s)
    default:
      return state
  }
}

export default sheet
