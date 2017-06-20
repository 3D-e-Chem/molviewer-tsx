import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';

import { PAGE_LOADED } from './constants';
import { reducer as ligands } from './ligands';
import { reducer as pharmacophores } from './pharmacophores';
import { reducer as pocketRadius } from './pocketradius';
import { reducer as proteins } from './proteins';
import { reducer as sse } from './sse';

const higlightAction = (state: string = '', action: any) => {
    switch (action.type) {
        case PAGE_LOADED:
            return action.payload;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    connected: sse,
    higlightAction,
    ligands,
    pharmacophores,
    pocketRadius,
    proteins,
    toastr: toastrReducer
});
