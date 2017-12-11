import * as NGL from 'ngl'

export function mockedComponent(rep = mockedRepresentation()) {
  const selection = {
    difference: jest.fn(() => {
      return {
        toSeleString: jest.fn()
      }
    }),
    toSeleString: jest.fn()
  }
  return ({
    addRepresentation: jest.fn(() => rep),
    autoView: jest.fn(),
    setTransform: jest.fn(),
    setVisibility: jest.fn(),
    structure: {
      getAtomSet: jest.fn(() => selection),
      getAtomSetWithinGroup: jest.fn(() => selection),
      getAtomSetWithinSelection: jest.fn(() => selection)
    }
  } as any) as NGL.StructureComponent
}

export function mockedStage(comp: NGL.Component) {
  const mockedStage = {
    addComponentFromObject: jest.fn(() => comp),
    loadFile: jest.fn(),
    removeComponent: jest.fn()
  }
  return mockedStage as NGL.Stage
}

export function mockedRepresentation() {
  const mock = {
    getParameter: jest.fn(),
    setParameters: jest.fn(),
    setTransform: jest.fn(),
    setVisibility: jest.fn()
  }
  return mock as NGL.RepresentationComponent
}
