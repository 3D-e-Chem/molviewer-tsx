import { LigandAction, OtherAction } from './actions';
import {
    LIGAND_PICK_COLOR,
    LIGAND_TOGGLE_VISIBILITY,
    LIGANDS_FETCH_SUCCEEDED,
    LIGANDS_HIDE,
    LIGANDS_HILITE_FETCH_SUCCEEDED,
    LIGANDS_SHOW
} from './constants';
import { ILigand } from './types';

function ligandReducer(state: ILigand, action: LigandAction = OtherAction): ILigand {
    switch (action.type) {
        case LIGAND_PICK_COLOR:
            return { ...state, color: action.color};
        case LIGAND_TOGGLE_VISIBILITY:
            return { ...state, visible: !state.visible};
        default:
           return state;
    }
}

export function reducer(state: ILigand[] = [], action: LigandAction = OtherAction): ILigand[] {
    switch (action.type) {
        case LIGAND_PICK_COLOR:
        case LIGAND_TOGGLE_VISIBILITY:
            return state.map((ligand) => {
                if (ligand.id === action.id) {
                    return ligandReducer(ligand, action);
                }
                return ligand;
            });
        case LIGANDS_SHOW:
            return state.map((ligand) => {
                if (!ligand.visible) {
                    return { ...ligand, visible: !ligand.visible};
                }
                return ligand;
            });
        case LIGANDS_HIDE:
            return state.map((ligand) => {
                if (ligand.visible) {
                    return { ...ligand, visible: !ligand.visible};
                }
                return ligand;
            });
        case LIGANDS_FETCH_SUCCEEDED:
            return action.ligands;
        case LIGANDS_HILITE_FETCH_SUCCEEDED:
            const ids2show = new Set(action.payload);
            return state.map((ligand) => {
                const mustShow = ids2show.has(ligand.id);
                if (ligand.visible !== mustShow) {
                    return { ...ligand, visible: !ligand.visible};
                }
                return ligand;
            });
        default:
            return state;
    }
}
