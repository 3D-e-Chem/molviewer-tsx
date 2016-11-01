import { OtherAction } from '../actions';
import { LigandAction } from '../actions/ligands';
import {
    LIGANDS_FETCH_SUCCEEDED,
    LIGANDS_HIDE,
    LIGANDS_SHOW,
    LIGAND_TOGGLE_VISIBILITY,
} from '../constants';
import { ILigand } from '../ligand';

export default function ligands(state: ILigand[] = [], action: LigandAction = OtherAction): ILigand[] {
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
        default:
            return state;
    }
}
