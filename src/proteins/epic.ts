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
import { PROTEINS_FETCH_REQUESTED } from './constants';
import { fetchProteins } from './services';

export type epicActions = IFetchFailed | IFetchRequested | IFetchSucceeded;

export const epic: Epic<epicActions, {}> = (action$) =>
    action$.ofType(PROTEINS_FETCH_REQUESTED)
        .mergeMap(() => Observable.fromPromise(fetchProteins())
            .map((proteins) => fetchSucceeded(proteins))
            .catch((error: Error) => Observable.of(fetchFailed(error.message)))
        )
;
