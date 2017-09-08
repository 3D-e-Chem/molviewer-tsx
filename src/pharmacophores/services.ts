import { processStatus } from '../processStatus'
import { detectHetero } from '../proteins/services'
import { IPharmacophoreContainer, IRestPharmacophoreContainer } from './types'

const initialShownMolecules = 1

export function prepPharmacophore(
  restPharmacophore: IRestPharmacophoreContainer,
  index: number
) {
  const container = restPharmacophore as IPharmacophoreContainer
  container.visible = index < initialShownMolecules
  container.pharmacophore.visible = true
  container.pharmacophore.solid = index < initialShownMolecules
  container.ligandColor = '#32CD32'
  if (index < initialShownMolecules) {
    container.ligandColor = '#FF8C00'
  }
  if (container.protein) {
    container.protein.visible = true
    container.protein.proteinVisible = true
    container.protein.hasHetero = detectHetero(container.protein)
    container.protein.pocketVisible = container.protein.hasHetero
    container.protein.hetVisible = container.protein.hasHetero
  }
  if (container.ligand) {
    container.ligand.visible = true
  }
  return container
}

export function fetchPharmacophores(url = '/api/pharmacophores') {
  return fetch(url)
    .then(processStatus)
    .then<IRestPharmacophoreContainer[]>(response => response.json())
    .then<IPharmacophoreContainer[]>(restPharmacophores =>
      restPharmacophores.map(prepPharmacophore)
    )
}

export function fetchHiLitePharmacophores(url = '/api/pharmacophores/hilite') {
  return fetch(url)
    .then(processStatus)
    .then<string[]>(response => response.json())
}

export function submitHiLitePharmacophores(
  highlighted: string[],
  url = '/api/pharmacophores/hilite'
) {
  const init = {
    body: JSON.stringify(highlighted),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST'
  }
  return fetch(url, init).then(processStatus)
}
