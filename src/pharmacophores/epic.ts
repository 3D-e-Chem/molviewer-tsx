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
    IFetchAction,
    IHiLiteAction,
    IHiLiteShown
} from './actions';
import {
    PHARMACOPHORES_FETCH_REQUESTED,
    PHARMACOPHORES_HILITE_FETCH_REQUESTED,
    PHARMACOPHORES_HILITE_SHOWN
} from './constants';
import { fetchHiLitePharmacophores, fetchPharmacophores, submitHiLitePharmacophores } from './services';

export type EpicActions = IFetchAction | IHiLiteAction;

const fetchEpic: Epic<EpicActions, {}> = (action$) =>
    action$.ofType(PHARMACOPHORES_FETCH_REQUESTED)
        .mergeMap(
            () => Observable.fromPromise(fetchPharmacophores())
            .map((pharmacophores) => fetchSucceeded(pharmacophores))
            .catch((error: Error) => Observable.of(
                toastrActions.add({
                    message: error.message,
                    title: 'Unable to fetch pharmacophores from server',
                    type: 'error'
                })
            ))
        )
;

const submitHiLiteEpic: Epic<EpicActions, {}> = (action$) =>
    action$.ofType(PHARMACOPHORES_HILITE_SHOWN)
        .mergeMap(
            (action) => Observable.fromPromise(
                submitHiLitePharmacophores((action as IHiLiteShown).payload)
            )
            .catch((error: Error) => Observable.of(
                toastrActions.add({
                    message: error.message,
                    title: 'Unable to submit highlighted pharmacophores to server',
                    type: 'error'
                })
            ))
        )
;

const fetchHiLiteEpic: Epic<EpicActions, {}> = (action$) =>
    action$.ofType(PHARMACOPHORES_HILITE_FETCH_REQUESTED)
        .mergeMap(
            () => Observable.fromPromise(fetchHiLitePharmacophores())
            .map((ids) => hiLitefetchSucceeded(ids))
            .catch((error: Error) => Observable.of(
                toastrActions.add({
                    message: error.message,
                    title: 'Unable to fetch highlighted pharmacophores from server',
                    type: 'error'
                })
            ))
        )
;

export const epic = combineEpics(
    fetchEpic,
    submitHiLiteEpic,
    fetchHiLiteEpic
);
