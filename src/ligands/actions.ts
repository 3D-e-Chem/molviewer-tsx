import {IOtherAction, OtherAction} from '../actions';
import {
    LIGAND_TOGGLE_VISIBILITY,
    LIGANDS_FETCH_FAILED,
    LIGANDS_FETCH_REQUESTED,
    LIGANDS_FETCH_SUCCEEDED,
    LIGANDS_HIDE,
    LIGANDS_HILITE_FETCH_FAILED,
    LIGANDS_HILITE_FETCH_SUCCEEDED,
    LIGANDS_HILITE_SHOWN,
    LIGANDS_SHOW
} from './constants';
import { ILigand } from './types';

export interface IToggleVisibility {
  type: LIGAND_TOGGLE_VISIBILITY;
  id: string;
}

export const toggleVisibility = (id: string): IToggleVisibility => ({
    type: LIGAND_TOGGLE_VISIBILITY,
    id
});

export interface IFetchRequested {
  type: LIGANDS_FETCH_REQUESTED;
}

export const fetchRequested = (): IFetchRequested => ({
    type: LIGANDS_FETCH_REQUESTED
});

export interface IFetchSucceeded {
  type: LIGANDS_FETCH_SUCCEEDED;
  ligands: ILigand[];
}

export const fetchSucceeded = (ligands: ILigand[]): IFetchSucceeded => ({
  type: LIGANDS_FETCH_SUCCEEDED,
  ligands
});

export interface IFetchFailed {
  type: LIGANDS_FETCH_FAILED;
  error: string;
}

export const fetchFailed = (error: string): IFetchFailed => ({
  type: LIGANDS_FETCH_FAILED,
  error
});

export interface IShowAll {
  type: LIGANDS_SHOW;
}
export const showAll = (): IShowAll => ({
  type: LIGANDS_SHOW
});

export interface IHideAll {
  type: LIGANDS_HIDE;
}
export const hideAll = (): IHideAll => ({
  type: LIGANDS_HIDE
});

export interface IHiLiteShown {
  type: LIGANDS_HILITE_SHOWN;
  highlightedLigands: string[];
}
export const hiLiteShown = (highlightedLigands: string[]): IHiLiteShown => ({
  type: LIGANDS_HILITE_SHOWN,
  highlightedLigands
});

export interface IHiLitefetchSucceeded {
  type: LIGANDS_HILITE_FETCH_SUCCEEDED;
  highlightedLigands: string[];
}
export const hiLitefetchSucceeded = (highlightedLigands: string[]): IHiLitefetchSucceeded => ({
  type: LIGANDS_HILITE_FETCH_SUCCEEDED,
  highlightedLigands
});

export interface IHiLitefetchFailed {
  type: LIGANDS_HILITE_FETCH_FAILED;
  error: string;
}
export const hiLitefetchFailed = (error: string): IHiLitefetchFailed => ({
  type: LIGANDS_HILITE_FETCH_FAILED,
  error
});

export type LigandAction = IToggleVisibility | IShowAll | IHideAll |
  IHiLiteShown | IHiLitefetchFailed | IHiLitefetchSucceeded |
  IFetchFailed | IFetchRequested | IFetchSucceeded |
  IOtherAction;

export { OtherAction };
