import Immutable from 'immutable'
import { PAN_SHEET, ZOOM_SHEET, RESIZE_VIEWPORT } from '../actions/sheet'

const initialState = Immutable.fromJS({
  cx: 0,
  cy: 0,
  w: 10,
  h: 10,
  vw: undefined,
  vh: undefined
})

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case PAN_SHEET:
      return state.set('cx', action.payload.loc.cx).set('cy', action.payload.loc.cy)
    case ZOOM_SHEET:
      return state.set('cx', action.payload.loc.cx).set('cy', action.payload.loc.cy)
        .set('w', action.payload.dims.w).set('h', action.payload.dims.h)
    case RESIZE_VIEWPORT:
      return state.set('vw', action.payload.viewport.width).set('vh', action.payload.viewport.height)
    default:
      return state
  }
}

export default sheet
