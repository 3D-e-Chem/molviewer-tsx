import * as React from 'react'

import { shallow } from 'enzyme'

import { Legend } from './Legend'

describe('<Legend/>', () => {
  describe('render without types', () => {
    it('should contain "Functional types" text', () => {
      const props = {
        onToggleType: jest.fn(),
        types: []
      }

      const wrapper = shallow(<Legend {...props} />)

      expect(wrapper.html()).toContain('Functional types')
    })
  })

  describe('render with 1 type', () => {
    it('should contain 1 LegendItem component', () => {
      const props = {
        onToggleType: jest.fn(),
        types: [
          {
            checked: true,
            color: 'yellow',
            description: 'Aromatic ring',
            label: 'AROM',
            textColor: 'black'
          }
        ]
      }

      const wrapper = shallow(<Legend {...props} />)

      expect(wrapper.find('LegendItem').length).toEqual(1)
    })
  })
})
