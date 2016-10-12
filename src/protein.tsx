import fetch from 'isomorphic-fetch';

export interface IRestProtein {
  id: string;
  label: string;
  data: string;
}

export interface IProtein extends IRestProtein {
  visible: boolean;
  hetVisible: boolean;
}

export function prepProtein(restProtein: IRestProtein) {
  const protein = restProtein as IProtein;
  protein.visible = true;
  protein.hetVisible = true;
  return protein;
}

export function fetchProteins(url = '/api/proteins') {
  return fetch(url)
    .then<IRestProtein[]>(response => response.json())
    .then<IProtein[]>(restProteins => restProteins.map(prepProtein));
}
