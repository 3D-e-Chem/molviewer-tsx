import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from "redux";

import { configureStore } from '../configureStore'
import { ProteinsViewer } from '../containers/ProteinsViewer';
import { IRestMolecule } from "../types";
import { fetchSucceeded, toggleVisibility } from "./actions";
import { PROTEIN_TOGGLE_VISIBILITY, PROTEINS_HIDE, PROTEINS_SHOW } from "./constants";
import { IProtein } from "./index";
import { prepProtein } from "./services";

export class ProteinsViewerApp {
    container: Element;
    store: Store<any>;
    listeners4VisibilityToggle: any[] = [];

    constructor(container: Element) {
        this.container = container;

        this.store = configureStore(this.middleware);
    }

    setProteins(proteins: IRestMolecule[]) {
        this.store.dispatch(fetchSucceeded(proteins.map(prepProtein)));
    }

    toggleVisibility = (id: string) => {
        this.store.dispatch(toggleVisibility(id));
    }

    middleware = (api: any) => {
        return (next: any) => (action: any) => {
            let toggles: any[] = [];
            if (action.type === PROTEIN_TOGGLE_VISIBILITY) {
                api.getState().proteins.map((protein: any) => {
                    if (protein.id === action.id) {
                        toggles.push({ id: protein.id, visible: !protein.visible })
                    }
                })
            }
            if (action.type === PROTEINS_SHOW) {
                toggles = api.getState().proteins
                    .filter((p: IProtein) => !p.visible)
                    .map((p: IProtein) => {
                        return { id: p.id, visible: !p.visible }
                    })
            }
            if (action.type === PROTEINS_HIDE) {
                toggles = api.getState().proteins
                    .filter((p: IProtein) => p.visible)
                    .map((p: IProtein) => {
                        return { id: p.id, visible: !p.visible }
                    })
            }
            if (toggles) {
                this.listeners4VisibilityToggle.forEach((l: any) =>
                    l(toggles)
                )
            }
            return next(action)
        }
    }

    subscribeToVisibilityToggle(listener: any) {
        this.listeners4VisibilityToggle.push(listener);
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