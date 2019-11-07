import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'redux'

import { configureStore } from '../configureStore'
import { PharmacophoresViewer } from '../containers/PharmacophoresViewer'
import { fetchSucceeded, toggleContainerVisibility } from './actions'
import {
  PHARMACOPHORE_TOGGLE_CONTAINER_VISIBILITY,
  PHARMACOPHORES_HIDE,
  PHARMACOPHORES_SHOW
} from './constants'
import { prepPharmacophore } from './services'
import { IPharmacophoreContainer, IRestPharmacophoreContainer } from './types'

export class PharmacophoresViewerApp {
  container: Element
  store: Store<any>
  listeners4VisibilityToggle: any[] = []

  constructor(container: Element) {
    this.container = container

    this.store = configureStore(this.middleware)
  }

  setPharmacophores(pharmacophores: IRestPharmacophoreContainer[]) {
    this.store.dispatch(fetchSucceeded(pharmacophores.map(prepPharmacophore)))
  }

  toggleVisibility = (id: string) => {
    this.store.dispatch(toggleContainerVisibility(id))
  }

  middleware = (api: any) => {
    return (next: any) => (action: any) => {
      let toggles: any[] = []
      if (action.type === PHARMACOPHORE_TOGGLE_CONTAINER_VISIBILITY) {
        api.getState().pharmacophores.items.map((p: any) => {
          if (p.id === action.id) {
            toggles.push({ id: p.id, visible: !p.visible })
          }
        })
      }
      if (action.type === PHARMACOPHORES_SHOW) {
        toggles = api
          .getState()
          .pharmacophores.items.filter((p: IPharmacophoreContainer) => !p.visible)
          .map((p: IPharmacophoreContainer) => {
            return { id: p.id, visible: !p.visible }
          })
      }
      if (action.type === PHARMACOPHORES_HIDE) {
        toggles = api
          .getState()
          .pharmacophores.items.filter((p: IPharmacophoreContainer) => p.visible)
          .map((p: IPharmacophoreContainer) => {
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
        <PharmacophoresViewer />
      </Provider>,
      this.container
    )
  }
}
