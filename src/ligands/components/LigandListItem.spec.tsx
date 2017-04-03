import * as React from 'react';

import { shallow } from 'enzyme';

import { LigandListItem } from './LigandListItem';

describe('<LigandListItem />', () => {
    describe('render', () => {
        it('should contain single button', () => {
            const props = {
                data: '...',
                format: 'sdf',
                id: 'id1',
                label: 'label1',
                onVisibilityClick: (id: string) => {
                    expect(id).toEqual('id1');
                },
                visible: true
            };

            const wrapper = shallow(<LigandListItem {...props} />);

            expect(wrapper.find('Button').length).toBe(1);
        });
    });
});
