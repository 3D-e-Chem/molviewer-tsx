import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

import { Action } from 'redux'
import { combineEpics, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import {
  fetchSucceeded,
  hiLitefetchSucceeded,
  IHiLiteShown,
  LigandAction
} from './actions'
import {
  LIGANDS_FETCH_REQUESTED,
  LIGANDS_HILITE_FETCH_REQUESTED,
  LIGANDS_HILITE_SHOWN
} from './constants'
import {
  fetchHiLiteLigands,
  fetchLigands,
  submitHiLiteLigands
} from './services'
import { errorResponse2toastr } from '../errorResponse2toastr'

type EpicActions = LigandAction | Action

const fetchEpic: Epic<LigandAction, {}> = action$ =>
  action$.ofType(LIGANDS_FETCH_REQUESTED).mergeMap(() =>
    Observable.fromPromise(fetchLigands())
      .map(fetchSucceeded)
      .catch((error: Response) =>
        errorResponse2toastr(error, 'Unable to fetch ligands from server')
      )
  )

const submitHiliteEpic: Epic<EpicActions, {}> = action$ =>
  action$.ofType(LIGANDS_HILITE_SHOWN).mergeMap(
    action =>
      Observable.fromPromise(
        submitHiLiteLigands((action as IHiLiteShown).payload)
      ).catch((error: Response) =>
        errorResponse2toastr(
          error,
          'Unable to submit highlighted ligands to server'
        )
      )
    // TODO map to LIGANDS_HILITE_SHOWN_SUCCEEDED
  )

const fetchHiLiteEpic: Epic<EpicActions, {}> = action$ =>
  action$.ofType(LIGANDS_HILITE_FETCH_REQUESTED).mergeMap(() =>
    Observable.fromPromise(fetchHiLiteLigands())
      .map(hiLitefetchSucceeded)
      .catch((error: Response) =>
        errorResponse2toastr(
          error,
          'Unable to fetch highlighted ligands from server'
        )
      )
  )

export const epic = combineEpics(fetchEpic, submitHiliteEpic, fetchHiLiteEpic)
