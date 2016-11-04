
export interface IRestLigand {
  id: string;
  label: string;
  data: string;
  format: string;
}

export interface ILigand extends IRestLigand {
  visible: boolean;
}

const initialShownMolecules = 1;

export function prepLigand(restLigand: IRestLigand, index: Number) {
  const ligand = restLigand as ILigand;
  ligand.visible = index < initialShownMolecules;
  return ligand;
}

export function fetchLigands(url = '/api/ligands') {
  return fetch(url)
    .then<IRestLigand[]>(response => response.json())
    .then<ILigand[]>((restLigands) => restLigands.map(prepLigand));
}
