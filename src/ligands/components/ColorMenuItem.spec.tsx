import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import { Glyphicon } from 'react-bootstrap';

import { EmptyGlyphIcon } from '../../components/EmptyGlyphIcon';
import { ColorMenuItem, IProps } from './ColorMenuItem';

describe('<ColorMenuItem/>', () => {
    describe('render', () => {
        let props: IProps;
        let wrapper: ShallowWrapper<IProps, {}>;

        describe('blue and unchecked', () => {
            beforeEach(() => {
                props = {
                    checked: false,
                    color: 'blue',
                    onClick: jest.fn()
                };
                wrapper = shallow(<ColorMenuItem {...props}/>);
            });

            it('should have blue span', () => {
                const span = wrapper.find('span').first();
                expect(span).toBeTruthy();
                const style = span.props().style;
                if (style === undefined) {
                    return fail('Span as no style');
                }
                expect(style.backgroundColor).toEqual('blue');
            });

            it('should not be checked', () => {
                expect(wrapper.contains(<EmptyGlyphIcon/>)).toBeTruthy();
            });

            describe('onClick()', () => {
                beforeEach(() => {
                    wrapper.simulate('click');
                });

                it('Should call props.onClick with blue', () => {
                    expect(props.onClick).toBeCalledWith('blue');
                });
            });
        });

        describe('checked', () => {
            beforeEach(() => {
                props = {
                    checked: true,
                    color: 'blue',
                    onClick: jest.fn()
                };
                wrapper = shallow(<ColorMenuItem {...props}/>);
            });

            it('should not be checked', () => {
                expect(wrapper.contains(<Glyphicon glyph="ok"/>)).toBeTruthy();
            });
        });
    });
});
