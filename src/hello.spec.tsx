// TODO get rid of mocha reference, but is required for describe(), it() globals 
/// <reference path="../jspm_packages/npm/@types/mocha@2.2.32/index.d.ts" />
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
