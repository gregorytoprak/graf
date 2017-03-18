import { TOGGLE_WELCOME, CLEAR } from "../actions/other";

const initialState = {
  welcomeVisible: true
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_WELCOME:
      return {
        ...state,
        welcomeVisible: !state.welcomeVisible
      };
    case CLEAR:
      return {
        ...state,
        welcomeVisible: false
      };
    default:
      return state;
  }
};

export default app;
