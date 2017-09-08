import { actions as pactions } from '../../pocketradius'
import * as actions from '../actions'
import { IDispatchProps } from '../components/ProteinList'
import { IDispatch, mapDispatchToProps } from './ProteinList'

describe('<ProteinList> container', () => {
  describe('mapDispatchToProps()', () => {
    let dispatch: IDispatch
    let mapper: IDispatchProps
    const someid = 'someid'

    beforeEach(() => {
      dispatch = jest.fn()
      mapper = mapDispatchToProps(dispatch)
    })

    describe('onHeteroVisibilityClick', () => {
      it('should dispatch toggleHetVisibility', () => {
        mapper.onHeteroVisibilityClick(someid)

        const expected = actions.toggleHetVisibility(someid)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onHideAllClick', () => {
      it('should dispatch hideAll', () => {
        mapper.onHideAllClick()

        const expected = actions.hideAll()
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onShowAllClick', () => {
      it('should dispatch showAll', () => {
        mapper.onShowAllClick()

        const expected = actions.showAll()
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onPocketRadiusChange', () => {
      it('should dispatch adjustPocketRadius', () => {
        mapper.onPocketRadiusChange(1234)

        const expected = pactions.adjustPocketRadius(1234)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onPocketVisibilityClick', () => {
      it('should dispatch togglePocketVisibility', () => {
        mapper.onPocketVisibilityClick(someid)

        const expected = actions.togglePocketVisibility(someid)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onProteinVisibilityClick', () => {
      it('should dispatch toggleProteinVisibility', () => {
        mapper.onProteinVisibilityClick(someid)

        const expected = actions.toggleProteinVisibility(someid)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onWholeProteinVisibilityClick', () => {
      it('should dispatch toggleVisibility', () => {
        mapper.onWholeProteinVisibilityClick(someid)

        const expected = actions.toggleVisibility(someid)
        expect(dispatch).toBeCalledWith(expected)
      })
    })
  })
})
