import { OtherAction } from '../actions';
import { LigandAction } from '../actions/ligands';
import {
    LIGAND_TOGGLE_VISIBILITY,
    LIGANDS_FETCH_SUCCEEDED,
    LIGANDS_HIDE,
    LIGANDS_HILITE_FETCH_SUCCEEDED,
    LIGANDS_SHOW,
} from '../constants';
import { ILigand } from '../ligand';

export function ligands(state: ILigand[] = [], action: LigandAction = OtherAction): ILigand[] {
    switch (action.type) {
        case LIGAND_TOGGLE_VISIBILITY:
            return state.map(ligand => {
                if (ligand.id === action.id) {
                    // TODO when object spread is avialable in TypeScript use:
                    // return { ...ligand, visible: !ligand.visible};
                    return Object.assign({}, ligand, {
                        visible: !ligand.visible,
                    });
                }
                return ligand;
            });
        case LIGANDS_SHOW:
            return state.map(ligand => {
                if (!ligand.visible) {
                    // TODO when object spread is avialable in TypeScript use:
                    // return { ...ligand, visible: !ligand.visible};
                    return Object.assign({}, ligand, {
                        visible: !ligand.visible,
                    });
                }
                return ligand;
            });
        case LIGANDS_HIDE:
            return state.map(ligand => {
                if (ligand.visible) {
                    // TODO when object spread is avialable in TypeScript use:
                    // return { ...ligand, visible: !ligand.visible};
                    return Object.assign({}, ligand, {
                        visible: !ligand.visible,
                    });
                }
                return ligand;
            });
        case LIGANDS_FETCH_SUCCEEDED:
            return action.ligands;
        case LIGANDS_HILITE_FETCH_SUCCEEDED:
            const ids2show = new Set(action.highlightedLigands);
            return state.map(ligand => {
                const mustShow = ids2show.has(ligand.id);
                if (ligand.visible !== mustShow) {
                    return Object.assign({}, ligand, {
                        visible: !ligand.visible,
                    });
                }
                return ligand;
            });
        default:
            return state;
    }
}
