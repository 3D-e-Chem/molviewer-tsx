import { actions as toastrActions } from 'react-redux-toastr';
import { combineEpics, Epic  } from 'redux-observable';

import {
    actions as ligandsActions,
    constants as ligandsConstants
} from './ligands';
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

export type epicActions = ligandsActions.IFetchFailed | proteinsActions.IFetchFailed;

export const toastrEpic = combineEpics<epicActions, {}>(
    toastWhenLigandsFetchFailed,
    toastWhenProteinsFetchFailed
);
