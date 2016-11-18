/* tslint:disable */

declare namespace $3Dmol {
    function createViewer(element: any, config: any): IGLViewer;
    interface ISphereSpec {
        radius: number;
        color: string;
    }

    interface IAtomSpec {
        ss: string;
    }

    interface IGLShape {
        addSphere(spec: ISphereSpec): IGLShape;
    }

    interface IGLModel {
        setStyle(sel: any, style: any, add: boolean): void;
        setStyle(sel: any, style: any): void;
        setStyle(style: any): void;
        setColorByFunction(sel: any, func: Function): void;
        hide(): void;
        show(): void;
    }

    interface IGLViewer {
        addSphere(spec: ISphereSpec): IGLShape;
        zoomTo(): void;
        render(): void;
        zoom(factor: number, animationDuration: number): void;
        setBackgroundColor(hex: number, alpha?: number): void;
        addModel(data: string, format: string): IGLModel;
        removeModel(model: IGLModel): void;
        setViewStyle(style: any): void;
    }

    namespace ssColors {
        const pyMol: Object;
        const Jmol: Object;
    }
}
