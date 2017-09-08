import * as NGL from 'ngl'

import {
  mockedComponent,
  mockedRepresentation,
  mockedStage
} from '../../nglTestHelpers'
import { LigandGLModel } from './LigandGLModel'

describe('<LigandGLModel/>', () => {
  let stage: NGL.Stage
  let model: LigandGLModel
  let comp: NGL.StructureComponent
  let rep: NGL.RepresentationComponent

  beforeEach(() => {
    const props = {
      color: 'red',
      data: '...',
      format: 'mol2',
      visible: true
    }
    model = new LigandGLModel(props)
    rep = mockedRepresentation()
    comp = mockedComponent(rep)
    stage = mockedStage(comp)
    model.context = { stage }
  })

  describe('loaded model', () => {
    beforeEach(() => {
      model.modelLoaded(comp)
    })

    describe('modelLoaded()', () => {
      it('should add licorice representation', () => {
        const options = {
          colorScheme: 'element',
          colorValue: 'red',
          multipleBond: 'symmetric'
        }
        expect(comp.addRepresentation).toBeCalledWith('licorice', options)
      })
    })

    describe('componentDidUpdate()', () => {
      it('should set color in representation', () => {
        model.componentDidUpdate()

        const expected = { colorValue: 'red' }
        expect(rep.setParameters).toBeCalledWith(expected)
      })
    })
  })

  describe('shouldComponentUpdate()', () => {
    it('should return false when color is unchanged', () => {
      const nextProps = {
        color: 'red',
        data: '...',
        format: 'mol2',
        visible: true
      }

      const result = model.shouldComponentUpdate(nextProps)

      expect(result).toBeFalsy()
    })

    it('should return true when color changed', () => {
      const nextProps = {
        color: 'blue',
        data: '...',
        format: 'mol2',
        visible: true
      }

      const result = model.shouldComponentUpdate(nextProps)

      expect(result).toBeTruthy()
    })
  })
})
