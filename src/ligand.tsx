// TODO rename file to ligand.d.ts, but import gets defaultExtension (.tsx) appended

export interface IRestLigand {
  id: string;
  label: string;
  data: string;
}

export interface ILigand extends IRestLigand {
  visible: boolean;
}
