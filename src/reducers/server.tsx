import { OtherAction } from '../actions';
import { connectedAction } from '../actions/server';
import {SERVER_DISCONNECT} from '../constants';

export default function connected(state: boolean = true, action: connectedAction = OtherAction): boolean {
    switch (action.type) {
        case SERVER_DISCONNECT:
            return false;
        default:
            return state;
    }
};
