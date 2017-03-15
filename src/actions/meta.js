export const CLEAR = 'CLEAR'
export const FULL_SELECT = 'FULL_SELECT'

export const clear = () => ({
  type: CLEAR, payload: {}
})

export const fullSelect = (selected) => ({
  type: FULL_SELECT, payload: { selected }
})
