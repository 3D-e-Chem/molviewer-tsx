import {OtherAction} from '../actions';
import {
    PROTEINS_FETCH_FAILED,
    PROTEINS_FETCH_REQUESTED,
    PROTEINS_FETCH_SUCCEEDED,
    PROTEIN_TOGGLE_HETVISIBILITY,
    PROTEIN_TOGGLE_VISIBILITY,
} from '../constants';
import {IProtein} from '../protein';

export type toggleVisibility = {
  type: PROTEIN_TOGGLE_VISIBILITY,
  id: string,
};

export const toggleVisibility = (id: string): toggleVisibility => ({
    type: PROTEIN_TOGGLE_VISIBILITY,
    id,
});

export type toggleHetVisibility = {
  type: PROTEIN_TOGGLE_HETVISIBILITY,
  id: string,
};

export const toggleHetVisibility = (id: string): toggleHetVisibility => ({
    type: PROTEIN_TOGGLE_HETVISIBILITY,
    id,
});

export type fetchRequested = {
  type: PROTEINS_FETCH_REQUESTED,
};

export const fetchRequested = (): fetchRequested => ({
    type: PROTEINS_FETCH_REQUESTED,
});

export type fetchSucceeded = {
  type: PROTEINS_FETCH_SUCCEEDED,
  proteins: IProtein[],
};

export const fetchSucceeded = (proteins: IProtein[]): fetchSucceeded => ({
  type: PROTEINS_FETCH_SUCCEEDED,
  proteins,
});

export type fetchFailed = {
  type: PROTEINS_FETCH_FAILED,
  error: string,
};

export const fetchFailed = (error: string): fetchFailed => ({
  type: PROTEINS_FETCH_FAILED,
  error,
});

type toggleAction = toggleHetVisibility | toggleVisibility;

export type ProteinAction = toggleAction | fetchFailed | fetchRequested | fetchSucceeded | OtherAction;
