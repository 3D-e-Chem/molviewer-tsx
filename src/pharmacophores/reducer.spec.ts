import * as actions from './actions';
import * as constants from './constants';
import { reducer } from './reducer';
import { IPharmacophore } from './types';

function sampleState(): IPharmacophore[] {
    return [{
        id: 'id1',
        label: 'label1',
        ligand: '...',
        ligandFormat: 'sdf',
        ligandVisible: true,
        pharmacophore: '...',
        pharmacophoreFormat: 'phar',
        pocketVisible: true,
        protein: '...',
        proteinFormat: 'pdb',
        proteinVisible: true,
        visible: true
    }];
}

describe('reducer', () => {
    it('should return the initial state', () => {
        const state = reducer(undefined, actions.OtherAction);

        expect(state).toEqual([]);
    });

    describe('other action', () => {
        it('should return same state', () => {
            const state = sampleState();
            const action = actions.OtherAction;

            const newState = reducer(state, action);

            expect(newState).toEqual(state);
        });
    });

    describe(constants.PHARMACOPHORE_TOGGLE_VISIBILITY, () => {
        it('should set pharmacophore visible to !visible', () => {
            const state = sampleState();
            const action = actions.toggleVisibility('id1');

            const newState = reducer(state, action);

            const expected = sampleState();
            expected[0].visible = false;
            expect(newState).toEqual(expected);
        });
    });

    describe(constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY, () => {
        it('should set protein visible to !visible', () => {
            const state = sampleState();
            const action = actions.toggleProteinVisibility('id1');

            const newState = reducer(state, action);

            const expected = sampleState();
            expected[0].proteinVisible = false;
            expect(newState).toEqual(expected);
        });
    });

    describe(constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY, () => {
        it('should set pocket visible to !visible', () => {
            const state = sampleState();
            const action = actions.togglePocketVisibility('id1');

            const newState = reducer(state, action);

            const expected = sampleState();
            expected[0].pocketVisible = false;
            expect(newState).toEqual(expected);
        });
    });

    describe(constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY, () => {
        it('should set ligand visible to !visible', () => {
            const state = sampleState();
            const action = actions.toggleLigandVisibility('id1');

            const newState = reducer(state, action);

            const expected = sampleState();
            expected[0].ligandVisible = false;
            expect(newState).toEqual(expected);
        });
    });

    describe(constants.PHARMACOPHORES_HIDE, () => {
        it('should set all visible to false', () => {
            const state = sampleState();
            const action = actions.hideAll();

            const newState = reducer(state, action);

            const expected = sampleState();
            expected[0].visible = false;
            expect(newState).toEqual(expected);
        });
    });

    describe(constants.PHARMACOPHORES_SHOW, () => {
        it('should set all visible to show', () => {
            const state = sampleState();
            const action = actions.showAll();

            const newState = reducer(state, action);

            const expected = sampleState();
            expected[0].visible = true;
            expect(newState).toEqual(expected);
        });
    });

    describe(constants.PHARMACOPHORES_FETCH_SUCCEEDED, () => {
        it('should return the pharmacophores of the action', () => {
            const fetched = sampleState();
            const action = actions.fetchSucceeded(fetched);

            const state = reducer(undefined, action);

            expect(state).toEqual(fetched);
        });
    });
});