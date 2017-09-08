import * as React from 'react'

import { shallow } from 'enzyme'

import { Routes } from './Routes'

describe('<Routes/>', () => {
  it('should have 5 Route components', () => {
    const wrapper = shallow(<Routes />)

    expect(wrapper.find('Route').length).toBe(5)
  })
})
