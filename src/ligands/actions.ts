import {IOtherAction, OtherAction} from '../actions';
import {
    LIGAND_PICK_COLOR,
    LIGAND_TOGGLE_VISIBILITY,
    LIGANDS_FETCH_REQUESTED,
    LIGANDS_FETCH_SUCCEEDED,
    LIGANDS_HIDE,
    LIGANDS_HILITE_FETCH_REQUESTED,
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

export interface IPickColor {
  type: LIGAND_PICK_COLOR;
  id: string;
  color: string;
}

export const pickColor = (id: string, color: string): IPickColor => ({
    type: LIGAND_PICK_COLOR,
    id,
    color
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
  payload: string[];
}
export const hiLiteShown = (payload: string[]): IHiLiteShown => ({
  type: LIGANDS_HILITE_SHOWN,
  payload
});

export interface IHiLitefetchSucceeded {
  type: LIGANDS_HILITE_FETCH_SUCCEEDED;
  payload: string[];
}
export const hiLitefetchSucceeded = (payload: string[]): IHiLitefetchSucceeded => ({
  type: LIGANDS_HILITE_FETCH_SUCCEEDED,
  payload
});

export interface IHiLitefetchRequested {
  type: LIGANDS_HILITE_FETCH_REQUESTED;
}
export const hiLitefetchRequested = (): IHiLitefetchRequested => ({
  type: LIGANDS_HILITE_FETCH_REQUESTED
});

export type HiLiteActions = IHiLiteShown | IHiLitefetchRequested | IHiLitefetchSucceeded;
export type FetchActions = IFetchRequested | IFetchSucceeded;

export type LigandAction = IPickColor | IToggleVisibility |
  IShowAll | IHideAll |
  HiLiteActions |
  FetchActions |
  IOtherAction;

export { OtherAction };
