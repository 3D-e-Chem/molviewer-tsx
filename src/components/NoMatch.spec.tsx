import * as React from 'react';

import { shallow } from 'enzyme';

import { NoMatch } from './NoMatch';

describe('<NoMatch />', () => {
    it('should countain link to ligands and proteins viewer and pharmacophores viewer', () => {
        const wrapper = shallow(<NoMatch/>);
        expect(wrapper.find('Link').map((p) => p.prop('to'))).toEqual(expect.arrayContaining([
            '/ligands-and-proteins',
            '/pharmacophores'
        ]));
    });
});
