import { takeLatest } from 'redux-saga';

import {
  LIGANDS_FETCH_REQUESTED,
  PROTEINS_FETCH_REQUESTED,
  SERVER_MODEL_CHANGED,
} from './constants';
import { fetchLigandsWorker } from './sagas/ligands';
import { fetchProteinsWorker } from './sagas/proteins';
import { modelChangedWorker } from './sagas/server';

export default function* rootSaga() {
  yield* [
    takeLatest(PROTEINS_FETCH_REQUESTED, fetchProteinsWorker),
    takeLatest(LIGANDS_FETCH_REQUESTED, fetchLigandsWorker),
    takeLatest(SERVER_MODEL_CHANGED, modelChangedWorker),
  ];
}
