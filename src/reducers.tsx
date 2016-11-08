import { combineReducers } from 'redux';

import { ligands } from './reducers/ligands';
import { proteins } from './reducers/proteins';
import { connected } from './reducers/server';

export const reducers = combineReducers({
    ligands,
    proteins,
    connected,
});
