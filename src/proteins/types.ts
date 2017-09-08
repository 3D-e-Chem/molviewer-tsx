import { IMolecule, IRestAnonymousMolecule, IToggleable } from '../types'

export interface IProteinToggles {
  hasHetero: boolean
  hetVisible: boolean
  proteinVisible: boolean
  pocketVisible: boolean
}

export interface IAnonymousProtein
  extends IRestAnonymousMolecule,
    IToggleable,
    IProteinToggles {}

export interface IProtein extends IMolecule, IProteinToggles {}
