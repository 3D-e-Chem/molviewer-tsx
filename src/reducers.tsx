import { combineReducers } from 'redux';

import ligands from './reducers/ligands';
import proteins from './reducers/proteins';
import connected from './reducers/server';

const rootReducer = combineReducers({
    ligands,
    proteins,
    connected,
});

export default rootReducer;
