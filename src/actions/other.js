export const TOGGLE_WELCOME = "TOGGLE_WELCOME";
export const FULL_SELECT = "FULL_SELECT";
export const SET_COLOR = "SET_COLOR";
export const CLEAR = "CLEAR";

export const toggleWelcome = () => ({
  type: TOGGLE_WELCOME,
  payload: {}
});

export const fullSelect = selectStatus => ({
  type: FULL_SELECT,
  payload: { selectStatus }
});

export const setColor = newColor => ({
  type: SET_COLOR,
  payload: { newColor }
});

export const clear = () => ({
  type: CLEAR,
  payload: {}
});
