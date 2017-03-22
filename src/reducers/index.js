import { combineReducers } from "redux";
import app from "./app";
import sheet from "./sheet";
import hand from "./hand";
import nodes from "./nodes";
import edges from "./edges";
import axes from "./axes";

const rootReducer = combineReducers({
  app,
  sheet,
  hand,
  nodes,
  edges,
  axes
});

export default rootReducer;
