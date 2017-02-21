import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import verge from 'verge'
import reducer from './reducers'
import { resizeBrowser } from './actions/browser'
import App from './components/App'
import './styles.css'

const store = createStore(reducer)

const resize = () => { store.dispatch(resizeBrowser({ w: verge.viewportW(), h: verge.viewportH() })) }

resize()
window.addEventListener('resize', resize)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
