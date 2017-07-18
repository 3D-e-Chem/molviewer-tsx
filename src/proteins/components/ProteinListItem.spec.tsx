import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import { IProteinListItemProps, ProteinListItem } from './ProteinListItem';

describe('<ProteinListItem/>', () => {
    describe('render', () => {
        let wrapper: ShallowWrapper<IProteinListItemProps, {}>;
        let props: IProteinListItemProps;

        beforeEach(() => {
            props = {
                data: '...',
                format: 'sdf',
                hasHetero: true,
                hetVisible: true,
                id: 'id1',
                label: 'label1',
                onHeteroVisibilityClick: jest.fn(),
                onPocketVisibilityClick: jest.fn(),
                onProteinVisibilityClick: jest.fn(),
                onWholeProteinVisibilityClick: jest.fn(),
                pocketVisible: true,
                proteinVisible: true,
                visible: true
            };
            wrapper = shallow(<ProteinListItem {...props} />);
        });

        it('should contain buttons', () => {
            expect(wrapper.find('Button').length).toBe(1);
        });

        it('should have eye-open as glyph for all button and 3 menu items', () => {
            expect(wrapper.find({glyph: 'eye-open'}).length).toBe(4);
        });

        it('should contain 3 menu items', () => {
            expect(wrapper.find('MenuItem').length).toBe(3);
        });

        describe('click All button', () => {
            beforeEach(() => {
                const button = wrapper.find({title: 'Hide all'});
                button.simulate('click');
            });

            it('should call onWholeProteinVisibilityClick()', () => {
                expect(props.onWholeProteinVisibilityClick).toBeCalledWith('id1');
            });
        });

        describe('select Structure menu', () => {
            beforeEach(() => {
                const button = wrapper.find({title: 'Hide structure'});
                button.simulate('select');
            });

            it('should call onProteinVisibilityClick()', () => {
                expect(props.onProteinVisibilityClick).toBeCalledWith('id1');
            });
        });

        describe('select Hetero menu', () => {
            beforeEach(() => {
                const button = wrapper.find({title: 'Hide hetero'});
                button.simulate('select');
            });

            it('should call onHeteroVisibilityClick()', () => {
                expect(props.onHeteroVisibilityClick).toBeCalledWith('id1');
            });
        });

        describe('select Pocket menu', () => {
            beforeEach(() => {
                const button = wrapper.find({title: 'Hide pocket'});
                button.simulate('select');
            });

            it('should call onPocketVisibilityClick()', () => {
                expect(props.onPocketVisibilityClick).toBeCalledWith('id1');
            });
        });
    });
});
