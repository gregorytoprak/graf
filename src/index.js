import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { resizeViewport } from "./actions/sheet";
import App from "./components/App";
import { persistence } from "./utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const persistedState = persistence.load();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  const currentState = store.getState();
  persistence.save(currentState);
});

const resize = () => {
  store.dispatch(resizeViewport());
};
resize();
window.addEventListener("resize", resize);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
