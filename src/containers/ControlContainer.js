import { connect } from "react-redux";
import Control from "../components/Control";
import { selectEdge, resetControl } from "../actions/edge";
import { emptyHand, moveControlHand } from "../actions/hand";

const mapStateToProps = (state, { id }) => {
  const edge = state.edges.find(ed => ed.id === id);
  const startNode = state.nodes.find(nd => nd.id === edge.startNodeId);
  const endNode = state.nodes.find(nd => nd.id === edge.endNodeId);
  return {
    ...edge,
    startLoc: { x: startNode.cx, y: startNode.cy },
    endLoc: edge.complete ? { x: endNode.cx, y: endNode.cy } : null
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  selectEdge: () => {
    dispatch(selectEdge(id));
  },
  resetControl: () => {
    dispatch(resetControl(id));
  },
  emptyHand: () => {
    dispatch(emptyHand());
  },
  moveControlHand: loc => {
    dispatch(moveControlHand(id, loc));
  }
});

const ControlContainer = connect(mapStateToProps, mapDispatchToProps)(Control);

export default ControlContainer;
