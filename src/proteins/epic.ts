import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

import { Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { fetchSucceeded, IFetchRequested, IFetchSucceeded } from './actions'
import { PROTEINS_FETCH_REQUESTED } from './constants'
import { fetchProteins } from './services'
import { errorResponse2toastr } from '../errorResponse2toastr'

export type epicActions = IFetchRequested | IFetchSucceeded

export const epic: Epic<epicActions, {}> = action$ =>
  action$.ofType(PROTEINS_FETCH_REQUESTED).mergeMap(() =>
    Observable.fromPromise(fetchProteins())
      .map(fetchSucceeded)
      .catch((error: Response) =>
        errorResponse2toastr(error, 'Unable to fetch proteins from server')
      )
  )

// TODO add hilight epics
