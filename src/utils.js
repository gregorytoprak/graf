
const getRawDims = () => {
  const r = document.getElementsByTagName('svg')[0].getBoundingClientRect()
  return {
    x: r.left,
    y: r.top,
    w: r.right - r.left,
    h: r.bottom - r.top
  }
}

export const getLoc = (e, dims) => {
  const rawLoc = { x: e.clientX, y: e.clientY }
  const rawDims = getRawDims()
  const unitLoc = {
    x: (rawLoc.x - rawDims.x) / rawDims.w,
    y: (rawLoc.y - rawDims.y) / rawDims.h
  }
  const loc = {
    x: (unitLoc.x * dims.w) + dims.x,
    y: (unitLoc.y * dims.h) + dims.y
  }
  return loc
}
