import { connect } from 'react-redux'
import Sheet from '../components/Sheet'
import { panSheet, zoomSheet } from '../actions/sheet'

const mapStateToProps = state => ({
  dims: {
    x: state.getIn(['browser', 'x']),
    y: state.getIn(['browser', 'y']),
    w: state.getIn(['browser', 'w']),
    h: state.getIn(['browser', 'h'])
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
