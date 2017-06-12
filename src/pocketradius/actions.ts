import { IOtherAction, OtherAction } from '../actions';
import { POCKETRADIUS_ADJUST } from './constants';

export interface IAdjustPocketRadius {
    type: POCKETRADIUS_ADJUST;
    radius: number;
}

export const adjustPocketRadius = (radius: number): IAdjustPocketRadius => ({
    type: POCKETRADIUS_ADJUST,
    radius
});

export type PocketAction = IAdjustPocketRadius | IOtherAction;
export { OtherAction };
