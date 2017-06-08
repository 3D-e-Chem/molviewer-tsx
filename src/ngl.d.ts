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

    class Component {
        setVisibility(value: boolean): void;
        autoView(duration?: number): void;
        addRepresentation(type: string, params: any): RepresentationComponent;
    }

    class StructureComponent extends Component {
        structure: Structure;
    }

    class Stage {
        constructor(eid: string, params?: StageParameters);
        loadFile(path: String|File|Blob, params: loadFileParameters): Promise<StructureComponent>;
        remove(component: Component): void;
    }

    class ParserRegistry {
        add(key: string, value: any): void;
    }

    class Streamer {
        asText(): string;
    }

    class Shape {
        name: string;
        sphereName: string[];
        constructor(name: string);
        addArrow(position1: [number, number, number], position2: [number, number, number], color: [number, number, number], radius: number, name: string): void;
        addSphere(position: [number, number, number], color: [number, number, number], radius: number, name: string): void;
    }
}
