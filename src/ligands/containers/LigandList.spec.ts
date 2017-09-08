import * as actions from '../actions'
import { IDispatchProps } from '../components/LigandList'
import { IDispatch, mapDispatchToProps, mapStateToProps } from './LigandList'

describe('connected <LigandList/>', () => {
  describe('mapStateToProps()', () => {
    it('should return ownProps', () => {
      const state = {}
      const ownProps = {
        ligands: []
      }
      const props = mapStateToProps(state, ownProps)

      expect(props).toBe(ownProps)
    })
  })

  describe('mapDispatchToProps()', () => {
    let dispatch: IDispatch
    let mapper: IDispatchProps

    beforeEach(() => {
      dispatch = jest.fn()
      mapper = mapDispatchToProps(dispatch)
    })

    describe('onColorClick()', () => {
      it('should dispatch pickColor', () => {
        mapper.onColorClick('someid', 'somecolor')

        const expected = actions.pickColor('someid', 'somecolor')
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onHiLiteShownClick()', () => {
      it('should dispatch hiLiteShown', () => {
        const ids = ['someid']
        mapper.onHiLiteShownClick(ids)

        const expected = actions.hiLiteShown(ids)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onHideAllClick()', () => {
      it('should dispatch hideAll', () => {
        mapper.onHideAllClick()

        const expected = actions.hideAll()
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onShowAllClick()', () => {
      it('should dispatch showAll', () => {
        mapper.onShowAllClick()

        const expected = actions.showAll()
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onVisibilityClick()', () => {
      it('should dispatch toggleVisibility', () => {
        mapper.onVisibilityClick('someid')

        const expected = actions.toggleVisibility('someid')
        expect(dispatch).toBeCalledWith(expected)
      })
    })
  })
})
