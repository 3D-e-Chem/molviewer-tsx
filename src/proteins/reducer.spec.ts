import * as actions from './actions';
import { reducer } from './reducer';
import { IProtein } from './types';

function sampleState(): IProtein[] {
    return [{
        data: '...',
        format: 'sdf',
        hasHetero: true,
        hetVisible: true,
        id: 'id1',
        label: 'label1',
        pocketVisible: true,
        proteinVisible: true,
        visible: true
    }, {
        data: '...',
        format: 'sdf',
        hasHetero: true,
        hetVisible: true,
        id: 'id2',
        label: 'label2',
        pocketVisible: true,
        proteinVisible: true,
        visible: false
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

    describe('toggle visibility action of a protein', () => {
        it('should set visible to !visible', () => {
            const state = sampleState();
            const action = actions.toggleVisibility('id1');

            const newState = reducer(state, action);

            const expected = [{
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id1',
                label: 'label1',
                pocketVisible: true,
                proteinVisible: true,
                visible: false
            }, {
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id2',
                label: 'label2',
                pocketVisible: true,
                proteinVisible: true,
                visible: false
            }];
            expect(newState).toEqual(expected);
        });

        describe('when whole protein, protein, hetero and pocket are hidden', () => {
            it('should show all of them on visibility toggle', () => {
                const state = sampleState();
                state[0].visible = false;
                state[0].proteinVisible = false;
                state[0].hetVisible = false;
                state[0].pocketVisible = false;
                const action = actions.toggleVisibility('id1');

                const newState = reducer(state, action);

                const expected = sampleState();
                expect(newState).toEqual(expected);
            });
        });

        describe('when whole protein and hetero are hidden', () => {
            it('should show hetero on visibility toggle', () => {
                const state = sampleState();
                state[0].visible = false;
                state[0].proteinVisible = false;
                state[0].hetVisible = true;
                state[0].pocketVisible = false;
                const action = actions.toggleVisibility('id1');

                const newState = reducer(state, action);

                const expected = sampleState();
                expected[0].visible = true;
                expected[0].proteinVisible = false;
                expected[0].hetVisible = true;
                expected[0].pocketVisible = false;
                expect(newState).toEqual(expected);
            });
        });
    });

    describe('toggle protein visibility action of a protein', () => {
        it('should set proteinVisible to !proteinVisible', () => {
            const state = sampleState();
            const action = actions.toggleProteinVisibility('id1');

            const newState = reducer(state, action);

            const expected = [{
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id1',
                label: 'label1',
                pocketVisible: true,
                proteinVisible: false,
                visible: true
            }, {
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id2',
                label: 'label2',
                pocketVisible: true,
                proteinVisible: true,
                visible: false
            }];
            expect(newState).toEqual(expected);
        });

        describe('when hetero and pocket are hidden', () => {
            it('should set visibility to false', () => {
                const state = sampleState();
                state[0].visible = true;
                state[0].proteinVisible = true;
                state[0].hetVisible = false;
                state[0].pocketVisible = false;
                const action = actions.toggleProteinVisibility('id1');

                const newState = reducer(state, action);

                const expected = sampleState();
                expected[0].visible = false;
                expected[0].proteinVisible = false;
                expected[0].hetVisible = false;
                expected[0].pocketVisible = false;
                expect(newState).toEqual(expected);
            });
        });
    });

    describe('toggle het visibility action of a protein', () => {
        it('should set het visible to !visible', () => {
            const state = sampleState();
            const action = actions.toggleHetVisibility('id1');

            const newState = reducer(state, action);

            const expected: IProtein[] = [{
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: false,
                id: 'id1',
                label: 'label1',
                pocketVisible: true,
                proteinVisible: true,
                visible: true
            }, {
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id2',
                label: 'label2',
                pocketVisible: true,
                proteinVisible: true,
                visible: false
            }];
            expect(newState).toEqual(expected);
        });

        describe('when protein and pocket are hidden', () => {
            it('should set visibility to false', () => {
                const state = sampleState();
                state[0].visible = true;
                state[0].proteinVisible = false;
                state[0].hetVisible = true;
                state[0].pocketVisible = false;
                const action = actions.toggleHetVisibility('id1');

                const newState = reducer(state, action);

                const expected = sampleState();
                expected[0].visible = false;
                expected[0].proteinVisible = false;
                expected[0].hetVisible = false;
                expected[0].pocketVisible = false;
                expect(newState).toEqual(expected);
            });
        });
    });

    describe('toggle pocket visibility action of a protein', () => {
        it('should set pocket visible to !visible', () => {
            const state = sampleState();
            const action = actions.togglePocketVisibility('id1');

            const newState = reducer(state, action);

            const expected: IProtein[] = [{
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id1',
                label: 'label1',
                pocketVisible: false,
                proteinVisible: true,
                visible: true
            }, {
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id2',
                label: 'label2',
                pocketVisible: true,
                proteinVisible: true,
                visible: false
            }];
            expect(newState).toEqual(expected);
        });

        describe('when protein and pocket are hidden', () => {
            it('should set visibility to false', () => {
                const state = sampleState();
                state[0].visible = true;
                state[0].proteinVisible = false;
                state[0].hetVisible = false;
                state[0].pocketVisible = true;
                const action = actions.togglePocketVisibility('id1');

                const newState = reducer(state, action);

                const expected = sampleState();
                expected[0].visible = false;
                expected[0].proteinVisible = false;
                expected[0].hetVisible = false;
                expected[0].pocketVisible = false;
                expect(newState).toEqual(expected);
            });
        });
    });

    describe('toggle hide all proteins action', () => {
        it('should set all visible to false', () => {
            const state = sampleState();
            const action = actions.hideAll();

            const newState = reducer(state, action);

            const expected: IProtein[] = [{
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id1',
                label: 'label1',
                pocketVisible: true,
                proteinVisible: true,
                visible: false
            }, {
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id2',
                label: 'label2',
                pocketVisible: true,
                proteinVisible: true,
                visible: false
            }];
            expect(newState).toEqual(expected);
        });
    });

    describe('toggle show all proteins action', () => {
        it('should set all visible to true', () => {
            const state = sampleState();
            const action = actions.showAll();

            const newState = reducer(state, action);

            const expected: IProtein[] = [{
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id1',
                label: 'label1',
                pocketVisible: true,
                proteinVisible: true,
                visible: true
            }, {
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id2',
                label: 'label2',
                pocketVisible: true,
                proteinVisible: true,
                visible: true
            }];
            expect(newState).toEqual(expected);
        });
    });

    describe('fetch succeeded', () => {
        it('should return the proteins of the action', () => {
            const fetched = sampleState();
            const action = actions.fetchSucceeded(fetched);

            const state = reducer(undefined, action);

            expect(state).toEqual(fetched);
        });
    });
});
