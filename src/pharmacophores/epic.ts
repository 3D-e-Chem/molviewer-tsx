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
import { PHARMACOPHORES_FETCH_REQUESTED } from './constants';
import { fetchPharmacophores } from './services';

export type EpicActions = IFetchFailed |
    IFetchRequested |
    IFetchSucceeded;

export const epic: Epic<EpicActions, {}> = (action$) =>
    action$.ofType(PHARMACOPHORES_FETCH_REQUESTED)
        .mergeMap(() => Observable.fromPromise(fetchPharmacophores())
            .map(fetchSucceeded)
            .catch((error: Error) => Observable.of(fetchFailed(error.message)))
        )
;
