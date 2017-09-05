import * as React from 'react';

import { shallow } from 'enzyme';

import { EmptyGlyphIcon } from './EmptyGlyphIcon';

describe('<EmptyGlyphIcon/>', () => {
    it('should render a styled span', () => {
        const wrapper = shallow(<EmptyGlyphIcon/>);

        const html = wrapper.html();

        const expected = '<span style="display:inline-block;width:14px;"></span>';
        expect(html).toEqual(expected);
    });
});
