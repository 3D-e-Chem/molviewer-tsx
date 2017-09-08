import * as NGL from 'ngl'

import {
  mockedComponent,
  mockedRepresentation,
  mockedStage
} from '../../nglTestHelpers'
import { ProteinGLModel } from './ProteinGLModel'

describe('<ProteinGLModel/>', () => {
  let stage: NGL.Stage
  let model: ProteinGLModel
  let comp: NGL.StructureComponent
  let rep: NGL.RepresentationComponent

  beforeEach(() => {
    const props = {
      data: '...',
      format: 'pdb',
      hetColor: 'green',
      hetVisible: true,
      pocketRadius: 4.5,
      pocketVisible: true,
      proteinVisible: true,
      visible: true
    }
    model = new ProteinGLModel(props)
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
      it('should create a cartoon representation', () => {
        expect(comp.addRepresentation).toBeCalledWith(
          'cartoon',
          expect.anything()
        )
      })

      it('should create a licorice representation for the hetero atoms', () => {
        expect(comp.addRepresentation).toBeCalledWith(
          'licorice',
          expect.anything()
        )
      })

      it('should create a ball+stick representation for the pocket', () => {
        expect(comp.addRepresentation).toBeCalledWith(
          'ball+stick',
          expect.anything()
        )
      })
    })

    describe('componentDidUpdate()', () => {
      it('should set protein to visible', () => {
        model.componentDidUpdate()

        expect(rep.setVisibility).toBeCalledWith(true)
      })
    })
  })
})
