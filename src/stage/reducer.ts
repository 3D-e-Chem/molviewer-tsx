import { combineReducers } from 'redux'

import { IStageAction, OtherAction } from './actions'
import { CENTER_STAGE_REQUESTED, CENTER_STAGE_SUCCEEDED } from './constants'

const center = (
  state: boolean = false,
  action: IStageAction = OtherAction
): boolean => {
  switch (action.type) {
    case CENTER_STAGE_REQUESTED:
      return true
    case CENTER_STAGE_SUCCEEDED:
      return false
    default:
      return state
  }
}

export interface IState {
  stage: {
    center: boolean
  }
}

export const reducer = combineReducers({ center })
