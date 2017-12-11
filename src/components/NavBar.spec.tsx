import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { IDispatchProps, NavBar } from './NavBar'

describe('<NavBar />', () => {
  describe('render', () => {
    let wrapper: ShallowWrapper<any, {}>
    let clickers: IDispatchProps

    beforeEach(() => {
      clickers = {
        onCenter: jest.fn(),
        serverDisconnect: jest.fn(),
        serverModelChanged: jest.fn()
      }
      const comp = (
        <NavBar
          title="My title"
          onCenter={clickers.onCenter}
          serverDisconnect={clickers.serverDisconnect}
          serverModelChanged={clickers.serverModelChanged}
        />
      )
      wrapper = shallow(comp)
    })

    it('should have a title', () => {
      expect(wrapper.text()).toContain('My title')
    })

    it('should not have Disconnect button in test environment', () => {
      expect(wrapper.find('[title="Refresh"]').exists()).toBeFalsy()
    })

    it('should not have Refresh button in test environment', () => {
      expect(wrapper.find('[title="Refresh"]').exists()).toBeFalsy()
    })

    describe('when center button clicked', () => {
      beforeEach(() => {
        wrapper.find('[title="Center"]').simulate('click')
      })

      it('should call props.onCenter()', () => {
        expect(clickers.onCenter).toHaveBeenCalled()
      })
    })
  })
})
