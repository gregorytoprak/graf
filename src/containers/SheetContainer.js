import { connect } from 'react-redux'
import Sheet from '../components/Sheet'
import { panSheet, zoomSheet } from '../actions/sheet'

const mapStateToProps = state => ({
  cx: state.getIn(['sheet', 'cx']),
  cy: state.getIn(['sheet', 'cy']),
  w: state.getIn(['sheet', 'w']),
  h: state.getIn(['sheet', 'h']),
  vw: state.getIn(['sheet', 'vw']),
  vh: state.getIn(['sheet', 'vh'])
})

const mapDispatchToProps = (dispatch) => ({
  pan: (dx, dy) => { dispatch(panSheet(dx, dy)) },
  zoom: (zoomLoc, zoomFactor) => { dispatch(zoomSheet(zoomLoc, zoomFactor)) }
})

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet)

export default SheetContainer
