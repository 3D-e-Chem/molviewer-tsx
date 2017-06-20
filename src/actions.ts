import { PAGE_LOADED } from './constants';

export interface IOtherAction  {
    type: '';
}

export const OtherAction: IOtherAction = {type: ''};

export interface IPageLoaded {
    type: PAGE_LOADED;
    action: string;
}

/**
 * @param resource Action to use to highlight
 */
export function pageLoaded(action: string): IPageLoaded {
    return { type: PAGE_LOADED, action };
}
