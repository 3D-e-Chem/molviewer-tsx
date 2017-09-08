import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { IProps, PharmacophoresViewer } from './PharmacophoresViewer'

describe('<PharmacophoresViewer/>', () => {
  let props: IProps

  beforeEach(() => {
    props = {
      fetchPharmacophores: jest.fn(),
      onToggleType: jest.fn(),
      pageLoaded: jest.fn(),
      pharmacophores: {
        items: [],
        types: []
      },
      pocketRadius: 4.5
    }
  })

  describe('componentDidMount()', () => {
    beforeEach(() => {
      const comp = new PharmacophoresViewer(props)
      comp.componentDidMount()
    })

    it('should call props.fetchPharmacophores()', () => {
      expect(props.fetchPharmacophores).toBeCalled()
    })

    it('should call props.pageLoaded()', () => {
      expect(props.pageLoaded).toBeCalled()
    })
  })

  describe('render', () => {
    let wrapper: ShallowWrapper<IProps, {}>

    beforeEach(() => {
      wrapper = shallow(<PharmacophoresViewer {...props} />)
    })

    it('should have harmacophore in title', () => {
      expect(wrapper.prop('title')).toContain('harmacophore')
    })
  })
})
