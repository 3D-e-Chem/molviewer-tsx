interface IRestAnonymousMolecule {
    data: string;
    format: string;
}

export interface IRestPharmacophoreContainer {
    id: string;
    label: string;
    pharmacophore: IRestAnonymousMolecule;
    protein?: IRestAnonymousMolecule;
    ligand?: IRestAnonymousMolecule;
}

interface IAnonymousMolecule extends IRestAnonymousMolecule {
    visible: true;
}

interface IPharmacophore extends IAnonymousMolecule {
    solid: boolean;
}

export interface IProtein extends IAnonymousMolecule {
    hasHetero: boolean;
    ligandVisible: boolean;
    pocketVisible: boolean;
}

export interface IPharmacophoreContainer {
    id: string;
    label: string;
    pharmacophore: IPharmacophore;
    protein?: IProtein;
    ligand?: IAnonymousMolecule;
    visible: boolean;
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
