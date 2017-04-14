import { combineEpics, Epic  } from 'redux-observable';
import 'rxjs/add/operator/mapTo';

import { actions as ligands } from '../ligands';
import { actions as proteins } from '../proteins';

import { IServerModelChanged } from './actions';
import { SERVER_MODEL_CHANGED } from './constants';

export type epicActions = IServerModelChanged | ligands.IFetchRequested | proteins.IFetchRequested;

const fetchLigandsWhenModelChangedEpic: Epic<epicActions, {}> = (action$) =>
    action$.ofType(SERVER_MODEL_CHANGED).mapTo(ligands.fetchRequested())
;

const fetchProteinsWhenModelChangedEpic: Epic<epicActions, {}> = (action$) =>
    action$.ofType(SERVER_MODEL_CHANGED).mapTo(proteins.fetchRequested())
;

export const epic = combineEpics(
    fetchLigandsWhenModelChangedEpic,
    fetchProteinsWhenModelChangedEpic
);
