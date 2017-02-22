import { connect } from 'react-redux'
import Sheet from '../components/Sheet'
import { panSheet, zoomSheet } from '../actions/sheet'

const mapStateToProps = state => ({
  viewport: {
    width: state.getIn(['viewport', 'width']),
    height: state.getIn(['viewport', 'height'])
  },
  cx: state.getIn(['sheet', 'cx']),
  cy: state.getIn(['sheet', 'cy']),
  w: state.getIn(['sheet', 'w']),
  h: state.getIn(['sheet', 'h'])
})

const mapDispatchToProps = (dispatch) => ({
  pan: (cx, cy) => { dispatch(panSheet(cx, cy)) },
  zoom: (cx, cy, w, h) => { dispatch(zoomSheet(cx, cy, w, h)) }
})

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet)

export default SheetContainer
