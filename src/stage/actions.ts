import { IOtherAction, OtherAction } from '../actions'
import { CENTER_STAGE_REQUESTED, CENTER_STAGE_SUCCEEDED } from './constants'

export interface ICenterStage {
  type: CENTER_STAGE_REQUESTED
}

export const centerStage = (): ICenterStage => ({
  type: CENTER_STAGE_REQUESTED
})

export interface ICenterStageSucceeded {
  type: CENTER_STAGE_SUCCEEDED
}

export const centerStageSucceeded = (): ICenterStageSucceeded => ({
  type: CENTER_STAGE_SUCCEEDED
})

export type IStageAction = ICenterStage | ICenterStageSucceeded | IOtherAction
export { IOtherAction, OtherAction }
