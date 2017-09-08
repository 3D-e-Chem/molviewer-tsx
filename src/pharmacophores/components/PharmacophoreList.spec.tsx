import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { IProps, PharmacophoreList } from './PharmacophoreList'

describe.skip('<PharmacophoreList/>', () => {
  let props: IProps
  let wrapper: ShallowWrapper<IProps, {}>

  beforeAll(() => {
    props = {
      onHiLiteShownClick: jest.fn(),
      onHideAllClick: jest.fn(),
      onLigandVisibilityClick: jest.fn(),
      onPharmacophoreContainerVisibilityClick: jest.fn(),
      onPharmacophoreSolidClick: jest.fn(),
      onPharmacophoreVisibilityClick: jest.fn(),
      onPocketRadiusChange: jest.fn(),
      onPocketVisibilityClick: jest.fn(),
      onProteinVisibilityClick: jest.fn(),
      onShowAllClick: jest.fn(),
      pharmacophores: [],
      pocketRadius: 4.5
    }
    wrapper = shallow(<PharmacophoreList {...props} />)
  })

  it('should contain "Pharmacophores" string', () => {
    expect(wrapper.html()).toContain('Pharmacophores')
  })

  describe('change of pocket radius', () => {
    it('should call props.onPocketRadiusChange()', () => {
      wrapper.find('PocketRadius').simulate('change', 1234)

      expect(props.onPocketRadiusChange).toBeCalledWith(1234)
    })
  })
})
