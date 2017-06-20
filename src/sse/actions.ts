import { IOtherAction, OtherAction } from '../actions';
import {
    PAGE_LOADED,
    SERVER_DISCONNECT,
    SERVER_HILITE_CHANGED,
    SERVER_MODEL_CHANGED
} from './constants';

export interface IServerDisconnect {
    type: SERVER_DISCONNECT;
}

export function serverDisconnect(): IServerDisconnect {
    return { type: SERVER_DISCONNECT };
}

export interface IServerModelChanged {
    type: SERVER_MODEL_CHANGED;
}

export function serverModelChanged(): IServerModelChanged {
    return { type: SERVER_MODEL_CHANGED };
}

export interface IServerHiLiteChanged {
    type: SERVER_HILITE_CHANGED;
}

export function serverHiLiteChanged(): IServerHiLiteChanged {
    return { type: SERVER_HILITE_CHANGED };
}

export interface IPageLoaded {
    type: PAGE_LOADED;
    page: string;
}

/**
 * @param resource Action to use to highlight
 */
export function pageLoaded(page: string): IPageLoaded {
    return { type: PAGE_LOADED, page };
}

export type connectedAction = IServerDisconnect | IServerHiLiteChanged | IServerModelChanged | IOtherAction;

export { IOtherAction, OtherAction };
