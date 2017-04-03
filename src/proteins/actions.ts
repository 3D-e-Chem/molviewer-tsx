import { IAction, IOtherAction, OtherAction } from '../actions';
import {
    PROTEIN_TOGGLE_HETVISIBILITY,
    PROTEIN_TOGGLE_POCKETVISIBILITY,
    PROTEIN_TOGGLE_VISIBILITY,
    PROTEINS_ADJUST_POCKETRADIUS,
    PROTEINS_FETCH_FAILED,
    PROTEINS_FETCH_REQUESTED,
    PROTEINS_FETCH_SUCCEEDED,
    PROTEINS_HIDE,
    PROTEINS_SHOW
} from './constants';
import {IProtein} from './types';

export interface IToggleVisibility extends IAction {
  type: PROTEIN_TOGGLE_VISIBILITY;
  id: string;
}

export const toggleVisibility = (id: string): IToggleVisibility => ({
    type: PROTEIN_TOGGLE_VISIBILITY,
    id
});

export interface IToggleHetVisibility extends IAction {
  type: PROTEIN_TOGGLE_HETVISIBILITY;
  id: string;
}

export const toggleHetVisibility = (id: string): IToggleHetVisibility => ({
    type: PROTEIN_TOGGLE_HETVISIBILITY,
    id
});

export interface ITogglePocketVisibility extends IAction {
  type: PROTEIN_TOGGLE_POCKETVISIBILITY;
  id: string;
}

export const togglePocketVisibility = (id: string): ITogglePocketVisibility => ({
    type: PROTEIN_TOGGLE_POCKETVISIBILITY,
    id
});

export interface IAdjustPocketRadius extends IAction {
    type: PROTEINS_ADJUST_POCKETRADIUS;
    radius: number;
}

export const adjustPocketRadius = (radius: number): IAdjustPocketRadius => ({
    type: PROTEINS_ADJUST_POCKETRADIUS,
    radius
});

export interface IFetchRequested extends IAction {
  type: PROTEINS_FETCH_REQUESTED;
}

export const fetchRequested = (): IFetchRequested => ({
    type: PROTEINS_FETCH_REQUESTED
});

export interface IFetchSucceeded extends IAction {
  type: PROTEINS_FETCH_SUCCEEDED;
  proteins: IProtein[];
}

export const fetchSucceeded = (proteins: IProtein[]): IFetchSucceeded => ({
  type: PROTEINS_FETCH_SUCCEEDED,
  proteins
});

export interface IFetchFailed extends IAction {
  type: PROTEINS_FETCH_FAILED;
  error: string;
}

export const fetchFailed = (error: string): IFetchFailed => ({
  type: PROTEINS_FETCH_FAILED,
  error
});

export interface IShowAll extends IAction {
  type: PROTEINS_SHOW;
}
export const showAll = (): IShowAll => ({
  type: PROTEINS_SHOW
});

export interface IHideAll extends IAction {
  type: PROTEINS_HIDE;
}
export const hideAll = (): IHideAll => ({
  type: PROTEINS_HIDE
});

type toggleAction = IToggleHetVisibility | ITogglePocketVisibility | IToggleVisibility | IShowAll | IHideAll;

export type ProteinAction = toggleAction | IFetchFailed | IFetchRequested | IFetchSucceeded | IOtherAction;
export type PocketAction = IAdjustPocketRadius | IOtherAction;
export { OtherAction };
