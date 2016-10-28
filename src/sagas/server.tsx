import { put } from 'redux-saga/effects';

import { fetchRequested as fetchLigandsRequested } from '../actions/ligands';
import { fetchRequested as fetchProteinsRequested } from '../actions/proteins';

export function* modelChangedWorker() {
  // Don't know what changed inside KNIME so reload everything
  yield [put(fetchLigandsRequested()), put(fetchProteinsRequested())];
}
