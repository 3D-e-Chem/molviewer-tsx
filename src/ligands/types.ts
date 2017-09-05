export interface IRestLigand {
  readonly id: string;
  readonly label: string;
  readonly data: string;
  readonly format: string;
}

export interface ILigand extends IRestLigand {
  visible: boolean;
  color: string;
}
