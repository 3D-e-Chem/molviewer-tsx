import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { actions as toastrActions } from 'react-redux-toastr';
import { combineEpics, Epic  } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import {
    fetchSucceeded,
    hiLitefetchSucceeded,
    IHiLiteShown,
    LigandAction
} from './actions';
import { LIGANDS_FETCH_REQUESTED, LIGANDS_HILITE_FETCH_REQUESTED, LIGANDS_HILITE_SHOWN } from './constants';
import { fetchHiLiteLigands, fetchLigands, submitHiLiteLigands } from './services';

const fetchEpic: Epic<LigandAction, {}> = (action$) =>
    action$.ofType(LIGANDS_FETCH_REQUESTED)
        .mergeMap(
            () => Observable.fromPromise(fetchLigands())
            .map((ligands) => fetchSucceeded(ligands))
            .catch((error: Error) => Observable.of(
                toastrActions.add({
                    message: error.message,
                    title: 'Unable to fetch ligands from server',
                    type: 'error'
                })
            ))
        )
;

const submitHiliteEpic: Epic<LigandAction, {}> = (action$) =>
    action$.ofType(LIGANDS_HILITE_SHOWN)
        .mergeMap(
            (action) => Observable.fromPromise(
                submitHiLiteLigands((action as IHiLiteShown).payload)
            ).catch((error: Error) => Observable.of(
                toastrActions.add({
                    message: error.message,
                    title: 'Unable to submit highlighted ligands to server',
                    type: 'error'
                })
            ))
        )
;

const fetchHiLiteEpic: Epic<LigandAction, {}> = (action$) =>
    action$.ofType(LIGANDS_HILITE_FETCH_REQUESTED)
        .mergeMap(
            () => Observable.fromPromise(fetchHiLiteLigands())
            .map((ids) => hiLitefetchSucceeded(ids))
            .catch((error: Error) => Observable.of(
                toastrActions.add({
                    message: error.message,
                    title: 'Unable to fetch highlighted ligands from server',
                    type: 'error'
                })
            ))
        )
;

export const epic = combineEpics(
    fetchEpic,
    submitHiliteEpic,
    fetchHiLiteEpic
);
