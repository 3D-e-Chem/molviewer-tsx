import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { IProps, LegendItem } from './LegendItem'

describe('<LegenItem/>', () => {
  describe('onToggle()', () => {
    it('should call props.onToggle with label', () => {
      const props = {
        checked: true,
        color: 'yellow',
        description: 'Aromatic ring',
        label: 'AROM',
        onToggle: jest.fn(),
        textColor: 'black'
      }
      const comp = new LegendItem(props)

      comp.onToggle()

      expect(props.onToggle).toBeCalledWith('AROM')
    })
  })

  describe('render()', () => {
    let props: IProps
    let wrapper: ShallowWrapper<IProps, {}>
    describe('checked', () => {
      beforeAll(() => {
        props = {
          checked: true,
          color: 'yellow',
          description: 'Aromatic ring',
          label: 'AROM',
          onToggle: jest.fn(),
          textColor: 'black'
        }
        wrapper = shallow(<LegendItem {...props} />)
      })

      it('should contain label', () => {
        expect(wrapper.html()).toContain(props.label)
      })

      it('should contain eye-open', () => {
        expect(wrapper.html()).toContain('eye-open')
      })
    })

    describe('checked', () => {
      beforeAll(() => {
        props = {
          checked: false,
          color: 'yellow',
          description: 'Aromatic ring',
          label: 'AROM',
          onToggle: jest.fn(),
          textColor: 'black'
        }
        wrapper = shallow(<LegendItem {...props} />)
      })

      it('should contain eye-close', () => {
        expect(wrapper.html()).toContain('eye-close')
      })
    })
  })
})
