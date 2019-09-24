import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'redux'

import { configureStore } from '../configureStore'
import { LigandsViewer } from "../containers/LigandsViewer";
import { IRestMolecule } from '../types'
import { fetchSucceeded, toggleVisibility } from './actions'
import {
  LIGAND_TOGGLE_VISIBILITY,
  LIGANDS_HIDE,
  LIGANDS_SHOW
} from './constants'
import { ILigand } from './index'
import { prepLigand } from './services'

export class LigandsViewerApp {
  container: Element
  store: Store<any>
  listeners4VisibilityToggle: any[] = []

  constructor(container: Element) {
    this.container = container

    this.store = configureStore(this.middleware)
  }

  setLigands(ligands: IRestMolecule[]) {
    this.store.dispatch(fetchSucceeded(ligands.map(prepLigand)))
  }

  toggleVisibility = (id: string) => {
    this.store.dispatch(toggleVisibility(id))
  }

  middleware = (api: any) => {
    return (next: any) => (action: any) => {
      let toggles: any[] = []
      if (action.type === LIGAND_TOGGLE_VISIBILITY) {
        api.getState().ligands.map((ligand: any) => {
          if (ligand.id === action.id) {
            toggles.push({ id: ligand.id, visible: !ligand.visible })
          }
        })
      }
      if (action.type === LIGANDS_SHOW) {
        toggles = api
          .getState()
          .ligands.filter((p: ILigand) => !p.visible)
          .map((p: ILigand) => {
            return { id: p.id, visible: !p.visible }
          })
      }
      if (action.type === LIGANDS_HIDE) {
        toggles = api
          .getState()
          .ligands.filter((p: ILigand) => p.visible)
          .map((p: ILigand) => {
            return { id: p.id, visible: !p.visible }
          })
      }
      if (toggles) {
        this.listeners4VisibilityToggle.forEach((l: any) => l(toggles))
      }
      return next(action)
    }
  }

  subscribeToVisibilityToggle(listener: any) {
    this.listeners4VisibilityToggle.push(listener)
  }

  render() {
    ReactDOM.render(
      <Provider store={this.store}>
        <LigandsViewer />
      </Provider>,
      this.container
    )
  }
}
