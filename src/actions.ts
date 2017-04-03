export interface IAction {
    type: string;
}

export interface IOtherAction extends IAction {
    type: '';
}

export const OtherAction: IOtherAction = {type: ''};
