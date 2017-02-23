import { connect } from 'react-redux'
import Sheet from '../components/Sheet'
import { panSheet, zoomSheet } from '../actions/sheet'
import { createNode, moveNode } from '../actions/node'
import { emptyHand, panHand } from '../actions/hand'
import { makeId } from '../utils'

const mapStateToProps = (state) => {
  const sheet = state.get('sheet')
  return {
    nodeIds: state.get('nodes').map(node => node.get('id')),
    cx: sheet.get('cx'),
    cy: sheet.get('cy'),
    w: sheet.get('w'),
    h: sheet.get('h'),
    vw: sheet.get('vw'),
    vh: sheet.get('vh'),
    hand: {
      type: state.getIn(['hand', 'type']),
      id: state.getIn(['hand', 'id']),
      loc: {
        x: state.getIn(['hand', 'loc', 'x']),
        y: state.getIn(['hand', 'loc', 'y'])
      }
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  pan: (dx, dy) => { dispatch(panSheet(dx, dy)) },
  zoom: (zoomLoc, zoomFactor) => { dispatch(zoomSheet(zoomLoc, zoomFactor)) },
  node: (cx, cy) => { dispatch(createNode(makeId(), cx, cy)) },
  moveNode: (id, cx, cy) => { dispatch(moveNode(id, cx, cy)) },
  emptyHand: () => { dispatch(emptyHand()) },
  panHand: (loc) => { dispatch(panHand(loc)) }
})

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet)

export default SheetContainer
