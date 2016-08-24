
/* 3Dmol definitions begin */

// TODO Move to own repo and install with `typings install github:3d-e-chem/3dmol-d.ts`
// so need to add typings.json file

interface SphereSpec {
  radius: number;
  color: string;
}

interface AtomSpec {
  ss: string;
}

interface GLShape {
  addSphere(spec: SphereSpec): GLShape;
}

interface GLModel {
  setStyle(sel: any, style: any, add: boolean): void;
  setStyle(sel: any, style: any): void;
  setStyle(style: any): void;
  setColorByFunction(sel: any, func: Function): void;
  hide(): void;
  show(): void;
}

interface GLViewer {
  addSphere(spec: SphereSpec): GLShape;
  zoomTo(): void;
  render(): void;
  zoom(factor: number, animationDuration: number): void;
  setBackgroundColor(hex: number, alpha?: number): void;
  addModel(data: string, format: string): GLModel;
  setViewStyle(style: any): void;
}

interface ssColors {
  pyMol: Object;
  Jmol: Object;
}

interface $3DmolStatic {
  createViewer(element: any, config: any): GLViewer;
  ssColors: ssColors;
}

declare module '3dmol/3Dmol.js' {
  export = $3Dmol;
}
declare var $3Dmol: {$3Dmol: $3DmolStatic};

/* 3Dmol definitions end */
