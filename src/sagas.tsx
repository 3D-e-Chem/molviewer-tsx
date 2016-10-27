import { takeLatest } from 'redux-saga';

import {
  LIGANDS_FETCH_REQUESTED,
  PROTEINS_FETCH_REQUESTED,
} from './constants';
import { fetchLigandsWorker } from './sagas/ligands';
import { fetchProteinsWorker } from './sagas/proteins';

export default function* rootSaga() {
  yield* [
    takeLatest(PROTEINS_FETCH_REQUESTED, fetchProteinsWorker),
    takeLatest(LIGANDS_FETCH_REQUESTED, fetchLigandsWorker),
  ];
}
