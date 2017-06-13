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
    color: '#00ffff',
    description: 'Aromatic ring',
    label: 'AROM'
}, {
    color: 'green',
    description: 'Exclusion sphere',
    label: 'EXCL'
}, {
    color: '#bfbfbf',
    description: 'Hydrogen bond acceptor',
    label: 'HACC'
}, {
    color: '#00ff00',
    description: 'Hydrogen bond donor',
    label: 'HDON'
}, {
    color: 'yellow',
    description: 'Hydrogen bond donor and acceptor',
    label: 'HYBH'
}, {
    color: 'purple',
    description: 'Aromatic and lipophilic',
    label: 'HYBL'
}, {
    color: 'pink',
    description: 'Lipophilic region',
    label: 'LIPO'
}, {
    color: '#376092',
    description: 'Negative charge center',
    label: 'NEGC'
}, {
    color: '#ff9933',
    description: 'Positive charge center',
    label: 'POSC'
}];
