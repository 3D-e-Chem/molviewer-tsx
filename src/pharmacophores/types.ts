export interface IRestPharmacophore {
    id: string;
    label: string;
    pharmacophore: string;
    pharmacophoreFormat: string;
    protein?: string;
    proteinFormat?: string;
    ligand?: string;
    ligandFormat?: string;
}

export interface IPharmacophore extends IRestPharmacophore {
    ligandVisible: boolean;
    pocketVisible: boolean;
    proteinVisible: boolean;
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
