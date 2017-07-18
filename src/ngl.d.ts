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
        setTransform(m: THREE.Matrix4): void;
        setParameters(params: any): void;
    }

    class Structure {
        getAtomSet(selection: Selection): TypedFastBitSet;
        getAtomSetWithinGroup(selection: TypedFastBitSet): TypedFastBitSet;
        getAtomSetWithinSelection(selection: Selection, radius: number): TypedFastBitSet;
    }

    class TypedFastBitSet {
        toSeleString(): string;
        difference(map: TypedFastBitSet): TypedFastBitSet;
    }

    class Selection{
        constructor(selection: string);
        parse(string: string): string;
    }

    class Component {
        setVisibility(value: boolean): void;
        autoView(duration?: number): void;
        addRepresentation(type: string, params?: any): RepresentationComponent;
        removeAllRepresentations(): void;
        setTransform(matrix: THREE.Matrix4): void;
    }

    class StructureComponent extends Component {
        structure: Structure;
    }

    class Stage {
        constructor(eid: string, params?: StageParameters);
        loadFile(path: String|File|Blob, params: loadFileParameters): Promise<Component>;
        remove(component: Component): void;
        addComponentFromObject(object: any, params: any): Component;
    }

    namespace ParserRegistry {
        function add(key: string, value: any): void;
    }

    class Streamer {
        asText(): string;
    }

    class Shape {
        name: string;
        sphereName: string[];
        constructor(name: string);
        addArrow(position1: [number, number, number] | THREE.Vector3, position2: [number, number, number] | THREE.Vector3, color: [number, number, number] | THREE.Color, radius: number, name: string): void;
        addSphere(position: [number, number, number] | THREE.Vector3, color: [number, number, number] | THREE.Color, radius: number, name: string): void;
    }
}
