import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { viewport } from 'verge'
import reducer from './reducers'
import { resizeViewport } from './actions/sheet'
import App from './components/App'
import { persistence } from './utils'
import './styles.css'

const persistedState = persistence.load()
const store = createStore(reducer, persistedState)

store.subscribe(() => {
  const currentState = store.getState()
  persistence.save(currentState)
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
