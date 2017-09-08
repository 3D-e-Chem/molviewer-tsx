import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { IProps, PharmacophoreListItem } from './PharmacophoreListItem'

describe('<PharmacophoreListItem/>', () => {
  let props: IProps

  beforeEach(() => {
    props = {
      id: 'someid',
      label: 'somelabel',
      ligandColor: 'green',
      onLigandVisibilityClick: jest.fn(),
      onPharmacophoreContainerVisibilityClick: jest.fn(),
      onPharmacophoreSolidClick: jest.fn(),
      onPharmacophoreVisibilityClick: jest.fn(),
      onPocketVisibilityClick: jest.fn(),
      onProteinVisibilityClick: jest.fn(),
      pharmacophore: {
        data: '... phar data ...',
        format: 'phar',
        solid: false,
        visible: true
      },
      visible: true
    }
  })

  describe('onClicks', () => {
    let comp: PharmacophoreListItem

    beforeEach(() => {
      comp = new PharmacophoreListItem(props)
    })

    describe('onLigandVisibilityClick', () => {
      it('should call props method', () => {
        comp.onLigandVisibilityClick()

        expect(props.onLigandVisibilityClick).toBeCalledWith(props.id)
      })
    })

    describe('onPocketVisibilityClick', () => {
      it('should call props method', () => {
        comp.onPocketVisibilityClick()

        expect(props.onPocketVisibilityClick).toBeCalledWith(props.id)
      })
    })

    describe('onProteinVisibilityClick', () => {
      it('should call props method', () => {
        comp.onProteinVisibilityClick()

        expect(props.onProteinVisibilityClick).toBeCalledWith(props.id)
      })
    })

    describe('onPharmacophoreVisibilityClick', () => {
      it('should call props method', () => {
        comp.onPharmacophoreVisibilityClick()

        expect(props.onPharmacophoreVisibilityClick).toBeCalledWith(props.id)
      })
    })

    describe('onPharmacophoreContainerVisibilityClick', () => {
      it('should call props method', () => {
        comp.onPharmacophoreContainerVisibilityClick()

        expect(props.onPharmacophoreContainerVisibilityClick).toBeCalledWith(
          props.id
        )
      })
    })

    describe('onPharmacophoreSolidClick', () => {
      it('should call props method', () => {
        comp.onPharmacophoreSolidClick()

        expect(props.onPharmacophoreSolidClick).toBeCalledWith(props.id)
      })
    })
  })

  describe('render', () => {
    let wrapper: ShallowWrapper<IProps, {}>

    beforeEach(() => {
      wrapper = shallow(<PharmacophoreListItem {...props} />)
    })

    it('should render the label', () => {
      expect(wrapper.html()).toContain(props.label)
    })
  })
})
