import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'redux'

import { configureStore } from './configureStore'
import { LigandsAndProteinsViewer } from './containers/LigandsAndProteinsViewer'
import {
  fetchSucceeded as ligandsFetchSucceeded,
  toggleVisibility as toggleLigandVisibility
} from './ligands/actions'
import {
  LIGAND_TOGGLE_VISIBILITY,
  LIGANDS_HIDE,
  LIGANDS_SHOW
} from './ligands/constants'
import { ILigand } from './ligands/index'
import { prepLigand } from './ligands/services'
import {
  fetchSucceeded as proteinsFetchSucceeded,
  toggleVisibility as toggleProteinVisibility
} from './proteins/actions'
import {
  PROTEIN_TOGGLE_VISIBILITY,
  PROTEINS_HIDE,
  PROTEINS_SHOW
} from './proteins/constants'
import { IProtein } from './proteins/index'
import { prepProtein } from './proteins/services'
import { IRestMolecule } from './types'

export class LigandsAndProteinsViewerApp {
  container: Element
  store: Store<any>
  listeners4LigandVisibilityToggle: any[] = []
  listeners4ProteinVisibilityToggle: any[] = []

  constructor(container: Element) {
    this.container = container

    this.store = configureStore(this.middleware)
  }

  setLigands(ligands: IRestMolecule[]) {
    this.store.dispatch(ligandsFetchSucceeded(ligands.map(prepLigand)))
  }

  setProteins(proteins: IRestMolecule[]) {
    this.store.dispatch(proteinsFetchSucceeded(proteins.map(prepProtein)))
  }

  toggleLigandVisibility = (id: string) => {
    this.store.dispatch(toggleLigandVisibility(id))
  }

  toggleProteinVisibility = (id: string) => {
    this.store.dispatch(toggleProteinVisibility(id))
  }

  middleware = (api: any) => {
    return (next: any) => (action: any) => {
      let ligtoggles: any[] = []
      if (action.type === LIGAND_TOGGLE_VISIBILITY) {
        api.getState().ligands.map((ligand: any) => {
          if (ligand.id === action.id) {
            ligtoggles.push({ id: ligand.id, visible: !ligand.visible })
          }
        })
      }
      if (action.type === LIGANDS_SHOW) {
        ligtoggles = api
          .getState()
          .ligands.filter((p: ILigand) => !p.visible)
          .map((p: ILigand) => {
            return { id: p.id, visible: !p.visible }
          })
      }
      if (action.type === LIGANDS_HIDE) {
        ligtoggles = api
          .getState()
          .ligands.filter((p: ILigand) => p.visible)
          .map((p: ILigand) => {
            return { id: p.id, visible: !p.visible }
          })
      }
      if (ligtoggles) {
        this.listeners4LigandVisibilityToggle.forEach((l: any) => l(ligtoggles))
      }
      let prottoggles: any[] = []
      if (action.type === PROTEIN_TOGGLE_VISIBILITY) {
        api.getState().proteins.map((protein: any) => {
          if (protein.id === action.id) {
            prottoggles.push({ id: protein.id, visible: !protein.visible })
          }
        })
      }
      if (action.type === PROTEINS_SHOW) {
        prottoggles = api
          .getState()
          .proteins.filter((p: IProtein) => !p.visible)
          .map((p: IProtein) => {
            return { id: p.id, visible: !p.visible }
          })
      }
      if (action.type === PROTEINS_HIDE) {
        prottoggles = api
          .getState()
          .proteins.filter((p: IProtein) => p.visible)
          .map((p: IProtein) => {
            return { id: p.id, visible: !p.visible }
          })
      }
      if (prottoggles) {
        this.listeners4ProteinVisibilityToggle.forEach((l: any) =>
          l(prottoggles)
        )
      }
      return next(action)
    }
  }

  subscribeToLigandVisibilityToggle(listener: any) {
    this.listeners4LigandVisibilityToggle.push(listener)
  }

  subscribeToProteinVisibilityToggle(listener: any) {
    this.listeners4ProteinVisibilityToggle.push(listener)
  }

  render() {
    ReactDOM.render(
      <Provider store={this.store}>
        <LigandsAndProteinsViewer />
      </Provider>,
      this.container
    )
  }
}
