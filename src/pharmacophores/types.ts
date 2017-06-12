export interface IRestPharmacophore {
    id: string;
    label: string;
    pharmacophore: string;
    pharmacophoreFormat: string;
    protein: string;
    proteinFormat: string;
    ligand: string;
    ligandFormat: string;
}

export interface IPharmacophore extends IRestPharmacophore {
    ligandVisible: boolean;
    pocketVisible: boolean;
    proteinVisible: boolean;
    visible: boolean;
}
