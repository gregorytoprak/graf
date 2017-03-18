import { connect } from "react-redux";
import EdgeHandle from "../components/EdgeHandle";
import { selectEdge, resetEdgeHandle } from "../actions/edge";
import { emptyHand, moveEdgeHandleHand } from "../actions/hand";
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
  resetEdgeHandle: () => {
    dispatch(resetEdgeHandle(id));
  },
  emptyHand: () => {
    dispatch(emptyHand());
  },
  moveEdgeHandleHand: relGrabLoc => {
    dispatch(moveEdgeHandleHand(id, relGrabLoc));
  }
});

const EdgeHandleContainer = connect(mapStateToProps, mapDispatchToProps)(
  EdgeHandle
);

export default EdgeHandleContainer;
