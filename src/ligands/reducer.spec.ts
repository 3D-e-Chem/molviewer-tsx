import * as actions from './actions'
import { reducer } from './reducer'
import { ILigand } from './types'

function sampleState(): ILigand[] {
  return [
    {
      color: '#32CD32',
      data: '...',
      format: 'sdf',
      id: 'id1',
      label: 'label1',
      visible: true
    },
    {
      color: '#32CD32',
      data: '...',
      format: 'sdf',
      id: 'id2',
      label: 'label2',
      visible: false
    }
  ]
}

describe('reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, actions.OtherAction)

    expect(state).toEqual([])
  })

  describe('other action', () => {
    it('should return same state', () => {
      const state = sampleState()
      const action = actions.OtherAction

      const newState = reducer(state, action)

      expect(newState).toEqual(state)
    })
  })

  describe('toggle visibility action of a ligand', () => {
    it('should set visible to !visible', () => {
      const state = sampleState()
      const action = actions.toggleVisibility('id1')

      const newState = reducer(state, action)

      const expected = [
        {
          color: '#32CD32',
          data: '...',
          format: 'sdf',
          id: 'id1',
          label: 'label1',
          visible: false
        },
        {
          color: '#32CD32',
          data: '...',
          format: 'sdf',
          id: 'id2',
          label: 'label2',
          visible: false
        }
      ]
      expect(newState).toEqual(expected)
    })
  })
})
