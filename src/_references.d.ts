
/* 3Dmol definitions begin */

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
  setStyle(sel: any, style: any): void;
  setColorByFunction(sel: any, func: Function): void;
}

interface GLViewer {
  addSphere(spec: SphereSpec): GLShape;
  zoomTo(): void;
  render(): void;
  zoom(factor: number, animationDuration: number): void;
  setBackgroundColor(hex: number, alpha?: number): void;
  addModel(data: string, format: string): GLModel;
}

interface $3DmolStatic {
  createViewer(element: any, config: any): GLViewer;
}

declare module '3dmol/3Dmol.js' {
  export = $3Dmol;
}
declare var $3Dmol: {$3Dmol: $3DmolStatic};

/* 3Dmol definitions end */
