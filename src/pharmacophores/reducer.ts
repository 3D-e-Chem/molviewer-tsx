import { OtherAction, PharmacophoreAction } from './actions';
import * as constants from './constants';
import { IPharmacophoreContainer, IProtein } from './types';

function proteinReducer(state: IProtein, action: PharmacophoreAction = OtherAction): IProtein {
    switch (action.type) {
        case constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY:
            return { ...state, visible: !state.visible};
        case constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY:
            return { ...state, pocketVisible: !state.pocketVisible};
        case constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY:
            return { ...state, ligandVisible: !state.ligandVisible};
        default:
            return state;
    }
}

function pharmacophoreReducer(state: IPharmacophoreContainer,
                              action: PharmacophoreAction = OtherAction): IPharmacophoreContainer {
    switch (action.type) {
        case constants.PHARMACOPHORE_TOGGLE_CONTAINER_VISIBILITY:
            return { ...state, visible: !state.visible};
        case constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_VISIBILITY:
            return { ...state, pharmacophore: { ...state.pharmacophore, visible: !state.pharmacophore.visible}};
        case constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY:
        case constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY:
            if (state.protein) {
                return { ...state, protein: proteinReducer(state.protein, action)};
            }
            return state;
        case constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY:
            // ligand can be part of protein complex or as seperate ligand prop in container
            if (state.protein && state.ligand) {
                return {
                    ...state,
                    ligand: { ...state.ligand, visible: !state.ligand.visible},
                    protein: proteinReducer(state.protein, action)
                };
            } else if (state.protein) {
                return {
                    ...state,
                    protein: proteinReducer(state.protein, action)
                };
            } else if (state.ligand) {
                return {
                    ...state,
                    ligand: { ...state.ligand, visible: !state.ligand.visible}
                };
            }
            return state;
        default:
            return state;
    }
}

export function reducer(state: IPharmacophoreContainer[] = [],
                        action: PharmacophoreAction = OtherAction): IPharmacophoreContainer[] {
    switch (action.type) {
        case constants.PHARMACOPHORE_TOGGLE_CONTAINER_VISIBILITY:
        case constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_VISIBILITY:
        case constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY:
        case constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY:
        case constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY:
            return state.map((phar) => {
                if (phar.id === action.id) {
                    return pharmacophoreReducer(phar, action);
                }
                return phar;
            });
        case constants.PHARMACOPHORES_HIDE:
            return state.map((phar) => {
                return { ...phar, visible: false};
            });
        case constants.PHARMACOPHORES_SHOW:
            return state.map((phar) => {
                return { ...phar, visible: true};
            });
        case constants.PHARMACOPHORES_FETCH_SUCCEEDED:
            return action.payload;
        default:
            return state;
    }
}
