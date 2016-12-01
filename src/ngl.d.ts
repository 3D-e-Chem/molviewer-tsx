
declare namespace NGL {
    interface StageParameters {
        backgroundColor: string;
    }

    interface loadFileParameters {
        ext: string;
    }

    namespace ColorMakerRegistry {
        function getScheme(schemeId: string, params?: any): any;
        function addScheme(scheme: any, schemeId: string): void;
    }

    class RepresentationComponent {
        setVisibility(value: boolean): void;
    }

    class StructureComponent {
        setVisibility(value: boolean): void;
        centerView(): void;
        addRepresentation(type: string, params: any): RepresentationComponent;
    }

    class Stage {
        constructor(eid: string, params?: StageParameters);
        loadFile(path: String|File|Blob, params: loadFileParameters): Promise<StructureComponent>;
        remove(component: StructureComponent): void;
    }
}