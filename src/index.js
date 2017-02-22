import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { viewport } from 'verge'
import reducer from './reducers'
import { resizeViewport } from './actions/sheet'
import App from './components/App'
import './styles.css'

const store = createStore(reducer)

const resize = () => { store.dispatch(resizeViewport(viewport())) }

resize()
window.addEventListener('resize', resize)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
