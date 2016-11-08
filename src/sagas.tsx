import { takeLatest } from 'redux-saga';

import {
  LIGANDS_FETCH_REQUESTED,
  LIGANDS_HILITE_SHOWN,
  PROTEINS_FETCH_REQUESTED,
  SERVER_HILITE_CHANGED,
  SERVER_MODEL_CHANGED,
} from './constants';
import { fetchHiLiteLigandsWorker, fetchLigandsWorker, submitHiLiteLigandsWorker } from './sagas/ligands';
import { fetchProteinsWorker } from './sagas/proteins';
import { modelChangedWorker } from './sagas/server';

export function* sagas() {
  yield* [
    takeLatest(PROTEINS_FETCH_REQUESTED, fetchProteinsWorker),
    takeLatest(LIGANDS_FETCH_REQUESTED, fetchLigandsWorker),
    takeLatest(SERVER_HILITE_CHANGED, fetchHiLiteLigandsWorker),
    takeLatest(LIGANDS_HILITE_SHOWN, submitHiLiteLigandsWorker),
    takeLatest(SERVER_MODEL_CHANGED, modelChangedWorker),
  ];
}
