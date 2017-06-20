import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { actions as toastrActions } from 'react-redux-toastr';
import { Epic  } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import {
    fetchSucceeded,
    IFetchRequested,
    IFetchSucceeded
} from './actions';
import { PROTEINS_FETCH_REQUESTED } from './constants';
import { fetchProteins } from './services';

export type epicActions = IFetchRequested | IFetchSucceeded;

export const epic: Epic<epicActions, {}> = (action$) =>
    action$.ofType(PROTEINS_FETCH_REQUESTED)
        .mergeMap(() => Observable.fromPromise(fetchProteins())
            .map((proteins) => fetchSucceeded(proteins))
            .catch((error: Error) => Observable.of(
                 toastrActions.add({
                    message: error.message,
                    title: 'Unable to fetch proteins from server',
                    type: 'error'
                })
            ))
        )
;
