
declare module 'ngl' {
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
        getParameter(): void;
        setVisibility(value: boolean): void;
    }

    class Structure {
        getAtomSet(selection: Selection): TypedFastBitSet;
        getAtomSetWithinGroup(selection: TypedFastBitSet): TypedFastBitSet;
        getAtomSetWithinSelection(selection: Selection, radius: number): TypedFastBitSet;
    }

    class TypedFastBitSet {
        toSeleString(): string;
        new_difference(map: TypedFastBitSet): TypedFastBitSet;
    }

    class Selection{
        constructor(selection: string);
        parse(string: string): string;
    }

    class StructureComponent {
        structure: Structure;
        setVisibility(value: boolean): void;
        autoView(duration?: number): void;
        addRepresentation(type: string, params: any): RepresentationComponent;
    }

    class Stage {
        constructor(eid: string, params?: StageParameters);
        loadFile(path: String|File|Blob, params: loadFileParameters): Promise<StructureComponent>;
        remove(component: StructureComponent): void;
    }
}
