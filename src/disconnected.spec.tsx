import * as chai from 'chai';
import { ShallowWrapper, shallow  } from 'enzyme';
import * as React from 'react';

import { Modal } from 'react-bootstrap';

import { DisconnectedModal, IProps } from './disconnected';

describe('<DisconnectedModal />', () => {
    describe('when connected', () => {
        let wrapper: ShallowWrapper<IProps, {}>;
        beforeEach(() => {
            wrapper = shallow(<DisconnectedModal connected={true}/>);
        });

        it('should be hidden', () => {
            chai.expect(wrapper.find(Modal).prop('show')).to.be.false;
        });

    });

    describe('when disconnected', () => {
        let wrapper: ShallowWrapper<IProps, {}>;
        beforeEach(() => {
            wrapper = shallow(<DisconnectedModal connected={false}/>);
        });

        it('should display warning text', () => {
            chai.expect(wrapper.contains(<span>Disconnected from KNIME</span>)).to.be.true;
        });
    });
});
