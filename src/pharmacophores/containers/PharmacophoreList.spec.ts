import { actions as pactions } from '../../pocketradius'
import * as actions from '../actions'
import { IDispatchProps, IOwnProps } from '../components/PharmacophoreList'
import { IDispatch, mapDispatchToProps } from './PharmacophoreList'

describe('connected <PharmacophoreList/>', () => {
  describe('mapDispatchToProps()', () => {
    let dispatch: IDispatch
    let ownProps: IOwnProps
    let mapper: IDispatchProps
    const someid = 'someid'

    beforeEach(() => {
      dispatch = jest.fn()
      ownProps = {
        pharmacophores: [],
        pocketRadius: 4.5
      }
      mapper = mapDispatchToProps(dispatch, ownProps)
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

    describe('onLigandVisibilityClick()', () => {
      it('should dispatch toggleLigandVisibility', () => {
        mapper.onLigandVisibilityClick(someid)

        const expected = actions.toggleLigandVisibility(someid)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onPharmacophoreSolidClick()', () => {
      it('should dispatch togglePharmacophoreOpacity', () => {
        mapper.onPharmacophoreSolidClick(someid)

        const expected = actions.togglePharmacophoreOpacity(someid)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onPharmacophoreVisibilityClick()', () => {
      it('should dispatch togglePharmacophoreVisibility', () => {
        mapper.onPharmacophoreVisibilityClick(someid)

        const expected = actions.togglePharmacophoreVisibility(someid)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onPocketVisibilityClick()', () => {
      it('should dispatch togglePocketVisibility', () => {
        mapper.onPocketVisibilityClick(someid)

        const expected = actions.togglePocketVisibility(someid)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onProteinVisibilityClick()', () => {
      it('should dispatch toggleProteinVisibility', () => {
        mapper.onProteinVisibilityClick(someid)

        const expected = actions.toggleProteinVisibility(someid)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onPocketRadiusChange()', () => {
      it('should dispatch adjustPocketRadius', () => {
        mapper.onPocketRadiusChange(1234)

        const expected = pactions.adjustPocketRadius(1234)
        expect(dispatch).toBeCalledWith(expected)
      })
    })

    describe('onHiLiteShownClick()', () => {
      it('should dispatch hiLiteShown', () => {
        mapper.onHiLiteShownClick()

        const expected = actions.hiLiteShown([])
        expect(dispatch).toBeCalledWith(expected)
      })
    })
  })
})
