import {SERVER_DISCONNECT} from './constants';

export type OtherAction = { type: '' };
export const OtherAction: OtherAction = { type: '' };

export type serverDisconnect = {
    type: SERVER_DISCONNECT,
};

export function serverDisconnect(): serverDisconnect {
    return {type: SERVER_DISCONNECT};
};

export type connectedAction =  serverDisconnect | OtherAction;
