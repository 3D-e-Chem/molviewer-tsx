import { actions as toastrActions } from 'react-redux-toastr';
import { put, takeLatest } from 'redux-saga/effects';

import * as ligands from './ligands';
import * as proteins from './proteins';
import * as sse from './sse';

export function* fetchFailedWorker(action: ligands.actions.IFetchFailed | proteins.actions.IFetchFailed) {
  const toast = toastrActions.add({
    message: action.error,
    title: 'Unable to fetch molecules from server',
    type: 'error'
  });
  yield put(toast);
}

export function* mainSaga() {
  yield* [
    takeLatest(proteins.constants.PROTEINS_FETCH_REQUESTED, proteins.sagas.fetchProteinsWorker),
    takeLatest(proteins.constants.PROTEINS_FETCH_FAILED, fetchFailedWorker),
    takeLatest(ligands.constants.LIGANDS_FETCH_REQUESTED, ligands.sagas.fetchLigandsWorker),
    takeLatest(ligands.constants.LIGANDS_FETCH_FAILED, fetchFailedWorker),
    takeLatest(sse.constants.SERVER_HILITE_CHANGED, ligands.sagas.fetchHiLiteLigandsWorker),
    takeLatest(ligands.constants.LIGANDS_HILITE_SHOWN, ligands.sagas.submitHiLiteLigandsWorker),
    takeLatest(sse.constants.SERVER_MODEL_CHANGED, sse.sagas.modelChangedWorker)
  ];
}
