import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { IProps, LigandsAndProteinsViewer } from './LigandsAndProteinsViewer'

describe('<LigandsAndProteinsViewer/>', () => {
  let props: IProps

  describe('componentDidMount()', () => {
    beforeEach(() => {
      props = {
        fetchLigands: jest.fn(),
        fetchProteins: jest.fn(),
        ligands: [],
        pageLoaded: jest.fn(),
        pocketRadius: 4.5,
        proteins: []
      }

      const comp = new LigandsAndProteinsViewer(props)
      comp.componentDidMount()
    })

    it('should call props.fetchLigands()', () => {
      expect(props.fetchLigands).toBeCalled()
    })

    it('should call props.fetchProteins()', () => {
      expect(props.fetchProteins).toBeCalled()
    })

    it('should call props.pageLoaded()', () => {
      expect(props.pageLoaded).toBeCalled()
    })
  })

  describe('render()', () => {
    let wrapper: ShallowWrapper<IProps, {}>

    beforeEach(() => {
      props = {
        fetchLigands: jest.fn(),
        fetchProteins: jest.fn(),
        ligands: [],
        pageLoaded: jest.fn(),
        pocketRadius: 4.5,
        proteins: []
      }

      wrapper = shallow(<LigandsAndProteinsViewer {...props} />)
    })

    it('should have rotein in title', () => {
      expect(wrapper.prop('title')).toContain('rotein')
    })

    it('should have igand in title', () => {
      expect(wrapper.prop('title')).toContain('igand')
    })
  })
})
