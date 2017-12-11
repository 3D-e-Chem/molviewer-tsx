import * as NGL from 'ngl'

import { mockedStage } from '../nglTestHelpers'
import { IProps, MolCanvas } from './MolCanvas'

describe('<MolCanvas />', () => {
  let comp: MolCanvas
  let stage: NGL.Stage
  let props: IProps

  beforeEach(() => {
    stage = mockedStage()
    props = {
      center: false,
      id: 'someid',
      onCenterSucceeded: jest.fn()
    }
    comp = new MolCanvas(props)
    comp.stage = stage
  })

  describe('getChildContext()', () => {
    it('should return stage', () => {
      const context = comp.getChildContext()
      const expected = {
        stage
      }
      expect(context).toEqual(expected)
    })
  })

  describe('componentDidUpdate()', () => {
    describe('center=true', () => {
      beforeEach(() => {
        props = {
          center: true,
          id: 'someid',
          onCenterSucceeded: jest.fn()
        }
        comp = new MolCanvas(props)
        comp.stage = stage
        comp.componentDidUpdate()
      })

      it('should center stage', () => {
        expect(stage.autoView).toHaveBeenCalled()
      })

      it('should call on center succeeded', () => {
        expect(props.onCenterSucceeded).toHaveBeenCalled()
      })
    })

    describe('center=false', () => {
      beforeEach(() => {
        comp.componentDidUpdate()
      })

      it('should not center stage', () => {
        expect(stage.autoView).not.toHaveBeenCalled()
      })

      it('should call on center succeeded', () => {
        expect(props.onCenterSucceeded).not.toHaveBeenCalled()
      })
    })
  })
})
