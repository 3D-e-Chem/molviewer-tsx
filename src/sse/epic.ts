import { combineEpics, Epic } from 'redux-observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/mergeMap'
import { Observable } from 'rxjs/Observable'

import { actions as ligands } from '../ligands'
import { actions as pharmacophores } from '../pharmacophores'
import { actions as proteins } from '../proteins'

import { IServerModelChanged } from './actions'
import { SERVER_HILITE_CHANGED, SERVER_MODEL_CHANGED } from './constants'
import { IState } from './reducer'

export type epicActions =
  | IServerModelChanged
  | ligands.IFetchRequested
  | proteins.IFetchRequested
  | pharmacophores.IFetchRequested
  | ligands.IHiLitefetchRequested
  | pharmacophores.IHiLitefetchRequested

const fetchWhenServerModelChangedEpic: Epic<epicActions, IState> = (
  action$,
  store
) =>
  action$
    .ofType(SERVER_MODEL_CHANGED)
    .mergeMap<epicActions, epicActions>(() => {
      switch (store.getState().sse.currentPage) {
        case 'LigandsAndProteinsViewer':
          return Observable.from([
            ligands.fetchRequested(),
            proteins.fetchRequested()
          ])
        case 'PharmacophoresViewer':
          return Observable.from([pharmacophores.fetchRequested()])
        default:
          return Observable.from([])
      }
    })

const fetchServerHiLiteChangedEpic: Epic<epicActions, IState> = (
  action$,
  store
) =>
  // The server only sends hilite changed
  // when pharmacophoresviewer is active then the higlighted pharmacophores should be fetched
  // when ligandandproteinsviewer is active then the highlighted ligands should be fetched
  // to determine which viewer is active
  // the highlighting property in the redux store is set when a viewer is loaded
  action$.ofType(SERVER_HILITE_CHANGED).mergeMap(() => {
    switch (store.getState().sse.currentPage) {
      case 'LigandsAndProteinsViewer':
        return Observable.from([ligands.hiLitefetchRequested()])
      case 'PharmacophoresViewer':
        return Observable.from([pharmacophores.hiLitefetchRequested()])
      default:
        return Observable.from([])
    }
  })

export const epic = combineEpics(
  fetchWhenServerModelChangedEpic,
  fetchServerHiLiteChangedEpic
)
