import { OtherAction, ProteinAction } from './actions';
import {
    PROTEIN_TOGGLE_HETVISIBILITY,
    PROTEIN_TOGGLE_POCKETVISIBILITY,
    PROTEIN_TOGGLE_VISIBILITY,
    PROTEINS_FETCH_SUCCEEDED,
    PROTEINS_HIDE,
    PROTEINS_SHOW
} from './constants';
import { IProtein } from './types';

export function reducer(state: IProtein[] = [], action: ProteinAction = OtherAction): IProtein[] {
    switch (action.type) {
        case PROTEIN_TOGGLE_VISIBILITY:
            return state.map(protein => {
                if (protein.id === action.id) {
                    // TODO when object spread is avialable in TypeScript use:
                    // return { ...protein, visible: !protein.visible};
                    return Object.assign({}, protein, {
                        visible: !protein.visible
                    });
                }
                return protein;
            });
        case PROTEIN_TOGGLE_HETVISIBILITY:
            return state.map(protein => {
                if (protein.id === action.id) {
                    // TODO when object spread is avialable in TypeScript use:
                    // return { ...protein, hetVisible: !protein.hetVisible};
                    return Object.assign({}, protein, {
                        hetVisible: !protein.hetVisible
                    });
                }
                return protein;
            });
        case PROTEIN_TOGGLE_POCKETVISIBILITY:
            return state.map(protein => {
                if (protein.id === action.id) {
                    // TODO when object spread is avialable in TypeScript use:
                    // return { ...protein, pocketVisible: !protein.pocketVisible};
                    return Object.assign({}, protein, {
                        pocketVisible: !protein.pocketVisible
                    });
                }
                return protein;
            });
        case PROTEINS_SHOW:
            return state.map(protein => {
                if (!protein.visible) {
                    // TODO when object spread is avialable in TypeScript use:
                    // return { ...protein, visible: !protein.visible};
                    return Object.assign({}, protein, {
                        visible: !protein.visible
                    });
                }
                return protein;
            });
        case PROTEINS_HIDE:
            return state.map(protein => {
                if (protein.visible) {
                    // TODO when object spread is avialable in TypeScript use:
                    // return { ...protein, visible: !protein.visible};
                    return Object.assign({}, protein, {
                        visible: !protein.visible
                    });
                }
                return protein;
            });
        case PROTEINS_FETCH_SUCCEEDED:
            return action.proteins;
        default:
            return state;
    }
}
