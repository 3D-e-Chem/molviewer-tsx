import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { IProps, ProteinsViewer } from './ProteinsViewer'

describe('<ProteinsViewer/>', () => {
  let props: IProps
  describe('componentDidMount()', () => {
    beforeEach(() => {
      props = {
        fetchProteins: jest.fn(),
        pageLoaded: jest.fn(),
        pocketRadius: 4.5,
        proteins: []
      }

      const comp = new ProteinsViewer(props)
      comp.componentDidMount()
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
        fetchProteins: jest.fn(),
        pageLoaded: jest.fn(),
        pocketRadius: 4.5,
        proteins: []
      }

      wrapper = shallow(<ProteinsViewer {...props} />)
    })

    it('should have rotein in title', () => {
      expect(wrapper.prop('title')).toContain('rotein')
    })
  })
})
