import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import { fullSelect } from '../actions/meta'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  fullSelect: (selected) => { dispatch(fullSelect(selected)) }
})

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
