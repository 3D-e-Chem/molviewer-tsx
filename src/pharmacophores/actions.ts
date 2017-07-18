import { IOtherAction, OtherAction } from '../actions';

import * as constants from './constants';
import { IPharmacophoreContainer } from './types';

export interface IToggleContainerVisibility {
  type: constants.PHARMACOPHORE_TOGGLE_CONTAINER_VISIBILITY;
  id: string;
}

export const toggleContainerVisibility = (id: string): IToggleContainerVisibility => ({
  type: constants.PHARMACOPHORE_TOGGLE_CONTAINER_VISIBILITY,
  id
});

export interface ITogglePharmacophoreVisibility {
  type: constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_VISIBILITY;
  id: string;
}

export const togglePharmacophoreVisibility = (id: string): ITogglePharmacophoreVisibility => ({
  type: constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_VISIBILITY,
  id
});

export interface ITogglePharamacophoreOpacity {
  type: constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_OPACITY;
  id: string;
}

export const togglePharmacophoreOpacity = (id: string): ITogglePharamacophoreOpacity => ({
  type: constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_OPACITY,
  id
});

export interface IToggleProteinVisibility {
  type: constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY;
  id: string;
}

export const toggleProteinVisibility = (id: string): IToggleProteinVisibility => ({
  type: constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY,
  id
});

export interface IToggleLigandVisibility {
  type: constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY;
  id: string;
}

export const toggleLigandVisibility = (id: string): IToggleLigandVisibility => ({
  type: constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY,
  id
});

export interface ITogglePocketVisibility {
  type: constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY;
  id: string;
}

export const togglePocketVisibility = (id: string): ITogglePocketVisibility => ({
  type: constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY,
  id
});

export interface IAdjustLigandColor {
  type: constants.PHARMACOPHORE_ADJUST_LIGAND_COLOR;
  id: string;
}

export const adjustLigandColor = (id: string): IAdjustLigandColor => ({
  type: constants.PHARMACOPHORE_ADJUST_LIGAND_COLOR,
  id
});

export interface IFetchRequested {
  type: constants.PHARMACOPHORES_FETCH_REQUESTED;
}

export const fetchRequested = (): IFetchRequested => ({
  type: constants.PHARMACOPHORES_FETCH_REQUESTED
});

export interface IFetchSucceeded {
  type: constants.PHARMACOPHORES_FETCH_SUCCEEDED;
  payload: IPharmacophoreContainer[];
}

export const fetchSucceeded = (payload: IPharmacophoreContainer[]): IFetchSucceeded => ({
  type: constants.PHARMACOPHORES_FETCH_SUCCEEDED,
  payload
});

export interface IShowAll {
  type: constants.PHARMACOPHORES_SHOW;
}
export const showAll = (): IShowAll => ({
  type: constants.PHARMACOPHORES_SHOW
});

export interface IHideAll {
  type: constants.PHARMACOPHORES_HIDE;
}
export const hideAll = (): IHideAll => ({
  type: constants.PHARMACOPHORES_HIDE
});

export interface IHiLiteShown {
  type: constants.PHARMACOPHORES_HILITE_SHOWN;
  payload: string[];
}
export const hiLiteShown = (payload: string[]): IHiLiteShown => ({
  type: constants.PHARMACOPHORES_HILITE_SHOWN,
  payload
});

export interface IHiLitefetchSucceeded {
  type: constants.PHARMACOPHORES_HILITE_FETCH_SUCCEEDED;
  payload: string[];
}
export const hiLitefetchSucceeded = (payload: string[]): IHiLitefetchSucceeded => ({
  type: constants.PHARMACOPHORES_HILITE_FETCH_SUCCEEDED,
  payload
});

export interface IHiLitefetchRequested {
  type: constants.PHARMACOPHORES_HILITE_FETCH_REQUESTED;
}
export const hiLitefetchRequested = (): IHiLitefetchRequested => ({
  type: constants.PHARMACOPHORES_HILITE_FETCH_REQUESTED
});

type IToggleAction = IToggleContainerVisibility |
  ITogglePharmacophoreVisibility |
  ITogglePharamacophoreOpacity |
  IToggleLigandVisibility |
  ITogglePocketVisibility |
  IToggleProteinVisibility |
  IShowAll |
  IHideAll;
export type IFetchAction = IFetchRequested | IFetchSucceeded;
export type IHiLiteAction = IHiLiteShown | IHiLitefetchRequested | IHiLitefetchSucceeded;

export type PharmacophoreAction = IToggleAction | IFetchAction | IHiLiteAction | IAdjustLigandColor | IOtherAction;
export { OtherAction };
