import { IPharmacophore, IRestPharmacophore } from './types';

const initialShownMolecules = 1;

export function prepPharmacophore(restPharmacophore: IRestPharmacophore, index: number) {
  const pharmacophore = restPharmacophore as IPharmacophore;
  pharmacophore.visible = index < initialShownMolecules;
  pharmacophore.ligandVisible = true;
  pharmacophore.proteinVisible = true;
  pharmacophore.pocketVisible = true;
  return pharmacophore;
}

export function fetchPharmacophores(url: string = '/api/pharmacophores') {
  return fetch(url)
    .then<IRestPharmacophore[]>((response) => response.json())
    .then<IPharmacophore[]>((restPharmacophores) => restPharmacophores.map(prepPharmacophore));
}
