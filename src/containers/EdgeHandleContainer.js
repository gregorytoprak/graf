import { connect } from "react-redux";
import EdgeHandle from "../components/EdgeHandle";
import { resetEdgeHandle, selectEdge } from "../actions/edge";
import { emptyHand, moveEdgeHandleHand } from "../actions/hand";

const mapStateToProps = (state, { id }) => {
  const edge = state.edges.find(ed => ed.id === id);
  const startNode = state.nodes.find(nd => nd.id === edge.startNodeId);
  const endNode = state.nodes.find(nd => nd.id === edge.endNodeId);
  return {
    ...edge,
    startPt: startNode.pt,
    endPt: edge.endNodeId ? endNode.pt : state.hand.handPt
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  resetEdgeHandle: () => {
    dispatch(resetEdgeHandle(id));
  },
  selectEdge: () => {
    dispatch(selectEdge(id));
  },
  emptyHand: () => {
    dispatch(emptyHand());
  },
  moveEdgeHandleHand: (relGrabPt, midPt) => {
    dispatch(moveEdgeHandleHand(id, relGrabPt, midPt));
  }
});

const EdgeHandleContainer = connect(mapStateToProps, mapDispatchToProps)(
  EdgeHandle
);

export default EdgeHandleContainer;
