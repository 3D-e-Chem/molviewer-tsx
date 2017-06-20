import configureMockStore from 'redux-mock-store';
import { IStore } from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';

import { actions as ligands } from '../ligands';
import { actions as pharmacophores } from '../pharmacophores';
import { actions as proteins } from '../proteins';
import { serverHiLiteChanged, serverModelChanged } from './actions';
import { epic } from './epic';

interface IState {
    sse: {
        currentPage: string;
    };
}

describe('epic', () => {
  let epicMiddleware: any;
  let mockStore: any;

  beforeEach(() => {
    epicMiddleware = createEpicMiddleware(epic);
    mockStore = configureMockStore<IState>([epicMiddleware]);
  });

  afterEach(() => {
    epicMiddleware.replaceEpic(epic);
  });

  describe('for LigandsAndProteinsViewer', () => {
    let store: IStore<IState>;

    beforeEach(() => {
      const initialState: IState = {sse: {currentPage: 'LigandsAndProteinsViewer'}};
      store = mockStore(initialState);
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

    describe('on dispatch of server hilite changed', () => {
      beforeEach(() => {
          store.dispatch(serverHiLiteChanged());
      });

      it('should trigger fetch of hilited ligands', () => {
          const expected = ligands.hiLitefetchRequested();
          expect(store.getActions()).toContainEqual(expected);
      });
    });
  });

  describe('for PharmacophoresViewer', () => {
    let store: IStore<IState>;

    beforeEach(() => {
      const initialState: IState = {sse: {currentPage: 'PharmacophoresViewer'}};
      store = mockStore(initialState);
    });

    describe('on dispatch of server model changed', () => {
      beforeEach(() => {
          store.dispatch(serverModelChanged());
      });

      it('should trigger reload of pharmacophores', () => {
          const expected = pharmacophores.fetchRequested();
          expect(store.getActions()).toContainEqual(expected);
      });
    });

    describe('on dispatch of server hilite changed', () => {
      beforeEach(() => {
          store.dispatch(serverHiLiteChanged());
      });

      it('should trigger fetch of hilited pharmacophores', () => {
          const expected = pharmacophores.hiLitefetchRequested();
          expect(store.getActions()).toContainEqual(expected);
      });
    });
  });
});
