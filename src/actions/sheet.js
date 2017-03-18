import { viewportW, viewportH } from "verge";

export const PAN_SHEET = "PAN_SHEET";
export const ZOOM_SHEET = "ZOOM_SHEET";
export const RESIZE_VIEWPORT = "RESIZE_VIEWPORT";

export const panSheet = shift => ({
  type: PAN_SHEET,
  payload: { shift }
});

export const zoomSheet = (zoomPt, zoomFactor) => ({
  type: ZOOM_SHEET,
  payload: { zoomPt, zoomFactor }
});

export const resizeViewport = () => ({
  type: RESIZE_VIEWPORT,
  payload: { vdimsNew: [viewportW(), viewportH()] }
});
