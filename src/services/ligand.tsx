
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

export function fetchLigands(url: string = '/api/ligands') {
  return fetch(url)
    .then<IRestLigand[]>(response => response.json())
    .then<ILigand[]>((restLigands) => restLigands.map(prepLigand));
}

export function fetchHiLiteLigands(url: string = '/api/ligands/hilite') {
  return fetch(url)
    .then<string[]>(response => response.json());
}

export function submitHiLiteLigands(highlightedLigands: string[], url: string = '/api/ligands/hilite') {
  const init = {
    method: 'POST',
    body: JSON.stringify(highlightedLigands),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };
  return fetch(url, init);
}
