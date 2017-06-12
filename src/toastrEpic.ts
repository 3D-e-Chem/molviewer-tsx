import { actions as toastrActions } from 'react-redux-toastr';
import { combineEpics, Epic  } from 'redux-observable';

import {
    actions as ligandsActions,
    constants as ligandsConstants
} from './ligands';
import {
    actions as pharmacophoresActions,
    constants as pharmacophoresConstants
} from './pharmacophores';
import {
    actions as proteinsActions,
    constants as proteinsConstants
} from './proteins';

const toastWhenLigandsFetchFailed: Epic<ligandsActions.IFetchFailed, {}> = (action$) =>
    action$.ofType(ligandsConstants.LIGANDS_FETCH_FAILED)
        .map((action) =>
            toastrActions.add({
                message: action.error,
                title: 'Unable to fetch ligands from server',
                type: 'error'
            })
        )
;

const toastWhenProteinsFetchFailed: Epic<proteinsActions.IFetchFailed, {}> = (action$) =>
    action$.ofType(proteinsConstants.PROTEINS_FETCH_FAILED)
        .map((action) =>
            toastrActions.add({
                message: action.error,
                title: 'Unable to fetch proteins from server',
                type: 'error'
            })
        )
;

const toastWhenPharmacophoresFetchFailed: Epic<pharmacophoresActions.IFetchFailed, {}> = (action$) =>
    action$.ofType(pharmacophoresConstants.PHARMACOPHORES_FETCH_FAILED)
        .map((action) =>
            toastrActions.add({
                message: action.error,
                title: 'Unable to fetch proteins from server',
                type: 'error'
            })
        )
;

export type epicActions = ligandsActions.IFetchFailed |
    pharmacophoresActions.IFetchFailed |
    proteinsActions.IFetchFailed
;

export const toastrEpic = combineEpics<epicActions, {}>(
    toastWhenLigandsFetchFailed,
    toastWhenPharmacophoresFetchFailed,
    toastWhenProteinsFetchFailed
);
