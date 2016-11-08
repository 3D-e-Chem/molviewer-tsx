import { OtherAction } from '../actions';
import { SERVER_DISCONNECT, SERVER_HILITE_CHANGED, SERVER_MODEL_CHANGED } from '../constants';

export type serverDisconnect = {
    type: SERVER_DISCONNECT,
};

export function serverDisconnect(): serverDisconnect {
    return { type: SERVER_DISCONNECT };
}

export type serverModelChanged = {
    type: SERVER_MODEL_CHANGED
};

export function serverModelChanged(): serverModelChanged {
    return { type: SERVER_MODEL_CHANGED };
}

export type serverHiLiteChanged = {
    type: SERVER_HILITE_CHANGED
}

export function serverHiLiteChanged(): serverHiLiteChanged {
    return { type: SERVER_HILITE_CHANGED };
}

export type connectedAction = serverDisconnect | serverHiLiteChanged | serverModelChanged | OtherAction;
