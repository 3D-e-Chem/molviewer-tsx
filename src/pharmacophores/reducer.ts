import { OtherAction, PharmacophoreAction } from './actions';
import * as constants from './constants';
import { IPharmacophore } from './types';

export function reducer(state: IPharmacophore[] = [], action: PharmacophoreAction = OtherAction): IPharmacophore[] {
    switch (action.type) {
        case constants.PHARMACOPHORE_TOGGLE_VISIBILITY:
            return state.map((phar) => {
                if (phar.id === action.id) {
                    return { ...phar, visible: !phar.visible};
                }
                return phar;
            });
        case constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY:
            return state.map((phar) => {
                if (phar.id === action.id) {
                    return { ...phar, proteinVisible: !phar.proteinVisible};
                }
                return phar;
            });
        case constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY:
            return state.map((phar) => {
                if (phar.id === action.id) {
                    return { ...phar, pocketVisible: !phar.pocketVisible};
                }
                return phar;
            });
        case constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY:
            return state.map((phar) => {
                if (phar.id === action.id) {
                    return { ...phar, ligandVisible: !phar.ligandVisible};
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
