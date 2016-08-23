
/* 3Dmol definitions begin */

interface SphereSpec {
  radius: number;
  color: string;
}

interface GLShape {
  addSphere(spec: SphereSpec): GLShape;
}

interface GLViewer {
  addSphere(spec: SphereSpec): GLShape;
  zoomTo(): void;
  render(): void;
  zoom(factor: number, animationDuration: number): void;
}

interface $3DmolStatic {
  createViewer(element: any, config: any): GLViewer;
}

declare module '3dmol/3Dmol.js' {
  export = $3Dmol;
}
declare var $3Dmol: {$3Dmol: $3DmolStatic};

/* 3Dmol definitions end */
