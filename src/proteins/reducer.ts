import { OtherAction, PocketAction, ProteinAction } from './actions';
import {
    PROTEIN_TOGGLE_HETVISIBILITY,
    PROTEIN_TOGGLE_POCKETVISIBILITY,
    PROTEIN_TOGGLE_VISIBILITY,
    PROTEINS_ADJUST_POCKETRADIUS,
    PROTEINS_FETCH_SUCCEEDED,
    PROTEINS_HIDE,
    PROTEINS_SHOW
} from './constants';
import { IProtein } from './types';

export function pocketRadius(state: number = 5.0, action: PocketAction = OtherAction): number {
    switch (action.type) {
        case PROTEINS_ADJUST_POCKETRADIUS:
            return action.radius;
        default:
            return state;
    }
}

export function proteins(state: IProtein[] = [], action: ProteinAction = OtherAction): IProtein[] {
    switch (action.type) {
        case PROTEIN_TOGGLE_VISIBILITY:
            return state.map((protein) => {
                if (protein.id === action.id) {
                    return { ...protein, visible: !protein.visible};
                }
                return protein;
            });
        case PROTEIN_TOGGLE_HETVISIBILITY:
            return state.map((protein) => {
                if (protein.id === action.id) {
                    return { ...protein, hetVisible: !protein.hetVisible};
                }
                return protein;
            });
        case PROTEIN_TOGGLE_POCKETVISIBILITY:
            return state.map((protein) => {
                if (protein.id === action.id) {
                    return { ...protein, pocketVisible: !protein.pocketVisible};
                }
                return protein;
            });
        case PROTEINS_SHOW:
            return state.map((protein) => {
                if (!protein.visible) {
                    return { ...protein, visible: !protein.visible};
                }
                return protein;
            });
        case PROTEINS_HIDE:
            return state.map((protein) => {
                if (protein.visible) {
                    return { ...protein, visible: !protein.visible};
                }
                return protein;
            });
        case PROTEINS_FETCH_SUCCEEDED:
            return action.proteins;
        default:
            return state;
    }
}
