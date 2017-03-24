import * as actions from './actions';
import * as reducer from './reducer';
import { IProtein } from './types';

function sampleState(): IProtein[] {
    return [{
        id: 'id1',
        label: 'label1',
        visible: true,
        format: 'sdf',
        data: '...',
        hetVisible: true,
        pocketVisible: true
    }, {
        id: 'id2',
        label: 'label2',
        visible: false,
        format: 'sdf',
        data: '...',
        hetVisible: true,
        pocketVisible: true
    }];
}

describe('reducer', () => {
    describe('pocketRadius', () => {
        it('should return the initial state', () => {
            const state = reducer.pocketRadius(undefined, actions.OtherAction);
            expect(state).toEqual(5.0);
        });

        describe('adjust', () => {
            it('should be set to radius of action', () => {
                const action = actions.adjustPocketRadius(3.0);

                const state = reducer.pocketRadius(undefined, action);

                expect(state).toEqual(3.0);
            });
        });
    });

    describe ('proteins', () => {
        it('should return the initial state', () => {
            const state = reducer.proteins(undefined, actions.OtherAction);

            expect(state).toEqual([]);
        });

        describe('other action', () => {
            it('should return same state', () => {
                const state = sampleState();
                const action = actions.OtherAction;

                const newState = reducer.proteins(state, action);

                expect(newState).toEqual(state);
            });
        });

        describe('toggle visibility action of a protein', () => {
            it('should set visible to !visible', () => {
                const state = sampleState();
                const action = actions.toggleVisibility('id1');

                const newState = reducer.proteins(state, action);

                const expected = [{
                    id: 'id1',
                    label: 'label1',
                    visible: false,
                    format: 'sdf',
                    data: '...',
                    hetVisible: true,
                    pocketVisible: true
                }, {
                    id: 'id2',
                    label: 'label2',
                    visible: false,
                    format: 'sdf',
                    data: '...',
                    hetVisible: true,
                    pocketVisible: true
                }];
                expect(newState).toEqual(expected);
            });
        });

        describe('toggle het visibility action of a protein', () => {
            it('should set het visible to !visible', () => {
                const state = sampleState();
                const action = actions.toggleHetVisibility('id1');

                const newState = reducer.proteins(state, action);

                const expected = [{
                    id: 'id1',
                    label: 'label1',
                    visible: true,
                    format: 'sdf',
                    data: '...',
                    hetVisible: false,
                    pocketVisible: true
                }, {
                    id: 'id2',
                    label: 'label2',
                    visible: false,
                    format: 'sdf',
                    data: '...',
                    hetVisible: true,
                    pocketVisible: true
                }];
                expect(newState).toEqual(expected);
            });
        });

        describe('toggle pocket visibility action of a protein', () => {
            it('should set pocket visible to !visible', () => {
                const state = sampleState();
                const action = actions.togglePocketVisibility('id1');

                const newState = reducer.proteins(state, action);

                const expected = [{
                    id: 'id1',
                    label: 'label1',
                    visible: true,
                    format: 'sdf',
                    data: '...',
                    hetVisible: true,
                    pocketVisible: false
                }, {
                    id: 'id2',
                    label: 'label2',
                    visible: false,
                    format: 'sdf',
                    data: '...',
                    hetVisible: true,
                    pocketVisible: true
                }];
                expect(newState).toEqual(expected);
            });
        });

        describe('toggle hide all proteins action', () => {
            it('should set all visible to false', () => {
                const state = sampleState();
                const action = actions.hideAll();

                const newState = reducer.proteins(state, action);

                const expected = [{
                    id: 'id1',
                    label: 'label1',
                    visible: false,
                    format: 'sdf',
                    data: '...',
                    hetVisible: true,
                    pocketVisible: true
                }, {
                    id: 'id2',
                    label: 'label2',
                    visible: false,
                    format: 'sdf',
                    data: '...',
                    hetVisible: true,
                    pocketVisible: true
                }];
                expect(newState).toEqual(expected);
            });
        });

        describe('toggle show all proteins action', () => {
            it('should set all visible to true', () => {
                const state = sampleState();
                const action = actions.showAll();

                const newState = reducer.proteins(state, action);

                const expected = [{
                    id: 'id1',
                    label: 'label1',
                    visible: true,
                    format: 'sdf',
                    data: '...',
                    hetVisible: true,
                    pocketVisible: true
                }, {
                    id: 'id2',
                    label: 'label2',
                    visible: true,
                    format: 'sdf',
                    data: '...',
                    hetVisible: true,
                    pocketVisible: true
                }];
                expect(newState).toEqual(expected);
            });
        });

        describe('fetch succeeded', () => {
            it('should return the proteins of the action', () => {
                const fetched = sampleState();
                const action = actions.fetchSucceeded(fetched);

                const state = reducer.proteins(undefined, action);

                expect(state).toEqual(fetched);
            });
        });
    });
});
