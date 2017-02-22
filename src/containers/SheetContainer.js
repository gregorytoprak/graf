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
  dims: {
    w: state.getIn(['sheet', 'dims', 'w']),
    h: state.getIn(['sheet', 'dims', 'h'])
  }
})

const mapDispatchToProps = (dispatch) => ({
  pan: (loc) => { dispatch(panSheet(loc)) },
  zoom: (loc, dims) => { dispatch(zoomSheet(loc, dims)) }
})

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet)

export default SheetContainer
