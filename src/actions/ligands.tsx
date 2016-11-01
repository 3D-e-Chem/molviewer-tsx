import {OtherAction} from '../actions';
import {
    LIGANDS_FETCH_FAILED,
    LIGANDS_FETCH_REQUESTED,
    LIGANDS_FETCH_SUCCEEDED,
    LIGANDS_HIDE,
    LIGANDS_SHOW,
    LIGAND_TOGGLE_VISIBILITY,
} from '../constants';
import {ILigand} from '../ligand';

export type toggleVisibility = {
  type: LIGAND_TOGGLE_VISIBILITY,
  id: string,
};

export const toggleVisibility = (id: string): toggleVisibility => ({
    type: LIGAND_TOGGLE_VISIBILITY,
    id,
});

export type fetchRequested = {
  type: LIGANDS_FETCH_REQUESTED,
};

export const fetchRequested = (): fetchRequested => ({
    type: LIGANDS_FETCH_REQUESTED,
});

export type fetchSucceeded = {
  type: LIGANDS_FETCH_SUCCEEDED,
  ligands: ILigand[],
};

export const fetchSucceeded = (ligands: ILigand[]): fetchSucceeded => ({
  type: LIGANDS_FETCH_SUCCEEDED,
  ligands,
});

export type fetchFailed = {
  type: LIGANDS_FETCH_FAILED,
  error: string,
};

export const fetchFailed = (error: string): fetchFailed => ({
  type: LIGANDS_FETCH_FAILED,
  error,
});

export type showAll = {
  type: LIGANDS_SHOW,
};
export const showAll = (): showAll => ({
  type: LIGANDS_SHOW,
});

export type hideAll = {
  type: LIGANDS_HIDE,
};
export const hideAll = (): hideAll => ({
  type: LIGANDS_HIDE,
});

type toggleVisibilityAction = toggleVisibility | showAll | hideAll;

export type LigandAction = toggleVisibilityAction | fetchFailed | fetchRequested | fetchSucceeded | OtherAction;
