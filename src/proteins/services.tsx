import { IProtein, IRestProtein } from './types';

const initialShownMolecules = 1;

export function prepProtein(restProtein: IRestProtein, index: Number) {
  const protein = restProtein as IProtein;
  protein.visible = index < initialShownMolecules;
  protein.hetVisible = true;
  return protein;
}

export function fetchProteins(url: string = '/api/proteins') {
  return fetch(url)
    .then<IRestProtein[]>(response => response.json())
    .then<IProtein[]>(restProteins => restProteins.map(prepProtein));
}
