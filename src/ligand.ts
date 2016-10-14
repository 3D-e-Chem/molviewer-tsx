export class RestLigand {
    public id: string;
    public label: string;
    public data: string;
}

export class Ligand extends RestLigand {
    public visible: boolean;
}
