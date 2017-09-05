import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import { IProps, LigandsViewer } from './LigandsViewer';

describe('<LigandsViewer/>', () => {
    let props: IProps;
    describe('componentDidMount()', () => {
        beforeEach(() => {
            props = {
                fetchLigands: jest.fn(),
                ligands: [],
                pageLoaded: jest.fn()
            };

            const comp = new LigandsViewer(props);
            comp.componentDidMount();
        });

        it('should call props.fetchLigands()', () => {
            expect(props.fetchLigands).toBeCalled();
        });

        it('should call props.pageLoaded()', () => {
            expect(props.pageLoaded).toBeCalled();
        });
    });

    describe('render()', () => {
        let wrapper: ShallowWrapper<IProps, {}>;

        beforeEach(() => {
            props = {
                fetchLigands: jest.fn(),
                ligands: [],
                pageLoaded: jest.fn()
            };

            wrapper = shallow(<LigandsViewer {...props}/>);
        });

        it('should have igand in title', () => {
            expect(wrapper.prop('title')).toContain('igand');
        });
    });
});
