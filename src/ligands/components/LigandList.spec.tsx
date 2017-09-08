import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { ListActions } from '../../components/ListActions'
import { IDispatchProps, IProps, LigandList } from './LigandList'
import { LigandListItem } from './LigandListItem'

describe('<LigandList />', () => {
  describe('render', () => {
    let clickers: IDispatchProps
    let wrapper: ShallowWrapper<IProps, {}>

    beforeEach(() => {
      clickers = {
        onColorClick: jest.fn(),
        onHiLiteShownClick: jest.fn(),
        onHideAllClick: jest.fn(),
        onShowAllClick: jest.fn(),
        onVisibilityClick: jest.fn()
      }
    })

    describe('zero items', () => {
      beforeEach(() => {
        const comp = (
          <LigandList
            ligands={[]}
            onVisibilityClick={clickers.onVisibilityClick}
            onHideAllClick={clickers.onHideAllClick}
            onHiLiteShownClick={clickers.onHiLiteShownClick}
            onShowAllClick={clickers.onShowAllClick}
            onColorClick={clickers.onColorClick}
          />
        )
        wrapper = shallow(comp)
      })

      it('should contain a header', () => {
        expect(wrapper.contains(<h5>Ligands</h5>)).toBeTruthy()
      })

      it('should contain no LigandListItem', () => {
        expect(wrapper.find(LigandListItem).length).toEqual(0)
      })

      it('should have no list actions', () => {
        expect(wrapper.find(ListActions).length).toEqual(0)
      })
    })

    describe('single item', () => {
      beforeEach(() => {
        const ligands = [
          {
            color: '#32CD32',
            data: '...',
            format: 'sdf',
            id: 'id1',
            label: 'label1',
            visible: true
          }
        ]
        const comp = (
          <LigandList
            ligands={ligands}
            onVisibilityClick={clickers.onVisibilityClick}
            onHideAllClick={clickers.onHideAllClick}
            onHiLiteShownClick={clickers.onHiLiteShownClick}
            onShowAllClick={clickers.onShowAllClick}
            onColorClick={clickers.onColorClick}
          />
        )
        wrapper = shallow(comp)
      })

      it('should contain a header', () => {
        expect(wrapper.contains(<h5>Ligands</h5>)).toBeTruthy()
      })

      it('should contain single LigandListItem', () => {
        expect(wrapper.find(LigandListItem).length).toEqual(1)
      })

      it('should have no list actions', () => {
        expect(wrapper.find(ListActions).length).toEqual(0)
      })
    })

    describe('two items', () => {
      beforeEach(() => {
        const ligands = [
          {
            color: '#32CD32',
            data: '...',
            format: 'sdf',
            id: 'id1',
            label: 'label1',
            visible: true
          },
          {
            color: '#32CD32',
            data: '...',
            format: 'sdf',
            id: 'id2',
            label: 'label2',
            visible: false
          }
        ]
        const comp = (
          <LigandList
            ligands={ligands}
            onVisibilityClick={clickers.onVisibilityClick}
            onHideAllClick={clickers.onHideAllClick}
            onHiLiteShownClick={clickers.onHiLiteShownClick}
            onShowAllClick={clickers.onShowAllClick}
            onColorClick={clickers.onColorClick}
          />
        )
        wrapper = shallow(comp)
      })

      it('should contain a header', () => {
        expect(wrapper.contains(<h5>Ligands</h5>)).toBeTruthy()
      })

      it('should contain two LigandListItem', () => {
        expect(wrapper.find(LigandListItem).length).toEqual(2)
      })

      it('should have list actions', () => {
        expect(wrapper.find(ListActions).length).toEqual(1)
      })

      describe('when HiLite shown button is clicked', () => {
        it('should call onHiLiteShownClick()', () => {
          wrapper.find('Button').simulate('click')
          expect(clickers.onHiLiteShownClick).toHaveBeenCalledWith(['id1'])
        })
      })
    })
  })
})
