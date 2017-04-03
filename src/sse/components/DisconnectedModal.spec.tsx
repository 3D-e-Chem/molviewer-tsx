import * as chai from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { Modal } from 'react-bootstrap';

import { DisconnectedModal, IProps } from './DisconnectedModal';

describe('<DisconnectedModal />', () => {
    describe('when connected', () => {
        let wrapper: ShallowWrapper<IProps, {}>;
        beforeEach(() => {
            wrapper = shallow(<DisconnectedModal connected={true}/>);
        });

        it('should be hidden', () => {
            chai.expect(wrapper.find(Modal).prop('show')).to.equal(false, 'expected modal to be hidden');
        });

    });

    describe('when disconnected', () => {
        let wrapper: ShallowWrapper<IProps, {}>;
        beforeEach(() => {
            wrapper = shallow(<DisconnectedModal connected={false}/>);
        });

        it('should display warning text', () => {
            const target = wrapper.contains(<span>Disconnected from KNIME</span>);
            chai.expect(target).to.equal(true, 'expected modal to be shown');
        });
    });
});
