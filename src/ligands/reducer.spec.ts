import * as actions from './actions';
import { reducer } from './reducer';
import { ILigand } from './types';

function sampleState(): ILigand[] {
    return [{
        id: 'id1',
        label: 'label1',
        visible: true,
        format: 'sdf',
        data: '...'
    }, {
        id: 'id2',
        label: 'label2',
        visible: false,
        format: 'sdf',
        data: '...'
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

    describe('toggle visibility action of a ligand', () => {
        it('should set visible to !visible', () => {
            const state = sampleState();
            const action = actions.toggleVisibility('id1');

            const newState = reducer(state, action);

            const expected = [{
                id: 'id1',
                label: 'label1',
                visible: false,
                format: 'sdf',
                data: '...'
            }, {
                id: 'id2',
                label: 'label2',
                visible: false,
                format: 'sdf',
                data: '...'
            }];
            expect(newState).toEqual(expected);
        });
    });
});
