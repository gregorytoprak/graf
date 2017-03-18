import { CLEAR } from "../actions/meta";
import { PAN_SHEET, ZOOM_SHEET, RESIZE_VIEWPORT } from "../actions/sheet";
import { vec } from "../utils";

const initialState = {
  center: [0, 0],
  dims: [10, 10],
  vdims: [500, 500]
};

const sheet = (state = initialState, action) => {
  const { center, dims, vdims } = state;
  switch (action.type) {
    case PAN_SHEET:
      const { newCenter } = action.payload;
      return {
        ...state,
        center: newCenter
      };
    case ZOOM_SHEET:
      const { zoomLoc, zoomFactor } = action.payload;
      return {
        ...state,
        center: vec.add(
          vec.scl(zoomFactor, center),
          vec.scl(1 - zoomFactor, zoomLoc)
        ),
        dims: vec.scl(zoomFactor, dims)
      };
    case RESIZE_VIEWPORT:
      const { vdimsNew } = action.payload;
      return {
        ...state,
        // Keeping the 'scale' of the screen means maintaining dims / vdims ratio
        dims: vec.prd(vdimsNew, vec.div(dims, vdims)),
        vdims: vdimsNew
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default sheet;
