import { connect } from 'react-redux'
import Sheet from '../components/Sheet'
import { panSheet, zoomSheet } from '../actions/sheet'

const mapStateToProps = state => ({
  viewport: {
    width: state.getIn(['viewport', 'width']),
    height: state.getIn(['viewport', 'height'])
  },
  loc: {
    x: state.getIn(['sheet', 'loc', 'x']),
    y: state.getIn(['sheet', 'loc', 'y'])
  },
  s: state.getIn(['sheet', 's'])
})

const mapDispatchToProps = (dispatch) => ({
  pan: (loc) => { dispatch(panSheet(loc)) },
  zoom: (loc, s) => { dispatch(zoomSheet(loc, s)) }
})

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet)

export default SheetContainer
