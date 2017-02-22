export const PAN_SHEET = 'PAN_SHEET'
export const ZOOM_SHEET = 'ZOOM_SHEET'
export const RESIZE_VIEWPORT = 'RESIZE_VIEWPORT'

export const panSheet = (cx, cy) => ({
  type: PAN_SHEET, payload: { cx, cy }
})

export const zoomSheet = (cx, cy, w, h) => ({
  type: ZOOM_SHEET, payload: { cx, cy, w, h }
})

export const resizeViewport = (viewport) => ({
  type: RESIZE_VIEWPORT, payload: { viewport }
})
