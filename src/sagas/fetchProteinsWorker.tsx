import { call, put } from 'redux-saga/effects';

import { fetchFailed, fetchSucceeded } from '../actions/proteins';
import { fetchProteins } from '../services/protein';

export function* fetchProteinsWorker() {
    try {
        const proteins = yield call(fetchProteins);
        yield put(fetchSucceeded(proteins));
    } catch (e) {
        yield put(fetchFailed(e.message));
    }
}
