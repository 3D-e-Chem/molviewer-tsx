import { call, put } from 'redux-saga/effects';

import { fetchFailed, fetchSucceeded, hiLitefetchFailed, hiLitefetchSucceeded } from '../actions/ligands';
import { fetchHiLiteLigands, fetchLigands, submitHiLiteLigands } from '../ligand';

export function* fetchLigandsWorker() {
    try {
        const ligands = yield call(fetchLigands);
        yield put(fetchSucceeded(ligands));
    } catch (e) {
        yield put(fetchFailed(e.message));
    }
}

export function* fetchHiLiteLigandsWorker() {
    try {
        const highlightedLigands = yield call(fetchHiLiteLigands);
        yield put(hiLitefetchSucceeded(highlightedLigands));
    } catch (e) {
        yield put(hiLitefetchFailed(e.message));
    }
}

// any should be hiLiteShown, but then this func can't be used in the sagas module
export function* submitHiLiteLigandsWorker(action: any) {
    yield call(submitHiLiteLigands, action.highlightedLigands);
}
