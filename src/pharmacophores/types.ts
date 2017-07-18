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
}

export interface IPharmacophoreFunctionalType {
    label: string;
    description: string;
    color: string;
}

// tslint:disable-next-line:no-suspicious-comment
// TODO pick nice colors
export const pharmacophoreFunctionalTypes: IPharmacophoreFunctionalType[] = [{
    color: 'yellow',
    description: 'Aromatic ring',
    label: 'AROM'
}, {
    color: 'gray',
    description: 'Exclusion sphere',
    label: 'EXCL'
}, {
    color: 'fuchsia',
    description: 'Hydrogen bond acceptor',
    label: 'HACC'
}, {
    color: 'aqua',
    description: 'Hydrogen bond donor',
    label: 'HDON'
}, {
    color: '#f781bf',
    description: 'Hydrogen bond donor and acceptor',
    label: 'HYBH'
}, {
    color: 'greenyellow',
    description: 'Aromatic and lipophilic',
    label: 'HYBL'
}, {
    color: 'green',
    description: 'Lipophilic region',
    label: 'LIPO'
}, {
    color: 'red',
    description: 'Negative charge center',
    label: 'NEGC'
}, {
    color: 'blue',
    description: 'Positive charge center',
    label: 'POSC'
}];
