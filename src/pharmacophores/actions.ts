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

export interface IFetchFailed {
  type: constants.PHARMACOPHORES_FETCH_FAILED;
  error: string;
}

export const fetchFailed = (error: string): IFetchFailed => ({
  type: constants.PHARMACOPHORES_FETCH_FAILED,
  error
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

type IToggleAction = IToggleContainerVisibility |
  ITogglePharmacophoreVisibility |
  IToggleLigandVisibility |
  ITogglePocketVisibility |
  IToggleProteinVisibility |
  IShowAll |
  IHideAll;
export type PharmacophoreAction = IToggleAction | IFetchFailed | IFetchRequested | IFetchSucceeded | IOtherAction;
export { OtherAction };
