export const CLEAR = "CLEAR";
export const FULL_SELECT = "FULL_SELECT";
export const RESET_COLORS = "RESET_COLORS";
export const SET_COLOR = "SET_COLOR";

export const clear = () => ({
  type: CLEAR,
  payload: {}
});

export const fullSelect = selected => ({
  type: FULL_SELECT,
  payload: { selected }
});

export const resetColors = () => ({
  type: RESET_COLORS,
  payload: {}
});

export const setColor = color => ({
  type: SET_COLOR,
  payload: { color }
});
