import {OtherAction} from '../actions';
import {
    LIGAND_TOGGLE_VISIBILITY,
    LIGANDS_FETCH_FAILED,
    LIGANDS_FETCH_REQUESTED,
    LIGANDS_FETCH_SUCCEEDED,
    LIGANDS_HIDE,
    LIGANDS_HILITE_FETCH_FAILED,
    LIGANDS_HILITE_FETCH_SUCCEEDED,
    LIGANDS_HILITE_SHOWN,
    LIGANDS_SHOW,
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

export type hiLiteShown = {
  type: LIGANDS_HILITE_SHOWN,
  highlightedLigands: string[],
}
export const hiLiteShown = (highlightedLigands: string[]): hiLiteShown => ({
  type: LIGANDS_HILITE_SHOWN,
  highlightedLigands,
});

export type hiLitefetchSucceeded = {
  type: LIGANDS_HILITE_FETCH_SUCCEEDED,
  highlightedLigands: string[],
}
export const hiLitefetchSucceeded = (highlightedLigands: string[]): hiLitefetchSucceeded => ({
  type: LIGANDS_HILITE_FETCH_SUCCEEDED,
  highlightedLigands,
});

export type hiLitefetchFailed = {
  type: LIGANDS_HILITE_FETCH_FAILED,
  error: string,
}
export const hiLitefetchFailed = (error: string): hiLitefetchFailed => ({
  type: LIGANDS_HILITE_FETCH_FAILED,
  error,
});

type toggleVisibilityAction = toggleVisibility | showAll | hideAll;

type hiLiteAction = hiLiteShown | hiLitefetchFailed | hiLitefetchSucceeded;

export type LigandAction = toggleVisibilityAction | fetchFailed | fetchRequested | fetchSucceeded | hiLiteAction | OtherAction;
