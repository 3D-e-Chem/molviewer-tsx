import { combineReducers } from 'redux';

import { reducer as ligands } from './ligands';
import { reducers as proteins } from './proteins';
import { reducer as sse } from './sse';

export const rootReducer = combineReducers({
    ligands,
    proteins: proteins.proteins,
    pocketRadius: proteins.pocketRadius,
    connected: sse
});
