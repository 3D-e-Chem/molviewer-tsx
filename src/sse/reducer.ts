import { combineReducers } from 'redux'

import {
  connectedAction,
  IOtherAction,
  IPageLoaded,
  OtherAction
} from './actions'
import { PAGE_LOADED, SERVER_DISCONNECT } from './constants'

type Actions = connectedAction | IPageLoaded

const connected = (state = true, action: Actions = OtherAction): boolean => {
  switch (action.type) {
    case SERVER_DISCONNECT:
      return false
    default:
      return state
  }
}

const currentPage = (
  state = '',
  action: Actions | IOtherAction = OtherAction
): string => {
  switch (action.type) {
    case PAGE_LOADED:
      return action.page
    default:
      return state
  }
}

export interface IState {
  sse: {
    connected: boolean
    currentPage: string
  }
}

export const reducer = combineReducers({
  connected,
  currentPage
})
