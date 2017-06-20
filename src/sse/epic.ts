import { combineEpics, Epic  } from 'redux-observable';
import 'rxjs/add/operator/mapTo';

import { actions as ligands } from '../ligands';
import { actions as pharmacophores } from '../pharmacophores';
import { actions as proteins } from '../proteins';

import { IServerModelChanged } from './actions';
import { SERVER_HILITE_CHANGED, SERVER_MODEL_CHANGED } from './constants';

export type epicActions = IServerModelChanged |
    ligands.IFetchRequested |
    proteins.IFetchRequested |
    pharmacophores.IFetchRequested
;

const fetchLigandsWhenModelChangedEpic: Epic<epicActions, {}> = (action$) =>
    action$.ofType(SERVER_MODEL_CHANGED).mapTo(ligands.fetchRequested())
;

const fetchProteinsWhenModelChangedEpic: Epic<epicActions, {}> = (action$) =>
    action$.ofType(SERVER_MODEL_CHANGED).mapTo(proteins.fetchRequested())
;

const fetchPharmacophoresWhenModelChangedEpic: Epic<epicActions, {}> = (action$) =>
    action$.ofType(SERVER_MODEL_CHANGED).mapTo(pharmacophores.fetchRequested())
;

interface IStore {
    highlighting: string;
}

const fetchHiLiteEpic: Epic<epicActions, IStore> = (action$, store) =>
    // The server only sends hilite changed
    // when pharmacophoresviewer is active then the higlighted pharmacophores should be fetched
    // when ligandandproteinsviewer is active then the highlighted ligands should be fetched
    // to determine which viewer is active 
    // the highlighting property in the redux store is set when a viewer is loaded
    action$.ofType(SERVER_HILITE_CHANGED).mapTo({type: store.getState().highlighting})
;

export const epic = combineEpics(
    fetchLigandsWhenModelChangedEpic,
    fetchProteinsWhenModelChangedEpic,
    fetchPharmacophoresWhenModelChangedEpic,
    fetchHiLiteEpic
);
