import { processStatus } from '../processStatus';
import { ILigand, IRestLigand } from './types';

const initialShownMolecules = 1;

export function prepLigand(restLigand: IRestLigand, index: number) {
  const ligand = restLigand as ILigand;
  ligand.visible = index < initialShownMolecules;
  return ligand;
}

export function fetchLigands(url: string = '/api/ligands') {
  return fetch(url)
    .then(processStatus)
    .then<IRestLigand[]>((response) => response.json())
    .then<ILigand[]>((restLigands) => restLigands.map(prepLigand))
  ;
}

export function fetchHiLiteLigands(url: string = '/api/ligands/hilite') {
  return fetch(url)
    .then(processStatus)
    .then<string[]>((response) => response.json())
  ;
}

export function submitHiLiteLigands(highlightedLigands: string[], url: string = '/api/ligands/hilite') {
  const init = {
    body: JSON.stringify(highlightedLigands),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST'
  };
  return fetch(url, init)
    .then(processStatus)
  ;
}
