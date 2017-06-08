import { ParserRegistry, Shape, Streamer } from 'ngl';

const DEFAULT_RADIUS = 4.0;

interface ICODE2COLOR {
    [key: string]: [number, number, number];
}

// tslint:disable-next-line:no-suspicious-comment
// TODO pick nice colors
const CODE2COLOR: ICODE2COLOR = {
    AROM: [1.0, 0.0, 0.0],
    EXCL: [1.0, 0.0, 0.0],
    HACC: [0.0, 1.0, 0.0],
    HDON: [0.0, 1.0, 0.0],
    HYBH: [1.0, 1.0, 0.0],
    HYBL: [1.0, 1.0, 0.0],
    LIPO: [1.0, 0.0, 1.0],
    NEGC: [0.0, 0.0, 1.0],
    POSC: [0.0, 0.0, 1.0]
};

export class PharParser {
    streamer: Streamer;
    name: string;
    path: string;
    shape: Shape;

    constructor(streamer: Streamer, params: any) {
        this.streamer = streamer;
        this.name = params.name;
        this.path = params.path;
    }

    get type (){ return 'phar'; }
    get __objName (){ return 'phar'; }

    parse() {
        const text = this.streamer.asText();
        const lines = text.split('\n');
        lines.forEach((line, index) => {
            if (line.startsWith('$$$$')) {
                // End of record
            } else if (line.startsWith('#')) {
                // Skip comments
            } else if (line === '') {
                // Last line
            } else if (index === 0) {
                this.shape = new Shape(line);
            } else {
                const cols = line.split(' ');
                const name = cols[0];
                const pos: [number, number, number] = [
                    parseFloat(cols[1]),
                    parseFloat(cols[2]),
                    parseFloat(cols[3])
                ];
                let radius = DEFAULT_RADIUS;
                if (cols[4] === '0') {
                    radius = parseFloat(cols[4]);
                }
                const color = CODE2COLOR[name];
                this.shape.addSphere(
                    pos,
                    color,
                    radius,
                    name
                );
                if (cols[5] === '1') {
                    const pos2: [number, number, number] = [
                        parseFloat(cols[6]),
                        parseFloat(cols[7]),
                        parseFloat(cols[8])
                    ];
                    this.shape.addArrow(
                        pos,
                        pos2,
                        color,
                        radius, // Use different radius for arrow maybe?
                        name
                    );
                }
            }
        });
        return this.shape;
    }

}

ParserRegistry.add('phar', PharParser);
