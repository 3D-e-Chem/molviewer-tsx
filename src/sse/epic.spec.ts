import configureMockStore from 'redux-mock-store';
import { IStore } from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';

import { actions as ligands } from '../ligands';
import { actions as proteins } from '../proteins';
import { serverModelChanged } from './actions';
import { epic, epicActions } from './epic';

describe('epic', () => {
  let store: IStore<epicActions>;

  beforeEach(() => {
    const epicMiddleware = createEpicMiddleware(epic);
    const mockStore = configureMockStore<epicActions>([epicMiddleware]);
    store = mockStore();
  });

  describe('on dispatch of server model changed', () => {
    beforeEach(() => {
        store.dispatch(serverModelChanged());
    });

    it('should trigger reload of ligands', () => {
        const expected = ligands.fetchRequested();
        expect(store.getActions()).toContainEqual(expected);
    });

    it('should trigger reload of proteins', () => {
        const expected = proteins.fetchRequested();
        expect(store.getActions()).toContainEqual(expected);
    });
  });
});
