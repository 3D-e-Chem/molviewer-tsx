export interface IRestLigand {
  id: string;
  label: string;
  data: string;
  format: string;
}

export interface ILigand extends IRestLigand {
  visible: boolean;
}
