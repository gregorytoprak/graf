import { viewportW, viewportH } from "verge";

export const PAN_SHEET = "PAN_SHEET";
export const ZOOM_SHEET = "ZOOM_SHEET";
export const RESIZE_VIEWPORT = "RESIZE_VIEWPORT";

export const panSheet = newCenter => ({
  type: PAN_SHEET,
  payload: { newCenter }
});

export const zoomSheet = (zoomLoc, zoomFactor) => ({
  type: ZOOM_SHEET,
  payload: { zoomLoc, zoomFactor }
});

export const resizeViewport = () => ({
  type: RESIZE_VIEWPORT,
  payload: { vdimsNew: [viewportW(), viewportH()] }
});
