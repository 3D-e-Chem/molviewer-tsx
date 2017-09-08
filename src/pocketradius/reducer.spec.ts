import * as actions from './actions'
import { reducer } from './reducer'

describe('reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, actions.OtherAction)
    expect(state).toEqual(5.0)
  })

  describe('adjust', () => {
    it('should be set to radius of action', () => {
      const action = actions.adjustPocketRadius(3.0)

      const state = reducer(undefined, action)

      expect(state).toEqual(3.0)
    })
  })
})
