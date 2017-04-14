import { actions as toastrActions } from 'react-redux-toastr';
import configureMockStore from 'redux-mock-store';
import { IStore } from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';

import { actions as ligands } from './ligands';
import { actions as proteins } from './proteins';
import { epicActions, toastrEpic } from './toastrEpic';

describe('toastrEpic', () => {
  let store: IStore<epicActions>;

  beforeEach(() => {
    const epicMiddleware = createEpicMiddleware(toastrEpic);
    const mockStore = configureMockStore<epicActions>([epicMiddleware]);
    store = mockStore();
  });

  describe('should return toastr error message', () => {
    it('on ligands fetch failure', () => {
        const message = 'Server timed out';
        store.dispatch(ligands.fetchFailed(message));

        const expected = toastrActions.add({
            message,
            title: 'Unable to fetch ligands from server',
            type: 'error'
        });
        expect(store.getActions()).toContainEqual(expected);
    });

    it('on proteins fetch failure', () => {
        const message = 'Server timed out';
        store.dispatch(proteins.fetchFailed(message));

        const expected = toastrActions.add({
            message,
            title: 'Unable to fetch proteins from server',
            type: 'error'
        });
        expect(store.getActions()).toContainEqual(expected);
    });
  });
});
