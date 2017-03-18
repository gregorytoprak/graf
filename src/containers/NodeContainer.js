import { connect } from "react-redux";
import Node from "../components/Node";
import { deleteNode, selectNode } from "../actions/node";
import { startEdge, completeEdge } from "../actions/edge";
import { emptyHand, moveNodeHand, startEdgeHand } from "../actions/hand";

const mapStateToProps = (state, { id }) => {
  const node = state.nodes.find(nd => nd.id === id);
  return {
    ...node,
    hand: state.hand
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  deleteNode: () => {
    dispatch(deleteNode(id));
  },
  selectNode: () => {
    dispatch(selectNode(id));
  },
  startEdge: () => {
    dispatch(startEdge(id));
  },
  completeEdge: () => {
    dispatch(completeEdge(id));
  },
  emptyHand: () => {
    dispatch(emptyHand());
  },
  moveNodeHand: relGrabPt => {
    dispatch(moveNodeHand(id, relGrabPt));
  },
  startEdgeHand: grabPt => {
    dispatch(startEdgeHand(grabPt));
  }
});

const NodeContainer = connect(mapStateToProps, mapDispatchToProps)(Node);

export default NodeContainer;
