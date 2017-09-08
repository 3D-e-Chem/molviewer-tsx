import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { IProps, ProteinList } from './ProteinList'

describe('<ProteinList/>', () => {
  describe('zero proteins', () => {
    let props: IProps
    let wrapper: ShallowWrapper<IProps, {}>

    beforeEach(() => {
      props = {
        onHeteroVisibilityClick: jest.fn(),
        onHideAllClick: jest.fn(),
        onPocketRadiusChange: jest.fn(),
        onPocketVisibilityClick: jest.fn(),
        onProteinVisibilityClick: jest.fn(),
        onShowAllClick: jest.fn(),
        onWholeProteinVisibilityClick: jest.fn(),
        pocketRadius: 4.5,
        proteins: []
      }

      wrapper = shallow(<ProteinList {...props} />)
    })

    it('should have a h5 header with Proteins', () => {
      expect(wrapper.find('h5').text()).toEqual('Proteins')
    })
  })
})
