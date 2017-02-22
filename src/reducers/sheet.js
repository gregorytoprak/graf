import Immutable from 'immutable'
import { PAN_SHEET, ZOOM_SHEET, RESIZE_VIEWPORT } from '../actions/sheet'

const initialState = Immutable.fromJS({
  cx: 0,
  cy: 0,
  w: 10,
  h: 10,
  vw: 1000,
  vh: 1000
})

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case PAN_SHEET:
      return state
        .update('cx', cx => cx + action.payload.dx)
        .update('cy', cy => cy + action.payload.dy)
    case ZOOM_SHEET:
      return state.set('cx', action.payload.cx).set('cy', action.payload.cy)
        .set('w', action.payload.w).set('h', action.payload.h)
    case RESIZE_VIEWPORT:
      const { width, height } = action.payload.viewport
      return state.set('vw', width).set('vh', height)
        .update('w', w => w * width / state.get('vw'))
        .update('h', h => h * height / state.get('vh'))
    default:
      return state
  }
}

export default sheet
