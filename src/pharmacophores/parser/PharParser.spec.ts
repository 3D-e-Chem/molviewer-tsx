import { PharParser } from './PharParser';

describe('PharParser', () => {
    describe('parse()', () => {
        it('contains no normal should return shape with spheres only', () => {
            const stream = {
                // tslint:disable-next-line:no-multiline-string
                asText: () => `3j7u_NDP_frag24
HACC -12.3137 -2.9070 -79.0147 0 0 0 0 0
HDON -7.1816 -12.2903 -73.6785 0 0 0 0 0
AROM -15.7387 -6.3084 -73.5406 0 0 0 0 0
POSC -19.2425 -4.7298 -77.6851 0 0 0 0 0
LIPO -10.0140 -7.0397 -73.6983 0 0 0 0 0
$$$$
`
            };
            const parser = new PharParser(stream, {});
            const shapes = parser.parse();
            expect(shapes.size).toEqual(5);
            expect(Array.from(shapes.keys())).toEqual(expect.arrayContaining(['HACC', 'HDON', 'AROM', 'POSC', 'LIPO']));
            const hacc = shapes.get('HACC');
            if (hacc) {
                expect(hacc.name).toEqual('3j7u_NDP_frag24');
                expect(hacc.sphereName).toEqual(expect.arrayContaining(['HACC']));
                expect(hacc.getBufferList().length).toEqual(1);
            }
        });
    });
});
