import { OtherAction, PocketAction } from './actions';
import { POCKETRADIUS_ADJUST } from './constants';

export function reducer(state: number = 5.0, action: PocketAction = OtherAction): number {
    switch (action.type) {
        case POCKETRADIUS_ADJUST:
            return action.radius;
        default:
            return state;
    }
}
