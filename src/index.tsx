import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from "redux";

import { configureStore } from './configureStore'

import { ProteinsViewer } from './containers/ProteinsViewer';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { fetchSucceeded } from "./proteins/actions";
import { prepProtein } from "./proteins/services";
import { IRestMolecule } from "./types";

export class ProteinsViewerApp {
  container: Element;
  store: Store<any>;

  constructor(container: Element) {
    this.container = container;
    this.store = configureStore();
  }

  setProteins(proteins: IRestMolecule[]) {
    this.store.dispatch(fetchSucceeded(proteins.map(prepProtein)));
  }

  render() {
    ReactDOM.render(
      <Provider store={this.store}>
        <ProteinsViewer />
      </Provider>,
      this.container
    );
  }
}
