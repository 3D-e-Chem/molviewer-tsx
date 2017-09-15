import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/mergeMap'

import { Action } from 'redux'
import { combineEpics, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import {
  fetchSucceeded,
  hiLitefetchSucceeded,
  IFetchAction,
  IHiLiteAction,
  IHiLiteShown
} from './actions'
import {
  PHARMACOPHORES_FETCH_REQUESTED,
  PHARMACOPHORES_HILITE_FETCH_REQUESTED,
  PHARMACOPHORES_HILITE_SHOWN
} from './constants'
import {
  fetchHiLitePharmacophores,
  fetchPharmacophores,
  submitHiLitePharmacophores
} from './services'
import { errorResponse2toastr } from '../errorResponse2toastr'

export type EpicActions = IFetchAction | IHiLiteAction | Action

const fetchEpic: Epic<EpicActions, {}> = action$ =>
  action$.ofType(PHARMACOPHORES_FETCH_REQUESTED).mergeMap(() =>
    Observable.fromPromise(fetchPharmacophores())
      .map(fetchSucceeded)
      .catch((error: Response) =>
        errorResponse2toastr(
          error,
          'Unable to fetch pharmacophores from server'
        )
      )
  )

const submitHiLiteEpic: Epic<EpicActions, {}> = action$ =>
  action$.ofType(PHARMACOPHORES_HILITE_SHOWN).mergeMap(
    action =>
      Observable.fromPromise(
        submitHiLitePharmacophores((action as IHiLiteShown).payload)
      ).catch((error: Response) =>
        errorResponse2toastr(
          error,
          'Unable to submit highlighted pharmacophores to server'
        )
      )
    // TODO map to PHARMACOPHORES_HILITE_SHOWN_SUCCEEDED
  )

const fetchHiLiteEpic: Epic<EpicActions, {}> = action$ =>
  action$.ofType(PHARMACOPHORES_HILITE_FETCH_REQUESTED).mergeMap(() =>
    Observable.fromPromise(fetchHiLitePharmacophores())
      .map(hiLitefetchSucceeded)
      .catch((error: Response) =>
        errorResponse2toastr(
          error,
          'Unable to fetch highlighted pharmacophores from server'
        )
      )
  )

export const epic = combineEpics(fetchEpic, submitHiLiteEpic, fetchHiLiteEpic)
