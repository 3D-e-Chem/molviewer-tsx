import {reducer as toastrReducer} from 'react-redux-toastr'
import { combineReducers } from 'redux';

import { reducer as ligands } from './ligands';
import { reducers as proteins } from './proteins';
import { reducer as sse } from './sse';

export const rootReducer = combineReducers({
    connected: sse,
    ligands,
    pocketRadius: proteins.pocketRadius,
    proteins: proteins.proteins,
    toastr: toastrReducer
});
