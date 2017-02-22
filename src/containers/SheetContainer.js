import { connect } from 'react-redux'
import Sheet from '../components/Sheet'
import { panSheet, zoomSheet } from '../actions/sheet'

const mapStateToProps = state => ({
  viewport: {
    width: state.getIn(['viewport', 'width']),
    height: state.getIn(['viewport', 'height'])
  },
  loc: {
    cx: state.getIn(['sheet', 'loc', 'cx']),
    cy: state.getIn(['sheet', 'loc', 'cy'])
  },
  s: state.getIn(['sheet', 's'])
})

const mapDispatchToProps = (dispatch) => ({
  pan: (loc) => { dispatch(panSheet(loc)) },
  zoom: (loc, s) => { dispatch(zoomSheet(loc, s)) }
})

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet)

export default SheetContainer
