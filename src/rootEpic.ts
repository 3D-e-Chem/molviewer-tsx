import { combineEpics } from 'redux-observable';

import {
    epic as ligandsEpic,
    epicActions as ligandsActions
} from './ligands';
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

type rootEpicActions = ligandsActions | proteinsActions | sseActions | toastrEpicActions;

export const rootEpic = combineEpics<rootEpicActions, {}>(
    ligandsEpic,
    proteinsEpic,
    sseEpic,
    toastrEpic
);
