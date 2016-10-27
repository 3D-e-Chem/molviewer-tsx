import { OtherAction } from '../actions';
import { ProteinAction } from '../actions/proteins';
import { PROTEINS_FETCH_SUCCEEDED, PROTEIN_TOGGLE_HETVISIBILITY, PROTEIN_TOGGLE_VISIBILITY } from '../constants';
import { IProtein } from '../protein';

export default function proteins(state: IProtein[] = [], action: ProteinAction = OtherAction): IProtein[] {
    switch (action.type) {
        case PROTEIN_TOGGLE_VISIBILITY:
            return state.map(protein => {
                if (protein.id === action.id) {
                    // TODO when object spread is avialable in TypeScript use:
                    // return { ...protein, visible: !protein.visible};
                    return Object.assign({}, protein, {
                        visible: !protein.visible,
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
                        hetVisible: !protein.hetVisible,
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
