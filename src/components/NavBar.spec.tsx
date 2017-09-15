import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { IDispatchProps, IProps, NavBar } from './NavBar'

describe('<NavBar />', () => {
  describe('render', () => {
    let wrapper: ShallowWrapper<IProps, {}>
    let clickers: IDispatchProps

    beforeEach(() => {
      clickers = {
        serverDisconnect: jest.fn(),
        serverModelChanged: jest.fn()
      }
      const comp = (
        <NavBar
          title="My title"
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
  })
})
