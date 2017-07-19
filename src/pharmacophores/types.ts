import { IAnonymousProtein } from '../proteins';
import { IAnonymousMolecule, IRestAnonymousMolecule } from '../types';

export interface IRestPharmacophoreContainer {
    readonly id: string;
    readonly label: string;
    readonly pharmacophore: IRestAnonymousMolecule;
    readonly protein?: IRestAnonymousMolecule;
    readonly ligand?: IRestAnonymousMolecule;
    readonly transform?: number[];
}

export interface IPharmacophore extends IAnonymousMolecule {
    solid: boolean;
}

export interface IPharmacophoreContainer {
    id: string;
    label: string;
    pharmacophore: IPharmacophore;
    protein?: IAnonymousProtein;
    ligand?: IAnonymousMolecule;
    visible: boolean;
    transform?: number[];
    ligandColor: string;
}

export interface IPharmacophoreFunctionalType {
    label: string;
    description: string;
    color: string;
    checked: boolean;
}

// tslint:disable-next-line:no-suspicious-comment
// TODO pick nice colors
export const pharmacophoreFunctionalTypes: IPharmacophoreFunctionalType[] = [{
    checked: true,
    color: 'yellow',
    description: 'Aromatic ring',
    label: 'AROM'
}, {
    checked: true,
    color: 'gray',
    description: 'Exclusion sphere',
    label: 'EXCL'
}, {
    checked: true,
    color: 'fuchsia',
    description: 'Hydrogen bond acceptor',
    label: 'HACC'
}, {
    checked: true,
    color: 'aqua',
    description: 'Hydrogen bond donor',
    label: 'HDON'
}, {
    checked: true,
    color: '#f781bf',
    description: 'Hydrogen bond donor and acceptor',
    label: 'HYBH'
}, {
    checked: true,
    color: 'greenyellow',
    description: 'Aromatic and lipophilic',
    label: 'HYBL'
}, {
    checked: true,
    color: 'green',
    description: 'Lipophilic region',
    label: 'LIPO'
}, {
    checked: true,
    color: 'red',
    description: 'Negative charge center',
    label: 'NEGC'
}, {
    checked: true,
    color: 'blue',
    description: 'Positive charge center',
    label: 'POSC'
}];
