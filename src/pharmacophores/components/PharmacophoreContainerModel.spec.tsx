import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import {
  IProps,
  PharmacophoreContainerModel
} from './PharmacophoreContainerModel'

describe('<PharmacophoreContainerModel/>', () => {
  describe('only pharmacophore', () => {
    let props: IProps
    let wrapper: ShallowWrapper<IProps, {}>
    beforeAll(() => {
      props = {
        pharmacophore: {
          id: 'id1',
          label: 'label1',
          ligandColor: 'red',
          pharmacophore: {
            data: '...',
            format: 'phar',
            solid: true,
            visible: true
          },
          visible: true
        },
        pocketRadius: 4.5,
        shownTypes: []
      }
      wrapper = shallow(<PharmacophoreContainerModel {...props} />)
    })

    it('should have a PharmacophoreGLModel', () => {
      expect(wrapper.find('PharmacophoreGLModel').length).toEqual(1)
    })

    it('should not have a LigandGLModel', () => {
      expect(wrapper.find('LigandGLModel').length).toEqual(0)
    })

    it('should not have a ProteinGLModel', () => {
      expect(wrapper.find('ProteinGLModel').length).toEqual(0)
    })
  })

  describe('pharmacophore, protein and ligand', () => {
    let props: IProps
    let wrapper: ShallowWrapper<IProps, {}>
    beforeAll(() => {
      props = {
        pharmacophore: {
          id: 'id1',
          label: 'label1',
          ligand: {
            data: '...',
            format: 'sdf',
            visible: true
          },
          ligandColor: 'red',
          pharmacophore: {
            data: '...',
            format: 'phar',
            solid: true,
            visible: true
          },
          protein: {
            data: '...',
            format: 'pdb',
            hasHetero: false,
            hetVisible: false,
            pocketVisible: false,
            proteinVisible: true,
            visible: true
          },
          visible: true
        },
        pocketRadius: 4.5,
        shownTypes: []
      }
      wrapper = shallow(<PharmacophoreContainerModel {...props} />)
    })

    it('should have a PharmacophoreGLModel', () => {
      expect(wrapper.find('PharmacophoreGLModel').length).toEqual(1)
    })

    it('should have a LigandGLModel', () => {
      expect(wrapper.find('LigandGLModel').length).toEqual(1)
    })

    it('should have a ProteinGLModel', () => {
      expect(wrapper.find('ProteinGLModel').length).toEqual(1)
    })
  })
})
