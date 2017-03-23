import * as React from 'react';

import { CommonWrapper, shallow } from 'enzyme';

import { IDispatchProps, NavBar } from './NavBar';

describe('<NavBar />', () => {
    describe('render', () => {
        let wrapper: CommonWrapper<any, {}>;
        let clickers: IDispatchProps;

        beforeEach(() => {
            clickers = {
                serverDisconnect: jest.fn(),
                serverModelChanged: jest.fn()
            };
            const comp = <NavBar
                title="My title"
                serverDisconnect={clickers.serverDisconnect}
                serverModelChanged={clickers.serverModelChanged}
            />;
            wrapper = shallow(comp);
        });

        it('should have a title', () => {
            expect(wrapper.text()).toContain('My title');
        });

        it('should not have Disconnect button in test environment', () => {
            expect(wrapper.find('[title="Refresh"]').isEmpty()).toBeTruthy();
        });

        it('should not have Refresh button in test environment', () => {
            expect(wrapper.find('[title="Refresh"]').isEmpty()).toBeTruthy();
        });
    });
});
