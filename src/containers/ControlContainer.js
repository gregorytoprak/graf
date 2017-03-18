import { connect } from "react-redux";
import Control from "../components/Control";
import { selectEdge, resetControl } from "../actions/edge";
import { emptyHand, moveControlHand } from "../actions/hand";
import { vec } from "../utils";

const mapStateToProps = (state, { id }) => {
  const edge = state.edges.find(ed => ed.id === id);
  const startNode = state.nodes.find(nd => nd.id === edge.startNodeId);
  const endNode = state.nodes.find(nd => nd.id === edge.endNodeId);
  const midPt = edge.endNodeId
    ? vec.scl(1 / 2, vec.add(startNode.nodePt, endNode.nodePt))
    : startNode.nodePt;
  return { ...edge, midPt };
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
  moveControlHand: relGrabLoc => {
    dispatch(moveControlHand(id, relGrabLoc));
  }
});

const ControlContainer = connect(mapStateToProps, mapDispatchToProps)(Control);

export default ControlContainer;
