import * as NGL from 'ngl'

import { IProps, PharmacophoreGLModel } from './PharmacophoreGLModel'

function getProps(): IProps {
  return {
    // tslint:disable-next-line:no-multiline-string
    data: `3j7u_NDP_frag24
HACC -12.3137 -2.9070 -79.0147 0 0 0 0 0
$$$$
`,
    format: 'phar',
    shownTypes: ['HACC'],
    solid: true,
    visible: true
  }
}

describe('<PharmacophoreGLModel />', () => {
  let stage: NGL.Stage
  let comp: PharmacophoreGLModel
  let nglRep: NGL.RepresentationComponent
  let nglComp: NGL.Component

  beforeEach(() => {
    const props = getProps()
    comp = new PharmacophoreGLModel(props)
    nglRep = ({
      setParameters: jest.fn(),
      setVisibility: jest.fn()
    } as any) as NGL.RepresentationComponent
    nglComp = ({
      addRepresentation: jest.fn(() => nglRep),
      autoView: jest.fn(),
      setTransform: jest.fn(),
      setVisibility: jest.fn()
    } as any) as NGL.Component
    const mockedStage = {
      addComponentFromObject: jest.fn(() => nglComp),
      loadFile: jest.fn(),
      remove: jest.fn()
    }
    stage = mockedStage as NGL.Stage
    comp.context = { stage }
  })

  describe('componentDidMount()', () => {
    beforeEach(() => {
      comp.componentDidMount()
    })

    it('should have a model', () => {
      expect(comp.models.size).toEqual(1)
    })

    it('should have a representation', () => {
      expect(comp.reps.size).toEqual(1)
    })

    describe('update props without change', () => {
      let nextProps: IProps

      beforeEach(() => {
        nextProps = getProps()
      })

      it('shouldComponentUpdate', () => {
        expect(comp.shouldComponentUpdate(nextProps)).toBeFalsy()
      })
    })

    describe('update props with solid=false', () => {
      let nextProps: IProps

      beforeEach(() => {
        nextProps = getProps()
        nextProps.solid = false
      })

      describe('shouldComponentUpdate()', () => {
        it('should return false', () => {
          expect(comp.shouldComponentUpdate(nextProps)).toBeTruthy()
        })
      })

      describe('componentDidUpdate()', () => {
        beforeEach(() => {
          comp.props = nextProps
          comp.componentDidUpdate()
        })

        it('should set opacity in representation to 0.6', () => {
          const expected = { opacity: 0.6 }
          expect(nglRep.setParameters).lastCalledWith(expected)
        })
      })
    })
  })
})
