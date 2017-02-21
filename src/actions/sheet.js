export const PAN_SHEET = 'PAN_SHEET'
export const ZOOM_SHEET = 'ZOOM_SHEET'

export const panSheet = (loc) => ({
  type: PAN_SHEET, payload: { loc }
})

export const zoomSheet = (loc, s) => ({
  type: ZOOM_SHEET, payload: { loc, s }
})
