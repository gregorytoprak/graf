export const RESIZE_BROWSER = 'RESIZE_BROWSER'

export const resizeBrowser = (dims) => ({
  type: RESIZE_BROWSER, payload: { dims }
})
