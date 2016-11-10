import { combineReducers } from 'redux';

import { reducer as ligands } from './ligands';
import { reducer as proteins } from './proteins';
import { reducer as sse } from './sse';

export const rootReducer = combineReducers({
    ligands,
    proteins,
    connected: sse
});
