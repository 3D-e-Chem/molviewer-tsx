import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { Routes } from './components/Routes'
import { configureStore } from './configureStore'
import { ServerListener } from './sse'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const store = configureStore()

const serverlistener = new ServerListener(store.dispatch)
serverlistener.listen()

const container = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  container
)
