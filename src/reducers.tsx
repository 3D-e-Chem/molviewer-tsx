import { combineReducers } from 'redux';

import { OtherAction, connectedAction } from './actions';
import {SERVER_DISCONNECT} from './constants';
import ligands from './reducers/ligands';
import proteins from './reducers/proteins';

const connected = (state = true, action: connectedAction = OtherAction): boolean => {
    switch (action.type) {
        case SERVER_DISCONNECT:
            return false;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    ligands,
    proteins,
    connected,
});

export default rootReducer;
