import { combineEpics } from 'redux-observable';

import {
    actions as ligandsActions,
    epic as ligandsEpic
} from './ligands';
import {
    epic as pharmacophoreEpic,
    EpicActions as pharmacophoresActions
} from './pharmacophores';
import {
    epic as proteinsEpic,
    epicActions as proteinsActions
} from './proteins';
import {
    epic as sseEpic,
    epicActions as sseActions
} from './sse';

type rootEpicActions = ligandsActions.LigandAction |
    pharmacophoresActions |
    proteinsActions |
    sseActions;

export const rootEpic = combineEpics<rootEpicActions, {}>(
    ligandsEpic,
    pharmacophoreEpic,
    proteinsEpic,
    sseEpic
);
