import { OtherAction } from './actions'
import { rootReducer } from './rootReducer'

describe('rootReducer()', () => {
  let state: {}

  describe('initialize state', () => {
    beforeAll(() => {
      state = rootReducer({}, OtherAction)
    })

    it('should contain sse field', () => {
      expect('sse' in state).toBeTruthy()
    })

    it('should contain ligands field', () => {
      expect('ligands' in state).toBeTruthy()
    })

    it('should contain pharmacophores field', () => {
      expect('pharmacophores' in state).toBeTruthy()
    })

    it('should contain pocketRadius field', () => {
      expect('pocketRadius' in state).toBeTruthy()
    })

    it('should contain proteins field', () => {
      expect('proteins' in state).toBeTruthy()
    })

    it('should contain toastr field', () => {
      expect('toastr' in state).toBeTruthy()
    })
  })
})
