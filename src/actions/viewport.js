export const RESIZE_VIEWPORT = 'RESIZE_VIEWPORT'

export const resizeViewport = (viewport) => ({
  type: RESIZE_VIEWPORT, payload: { viewport }
})
