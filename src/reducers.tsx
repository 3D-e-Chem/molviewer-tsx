import { combineReducers } from 'redux';

import { ligands } from './reducers/ligands';
import { proteins } from './reducers/proteins';
import { server } from './reducers/server';

const rootReducer = combineReducers({
    ligands,
    proteins,
    server,
});

export default rootReducer;
