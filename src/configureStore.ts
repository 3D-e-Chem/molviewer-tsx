import { applyMiddleware, createStore, Middleware } from 'redux'

import { rootReducer } from './rootReducer'

export const configureStore = (middleware: Middleware) =>
  createStore(rootReducer, applyMiddleware(middleware))
