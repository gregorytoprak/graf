import { viewportW, viewportH } from 'verge'

export const PAN_SHEET = 'PAN_SHEET'
export const ZOOM_SHEET = 'ZOOM_SHEET'
export const RESIZE_VIEWPORT = 'RESIZE_VIEWPORT'

export const panSheet = (dx, dy) => ({
  type: PAN_SHEET, payload: { dx, dy }
})

export const zoomSheet = (zoomLoc, zoomFactor) => ({
  type: ZOOM_SHEET, payload: { zoomLoc, zoomFactor }
})

export const resizeViewport = () => ({
  type: RESIZE_VIEWPORT, payload: { vw: viewportW(), vh: viewportH() }
})
