import Immutable from 'immutable'
import { PAN_SHEET, ZOOM_SHEET } from '../actions/sheet'

const initialState = Immutable.fromJS({
  cx: 0,
  cy: 0,
  w: 10,
  h: 10
})

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case PAN_SHEET:
      return state.set('cx', action.payload.loc.cx).set('cy', action.payload.loc.cy)
    case ZOOM_SHEET:
      return state.set('cx', action.payload.loc.cx).set('cy', action.payload.loc.cy)
        .set('w', action.payload.dims.w).set('h', action.payload.dims.h)
    default:
      return state
  }
}

export default sheet
