export interface IRestProtein {
  id: string;
  label: string;
  data: string;
  format: string;
}

export interface IProtein extends IRestProtein {
  visible: boolean;
  hetVisible: boolean;
}

const initialShownMolecules = 1;

export function prepProtein(restProtein: IRestProtein, index: Number) {
  const protein = restProtein as IProtein;
  protein.visible = index < initialShownMolecules;
  protein.hetVisible = true;
  return protein;
}

export function fetchProteins(url = '/api/proteins') {
  return fetch(url)
    .then<IRestProtein[]>(response => response.json())
    .then<IProtein[]>(restProteins => restProteins.map(prepProtein));
}
