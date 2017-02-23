import { connect } from 'react-redux'
import Sheet from '../components/Sheet'
import { panSheet, zoomSheet } from '../actions/sheet'
import { createNode } from '../actions/node'
import { makeId } from '../utils'

const mapStateToProps = (state) => {
  const sheet = state.get('sheet')
  return {
    cx: sheet.get('cx'),
    cy: sheet.get('cy'),
    w: sheet.get('w'),
    h: sheet.get('h'),
    vw: sheet.get('vw'),
    vh: sheet.get('vh'),
    nodeIds: state.get('nodes').map(node => node.get('id'))
  }
}

const mapDispatchToProps = (dispatch) => ({
  pan: (dx, dy) => { dispatch(panSheet(dx, dy)) },
  zoom: (zoomLoc, zoomFactor) => { dispatch(zoomSheet(zoomLoc, zoomFactor)) },
  node: (loc) => { dispatch(createNode(makeId(), loc)) }
})

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet)

export default SheetContainer
