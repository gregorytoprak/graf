import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { viewport } from 'verge'
import Cookies from 'js-cookie'
import reducer from './reducers'
import { resizeViewport } from './actions/sheet'
import App from './components/App'
import './styles.css'

const it = Cookies.get('graph')
const persistedState = it ? JSON.parse(it) : {}
const store = createStore(reducer, persistedState)

store.subscribe(() => {
  const currentState = store.getState()
  Cookies.set('graph', JSON.stringify(currentState))
})

const resize = () => { store.dispatch(resizeViewport(viewport())) }

resize()
window.addEventListener('resize', resize)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
