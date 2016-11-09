import {OtherAction} from '../actions';
import {
    PROTEIN_TOGGLE_HETVISIBILITY,
    PROTEIN_TOGGLE_VISIBILITY,
    PROTEINS_FETCH_FAILED,
    PROTEINS_FETCH_REQUESTED,
    PROTEINS_FETCH_SUCCEEDED,
    PROTEINS_HIDE,
    PROTEINS_SHOW
} from '../constants';
import {IProtein} from '../services/protein';

export type toggleVisibility = {
  type: PROTEIN_TOGGLE_VISIBILITY,
  id: string
};

export const toggleVisibility = (id: string): toggleVisibility => ({
    type: PROTEIN_TOGGLE_VISIBILITY,
    id
});

export type toggleHetVisibility = {
  type: PROTEIN_TOGGLE_HETVISIBILITY,
  id: string
};

export const toggleHetVisibility = (id: string): toggleHetVisibility => ({
    type: PROTEIN_TOGGLE_HETVISIBILITY,
    id
});

export type fetchRequested = {
  type: PROTEINS_FETCH_REQUESTED
};

export const fetchRequested = (): fetchRequested => ({
    type: PROTEINS_FETCH_REQUESTED
});

export type fetchSucceeded = {
  type: PROTEINS_FETCH_SUCCEEDED,
  proteins: IProtein[]
};

export const fetchSucceeded = (proteins: IProtein[]): fetchSucceeded => ({
  type: PROTEINS_FETCH_SUCCEEDED,
  proteins
});

export type fetchFailed = {
  type: PROTEINS_FETCH_FAILED,
  error: string
};

export const fetchFailed = (error: string): fetchFailed => ({
  type: PROTEINS_FETCH_FAILED,
  error
});

export type showAll = {
  type: PROTEINS_SHOW
};
export const showAll = (): showAll => ({
  type: PROTEINS_SHOW
});

export type hideAll = {
  type: PROTEINS_HIDE
};
export const hideAll = (): hideAll => ({
  type: PROTEINS_HIDE
});

type toggleAction = toggleHetVisibility | toggleVisibility | showAll | hideAll;

export type ProteinAction = toggleAction | fetchFailed | fetchRequested | fetchSucceeded | OtherAction;
