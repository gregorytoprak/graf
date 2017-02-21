import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { viewport } from 'verge'
import reducer from './reducers'
import { resizeBrowser } from './actions/browser'
import App from './components/App'
import './styles.css'

const store = createStore(reducer)

const resize = () => {
  const dims = viewport()
  store.dispatch(resizeBrowser(dims))
}

resize()
window.addEventListener('resize', resize)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
