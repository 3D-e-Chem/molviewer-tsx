import { connectedAction, OtherAction } from './actions';
import { SERVER_DISCONNECT } from './constants';

export function reducer(state: boolean = true, action: connectedAction = OtherAction): boolean {
    switch (action.type) {
        case SERVER_DISCONNECT:
            return false;
        default:
            return state;
    }
}
