import { combineEpics } from 'redux-observable';

import {
    epic as ligandsEpic,
    epicActions as ligandsActions
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
import {
    epicActions as toastrEpicActions,
    toastrEpic
} from './toastrEpic';

type rootEpicActions = ligandsActions | pharmacophoresActions | proteinsActions | sseActions | toastrEpicActions;

export const rootEpic = combineEpics<rootEpicActions, {}>(
    ligandsEpic,
    pharmacophoreEpic,
    proteinsEpic,
    sseEpic,
    toastrEpic
);
