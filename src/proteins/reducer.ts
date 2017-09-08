import { OtherAction, ProteinAction } from './actions'
import {
  PROTEIN_TOGGLE_HETVISIBILITY,
  PROTEIN_TOGGLE_POCKETVISIBILITY,
  PROTEIN_TOGGLE_PROTEINVISIBILITY,
  PROTEIN_TOGGLE_VISIBILITY,
  PROTEINS_FETCH_SUCCEEDED,
  PROTEINS_HIDE,
  PROTEINS_SHOW
} from './constants'
import { IProtein } from './types'

function proteinReducer(
  state: IProtein,
  action: ProteinAction = OtherAction
): IProtein {
  let visible: boolean
  switch (action.type) {
    case PROTEIN_TOGGLE_VISIBILITY:
      return toggleProteinVisibility(state)
    case PROTEIN_TOGGLE_HETVISIBILITY:
      visible = !state.hetVisible || state.pocketVisible || state.proteinVisible
      return { ...state, hetVisible: !state.hetVisible, visible }
    case PROTEIN_TOGGLE_POCKETVISIBILITY:
      visible = state.hetVisible || !state.pocketVisible || state.proteinVisible
      return { ...state, pocketVisible: !state.pocketVisible, visible }
    case PROTEIN_TOGGLE_PROTEINVISIBILITY:
      visible = state.hetVisible || state.pocketVisible || !state.proteinVisible
      return { ...state, proteinVisible: !state.proteinVisible, visible }
    default:
      return state
  }
}

function toggleProteinVisibility(state: IProtein): IProtein {
  const anyChildrenVisible =
    state.hetVisible || state.pocketVisible || state.proteinVisible
  if (!state.visible && !anyChildrenVisible) {
    return {
      ...state,
      hetVisible: state.hasHetero,
      pocketVisible: state.hasHetero,
      proteinVisible: true,
      visible: !state.visible
    }
  }
  return { ...state, visible: !state.visible }
}

export function reducer(
  state: IProtein[] = [],
  action: ProteinAction = OtherAction
): IProtein[] {
  switch (action.type) {
    case PROTEIN_TOGGLE_VISIBILITY:
    case PROTEIN_TOGGLE_HETVISIBILITY:
    case PROTEIN_TOGGLE_POCKETVISIBILITY:
    case PROTEIN_TOGGLE_PROTEINVISIBILITY:
      return state.map(protein => {
        if (protein.id === action.id) {
          return proteinReducer(protein, action)
        }
        return protein
      })
    case PROTEINS_SHOW:
      return state.map(protein => {
        if (!protein.visible) {
          return { ...protein, visible: !protein.visible }
        }
        return protein
      })
    case PROTEINS_HIDE:
      return state.map(protein => {
        if (protein.visible) {
          return { ...protein, visible: !protein.visible }
        }
        return protein
      })
    case PROTEINS_FETCH_SUCCEEDED:
      return action.proteins
    default:
      return state
  }
}
