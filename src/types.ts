export interface IRestAnonymousMolecule {
    readonly data: string;
    readonly format: string;
}

export interface ILabel {
    readonly id: string;
    readonly label: string;
}

export interface IRestMolecule extends IRestAnonymousMolecule, ILabel {

}

export interface IToggleable {
    visible: boolean;
}

export interface IAnonymousMolecule extends IRestAnonymousMolecule, IToggleable {
}

export interface IMolecule extends IRestMolecule, IToggleable {

}
