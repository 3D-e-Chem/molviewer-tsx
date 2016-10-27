import { call, put } from 'redux-saga/effects';

import { fetchFailed, fetchSucceeded } from '../actions/ligands';
import { fetchLigands } from '../ligand';

export function* fetchLigandsWorker() {
    try {
        const ligands = yield call(fetchLigands);
        yield put(fetchSucceeded(ligands));
    } catch (e) {
        yield put(fetchFailed(e.message));
    }
}
