import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { viewport } from 'verge'
import reducer from './reducers'
import { resizeViewport } from './actions/sheet'
import App from './components/App'
import './styles.css'

const it = window.localStorage.getItem('graph')
const persistedState = it ? JSON.parse(it) : {}
const store = createStore(reducer, persistedState)

store.subscribe(() => {
  const currentState = store.getState()
  if (currentState.hand.palm === 'empty') {
    window.localStorage.setItem('graph', JSON.stringify(currentState))
  }
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
