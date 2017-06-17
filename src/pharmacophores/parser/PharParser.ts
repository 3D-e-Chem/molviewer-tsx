import { ParserRegistry, Shape, Streamer } from 'ngl';
import { Color, Vector3 } from 'three';

import { pharmacophoreFunctionalTypes } from '../types';

const DEFAULT_RADIUS = 0.7;
const DEFAULT_NORMAL_RADIUS = 0.35;

interface ICODE2COLOR {
    [key: string]: Color;
}

const CODE2COLOR: ICODE2COLOR = {};
pharmacophoreFunctionalTypes.forEach((d) => CODE2COLOR[d.label] = new Color(d.color));

export class PharParser {
    streamer: Streamer;
    name: string;
    path: string;

    constructor(streamer: Streamer, params: any) {
        this.streamer = streamer;
        this.name = params.name;
        this.path = params.path;
    }

    get type() { return 'phar'; }
    get __objName() { return 'phar'; }

    parse() {
        let shape = new Shape('');
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
                shape = new Shape(line);
            } else {
                const cols = line.split(/\s/);
                const name = cols[0];
                const pos = new Vector3(
                    parseFloat(cols[1]),
                    parseFloat(cols[2]),
                    parseFloat(cols[3])
                );
                let radius = DEFAULT_RADIUS;
                if (cols[4] !== '0') {
                    radius = parseFloat(cols[4]);
                }
                const color = CODE2COLOR[name];
                shape.addSphere(
                    pos,
                    color,
                    radius,
                    name
                );
                if (cols[5] === '1') {
                    const normal = new Vector3(
                        parseFloat(cols[6]),
                        parseFloat(cols[7]),
                        parseFloat(cols[8])
                    );
                    // move arrow on top of sphere surface
                    const offset = normal.clone().add(normal.clone().sub(pos));
                    shape.addArrow(
                        normal,
                        offset,
                        color,
                        DEFAULT_NORMAL_RADIUS,
                        name
                    );
                }
            }
        });
        return shape;
    }

}

ParserRegistry.add('phar', PharParser);
