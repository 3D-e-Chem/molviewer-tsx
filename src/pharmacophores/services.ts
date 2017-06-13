import { IPharmacophoreContainer, IRestPharmacophoreContainer } from './types';

const initialShownMolecules = 1;

export function prepPharmacophore(restPharmacophore: IRestPharmacophoreContainer, index: number) {
  const pharmacophore = restPharmacophore as IPharmacophoreContainer;
  pharmacophore.visible = index < initialShownMolecules;
  pharmacophore.pharmacophoreVisible = true;
  pharmacophore.proteinVisible = pharmacophore.protein !== undefined;
  pharmacophore.pocketVisible = pharmacophore.proteinVisible;
  pharmacophore.ligandVisible = (pharmacophore.ligand !== undefined || pharmacophore.proteinVisible);
  return pharmacophore;
}

export function fetchPharmacophores(url: string = '/api/pharmacophores') {
  return fetch(url)
    .then<IRestPharmacophoreContainer[]>((response) => response.json())
    .then<IPharmacophoreContainer[]>((restPharmacophores) => restPharmacophores.map(prepPharmacophore));
}
