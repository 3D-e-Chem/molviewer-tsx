import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Epic  } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import {
    fetchFailed,
    fetchSucceeded,
    IFetchFailed,
    IFetchRequested,
    IFetchSucceeded
} from './actions';
import { LIGANDS_FETCH_REQUESTED } from './constants';
import { fetchLigands } from './services';

export type epicActions = IFetchFailed | IFetchRequested | IFetchSucceeded;

export const epic: Epic<epicActions, {}> = (action$) =>
    action$.ofType(LIGANDS_FETCH_REQUESTED)
        .mergeMap(() => Observable.fromPromise(fetchLigands())
            .map(fetchSucceeded)
            .catch((error: Error) => Observable.of(fetchFailed(error.message)))
        )
;
