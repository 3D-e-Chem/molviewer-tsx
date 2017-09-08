import { combineReducers } from 'redux'

import { IAnonymousProtein } from '../proteins'
import { OtherAction, PharmacophoreAction } from './actions'
import * as constants from './constants'
import {
  IPharmacophore,
  IPharmacophoreContainer,
  IPharmacophoreFunctionalType,
  pharmacophoreFunctionalTypes
} from './types'

function proteinReducer(
  state: IAnonymousProtein,
  action: PharmacophoreAction = OtherAction
): IAnonymousProtein {
  switch (action.type) {
    case constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY:
      return { ...state, proteinVisible: !state.proteinVisible }
    case constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY:
      return { ...state, pocketVisible: !state.pocketVisible }
    case constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY:
      return { ...state, hetVisible: !state.hetVisible }
    default:
      return state
  }
}

function pharmacophoreReducer(
  state: IPharmacophore,
  action: PharmacophoreAction = OtherAction
): IPharmacophore {
  switch (action.type) {
    case constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_VISIBILITY:
      return { ...state, visible: !state.visible }
    case constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_OPACITY:
      return { ...state, solid: !state.solid }
    default:
      return state
  }
}

function pharmacophoreContainerReducer(
  state: IPharmacophoreContainer,
  action: PharmacophoreAction = OtherAction
): IPharmacophoreContainer {
  switch (action.type) {
    case constants.PHARMACOPHORE_TOGGLE_CONTAINER_VISIBILITY:
      return { ...state, visible: !state.visible }
    case constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_VISIBILITY:
    case constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_OPACITY:
      return {
        ...state,
        pharmacophore: pharmacophoreReducer(state.pharmacophore, action)
      }
    case constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY:
    case constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY:
      if (state.protein) {
        return {
          ...state,
          protein: proteinReducer(state.protein, action)
        }
      }
      return state
    case constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY:
      // ligand can be part of protein complex or as seperate ligand prop in container
      if (state.protein && state.ligand) {
        return {
          ...state,
          ligand: { ...state.ligand, visible: !state.ligand.visible },
          protein: proteinReducer(state.protein, action)
        }
      } else if (state.protein) {
        return {
          ...state,
          protein: proteinReducer(state.protein, action)
        }
      } else if (state.ligand) {
        return {
          ...state,
          ligand: { ...state.ligand, visible: !state.ligand.visible }
        }
      }
      return state
    default:
      return state
  }
}

export function pharmacophoresReducer(
  state: IPharmacophoreContainer[] = [],
  action: PharmacophoreAction = OtherAction
): IPharmacophoreContainer[] {
  switch (action.type) {
    case constants.PHARMACOPHORE_TOGGLE_CONTAINER_VISIBILITY:
    case constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_VISIBILITY:
    case constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_OPACITY:
    case constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY:
    case constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY:
    case constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY:
      return state.map(phar => {
        if (phar.id === action.id) {
          return pharmacophoreContainerReducer(phar, action)
        }
        return phar
      })
    case constants.PHARMACOPHORES_HIDE:
      return state.map(phar => {
        return { ...phar, visible: false }
      })
    case constants.PHARMACOPHORES_SHOW:
      return state.map(phar => {
        return { ...phar, visible: true }
      })
    case constants.PHARMACOPHORES_FETCH_SUCCEEDED:
      return action.payload
    case constants.PHARMACOPHORES_HILITE_FETCH_SUCCEEDED:
      return state.map(phar => {
        const mustShow = action.payload.indexOf(phar.id) > -1
        if (phar.visible !== mustShow) {
          return { ...phar, visible: !phar.visible }
        }
        return phar
      })
    default:
      return state
  }
}

function typesReducer(
  state: IPharmacophoreFunctionalType[] = pharmacophoreFunctionalTypes,
  action: PharmacophoreAction = OtherAction
): IPharmacophoreFunctionalType[] {
  switch (action.type) {
    case constants.PHARMACOPHORE_TOGGLE_TYPE:
      return state.map(t => {
        if (t.label === action.label) {
          return { ...t, checked: !t.checked }
        }
        return t
      })
    default:
      return state
  }
}

export const reducer = combineReducers({
  items: pharmacophoresReducer,
  types: typesReducer
})
