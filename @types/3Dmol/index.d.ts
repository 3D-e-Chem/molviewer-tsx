
declare namespace $3Dmol {
    module $3Dmol {
        function createViewer(element: any, config: any): GLViewer;
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
            removeModel(model: GLModel): void;
            setViewStyle(style: any): void;
        }

        interface ssColors {
            pyMol: Object;
            Jmol: Object;
        }

        interface $3DmolStatic {
        }
    }
}

declare module '3Dmol' {
    export = $3Dmol;
}
