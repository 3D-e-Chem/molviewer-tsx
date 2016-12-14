import * as React from 'react';

import { shallow } from 'enzyme';

import { NoMatch } from './NoMatch';

describe('<NoMatch />', () => {
    it('should countain link to ligands and proteins viewer', () => {
        const wrapper = shallow(<NoMatch/>);
        expect(wrapper.find('Link').prop('to')).toEqual('/ligands-and-proteins');
    });
});
