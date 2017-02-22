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
      return state.set('cx', action.payload.cx).set('cy', action.payload.cy)
    case ZOOM_SHEET:
      return state.set('cx', action.payload.cx).set('cy', action.payload.cy)
        .set('w', action.payload.w).set('h', action.payload.h)
    case RESIZE_VIEWPORT:
      return state.set('vw', action.payload.viewport.width).set('vh', action.payload.viewport.height)
    default:
      return state
  }
}

export default sheet
