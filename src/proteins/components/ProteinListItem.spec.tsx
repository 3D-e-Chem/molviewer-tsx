import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import { IProteinListItemProps, ProteinListItem } from './ProteinListItem';

describe('<ProteinListItem/>', () => {
    describe('render', () => {
        let wrapper: ShallowWrapper<IProteinListItemProps, {}>;
        let props: IProteinListItemProps;
        const nrOfButtons = 3;

        beforeEach(() => {
            props = {
                data: '...',
                format: 'sdf',
                hetVisible: true,
                id: 'id1',
                label: 'label1',
                onHeteroVisibilityClick: jest.fn(),
                onPocketVisibilityClick: jest.fn(),
                onProteinVisibilityClick: jest.fn(),
                pocketVisible: true,
                visible: true
            };
            wrapper = shallow(<ProteinListItem {...props} />);
        });

        it('should contain buttons', () => {
            expect(wrapper.find('Button').length).toBe(nrOfButtons);
        });

        it('should have eye-open as glyph for all buttons', () => {
            expect(wrapper.find({glyph: 'eye-open'}).length).toBe(nrOfButtons);
        });

        describe('click All button', () => {
            beforeEach(() => {
                const button = wrapper.find({title: 'All'});
                button.simulate('click');
            });

            it('should call onProteinVisibilityClick()', () => {
                expect(props.onProteinVisibilityClick).toBeCalledWith('id1');
            });
        });

        describe('click Hetero button', () => {
            beforeEach(() => {
                const button = wrapper.find({title: 'Hetero'});
                button.simulate('click');
            });

            it('should call onHeteroVisibilityClick()', () => {
                expect(props.onHeteroVisibilityClick).toBeCalledWith('id1');
            });
        });

        describe('click Pocket button', () => {
            beforeEach(() => {
                const button = wrapper.find({title: 'Pocket'});
                button.simulate('click');
            });

            it('should call onPocketVisibilityClick()', () => {
                expect(props.onPocketVisibilityClick).toBeCalledWith('id1');
            });
        });
    });
});
