import {expect} from 'chai';

import {HelloWorld} from './hello';

describe('hello', () => {
    describe('saying()', () => {
        it('should return hello world', () => {
            const hello = new HelloWorld();
            const expected = 'Hello World!';
            expect(hello.saying()).to.equals(expected);
        });
    });
});
