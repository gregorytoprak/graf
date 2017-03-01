import { PAN_SHEET, ZOOM_SHEET, RESIZE_VIEWPORT } from '../actions/sheet'

const initialState = {
  cx: 0,
  cy: 0,
  w: 10,
  h: 10,
  vw: 500,
  vh: 500
}

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case PAN_SHEET:
      return {
        ...state,
        cx: state.cx + action.payload.dx,
        cy: state.cy + action.payload.dy
      }
    case ZOOM_SHEET:
      const zf = action.payload.zoomFactor
      return {
        ...state,
        cx: state.cx * zf + action.payload.zoomLoc.x * (1 - zf),
        cy: state.cy * zf + action.payload.zoomLoc.y * (1 - zf),
        w: state.w * zf,
        h: state.h * zf
      }
    case RESIZE_VIEWPORT:
      const { width, height } = action.payload.viewport
      return {
        ...state,
        w: state.w * width / state.vw,
        h: state.h * height / state.vh,
        vw: width,
        vh: height
      }
    default:
      return state
  }
}

export default sheet
