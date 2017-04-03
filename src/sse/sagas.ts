import { put } from 'redux-saga/effects';

import { actions as ligands } from '../ligands';
import { actions as proteins } from '../proteins';

/* tslint:disable:export-name */
export function* modelChangedWorker() {
  // Don't know what changed inside KNIME so reload everything
  yield [put(ligands.fetchRequested()), put(proteins.fetchRequested())];
}
