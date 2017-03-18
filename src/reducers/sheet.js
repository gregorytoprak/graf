import { PAN_SHEET, ZOOM_SHEET, RESIZE_VIEWPORT } from "../actions/sheet";
import { CLEAR } from "../actions/other";
import { vec } from "../utils";

const initialState = {
  center: [0, 0],
  dims: [10, 10],
  vdims: [500, 500]
};

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case PAN_SHEET:
      const { shift } = action.payload;
      return {
        ...state,
        center: vec.add(state.center, shift)
      };
    case ZOOM_SHEET:
      const { zoomPt, zoomFactor } = action.payload;
      return {
        ...state,
        center: vec.add(
          vec.scl(zoomFactor, state.center),
          vec.scl(1 - zoomFactor, zoomPt)
        ),
        dims: vec.scl(zoomFactor, state.dims)
      };
    case RESIZE_VIEWPORT:
      const { vdimsNew } = action.payload;
      return {
        ...state,
        // Keeping the 'scale' of the screen means maintaining dims / vdims ratio
        dims: vec.prd(vdimsNew, vec.div(state.dims, state.vdims)),
        vdims: vdimsNew
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default sheet;
