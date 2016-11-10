import { takeLatest } from 'redux-saga';

import * as ligands from './ligands';
import * as proteins from './proteins';
import * as sse from './sse';

export function* mainSaga() {
  yield* [
    takeLatest(proteins.constants.PROTEINS_FETCH_REQUESTED, proteins.sagas.fetchProteinsWorker),
    takeLatest(ligands.constants.LIGANDS_FETCH_REQUESTED, ligands.sagas.fetchLigandsWorker),
    takeLatest(sse.constants.SERVER_HILITE_CHANGED, ligands.sagas.fetchHiLiteLigandsWorker),
    takeLatest(ligands.constants.LIGANDS_HILITE_SHOWN, ligands.sagas.submitHiLiteLigandsWorker),
    takeLatest(sse.constants.SERVER_MODEL_CHANGED, sse.sagas.modelChangedWorker)
  ];
}
