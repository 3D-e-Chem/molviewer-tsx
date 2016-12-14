import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import { ListActions } from '../../components/ListActions';
import { IDispatchProps, IProps, LigandList } from './LigandList';
import { LigandListItem } from './LigandListItem';

describe('<LigandList />', () => {
    describe('render', () => {
        let clickers: IDispatchProps;
        let wrapper: ShallowWrapper<IProps, {}>;

        beforeEach(() => {
            clickers = {
                onVisibilityClick: jest.fn(),
                onHideAllClick: jest.fn(),
                onHiLiteShownClick: jest.fn(),
                onShowAllClick: jest.fn()
            };
        });

        describe('zero items', () => {
            beforeEach(() => {
                const comp = <LigandList
                    ligands={[]}
                    height="100%"
                    onVisibilityClick={clickers.onVisibilityClick}
                    onHideAllClick={clickers.onHideAllClick}
                    onHiLiteShownClick={clickers.onHiLiteShownClick}
                    onShowAllClick={clickers.onShowAllClick}
                />;
                wrapper = shallow(comp);
            });

            it('should contain a header', () => {
                expect(wrapper.contains(<h5>Ligands</h5>)).toBeTruthy();
            });

            it('should contain no LigandListItem', () => {
                expect(wrapper.find(LigandListItem).length).toEqual(0);
            });

            it('should have no list actions', () => {
                expect(wrapper.find(ListActions).length).toEqual(0);
            });
        });

        describe('single item', () => {
            beforeEach(() => {
                const ligands = [{
                    id: 'id1',
                    label: 'label1',
                    visible: true,
                    format: 'sdf',
                    data: '...'
                }];
                const comp = <LigandList
                    ligands={ligands}
                    height="100%"
                    onVisibilityClick={clickers.onVisibilityClick}
                    onHideAllClick={clickers.onHideAllClick}
                    onHiLiteShownClick={clickers.onHiLiteShownClick}
                    onShowAllClick={clickers.onShowAllClick}
                />;
                wrapper = shallow(comp);
            });

            it('should contain a header', () => {
                expect(wrapper.contains(<h5>Ligands</h5>)).toBeTruthy();
            });

            it('should contain single LigandListItem', () => {
                expect(wrapper.find(LigandListItem).length).toEqual(1);
            });

            it('should have no list actions', () => {
                expect(wrapper.find(ListActions).length).toEqual(0);
            });
        });

        describe('two items', () => {
            beforeEach(() => {
                const ligands = [{
                    id: 'id1',
                    label: 'label1',
                    visible: true,
                    format: 'sdf',
                    data: '...'
                }, {
                    id: 'id2',
                    label: 'label2',
                    visible: false,
                    format: 'sdf',
                    data: '...'
                }];
                const comp = <LigandList
                    ligands={ligands}
                    height="100%"
                    onVisibilityClick={clickers.onVisibilityClick}
                    onHideAllClick={clickers.onHideAllClick}
                    onHiLiteShownClick={clickers.onHiLiteShownClick}
                    onShowAllClick={clickers.onShowAllClick}
                />;
                wrapper = shallow(comp);
            });

            it('should contain a header', () => {
                expect(wrapper.contains(<h5>Ligands</h5>)).toBeTruthy();
            });

            it('should contain two LigandListItem', () => {
                expect(wrapper.find(LigandListItem).length).toEqual(2);
            });

            it('should have list actions', () => {
                expect(wrapper.find(ListActions).length).toEqual(1);
            });
        });
    });
});
