import fetch from 'isomorphic-fetch';

export interface IRestLigand {
  id: string;
  label: string;
  data: string;
  format: string;
}

export interface ILigand extends IRestLigand {
  visible: boolean;
}

export function prepLigand(restLigand: IRestLigand) {
  const ligand = restLigand as ILigand;
  ligand.visible = true;
  return ligand;
}

export function fetchLigands(url = '/api/ligands') {
  return fetch(url)
    .then<IRestLigand[]>(response => response.json())
    .then<ILigand[]>((restLigands) => restLigands.map(prepLigand));
}
