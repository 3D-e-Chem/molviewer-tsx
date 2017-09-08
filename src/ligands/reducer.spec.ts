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

      expect(newState[0].visible).toBeFalsy()
    })
  })

  describe('LIGAND_PICK_COLOR action', () => {
    it('should update color', () => {
      const state = sampleState()
      const action = actions.pickColor('id1', 'red')

      const newState = reducer(state, action)

      expect(newState[0].color).toEqual('red')
    })
  })

  describe('LIGANDS_FETCH_SUCCEEDED action', () => {
    it('should set state to action.ligands', () => {
      const state: ILigand[] = []
      const ligands = sampleState()
      const action = actions.fetchSucceeded(ligands)

      const newState = reducer(state, action)

      expect(newState).toEqual(ligands)
    })
  })

  describe('LIGANDS_SHOW', () => {
    it('should set visible=true for all', () => {
      const state = sampleState()
      state[0].visible = false
      state[1].visible = false
      const action = actions.showAll()

      const newState = reducer(state, action)

      expect(newState[0].visible).toBeTruthy()
      expect(newState[1].visible).toBeTruthy()
    })

    it('should do nothing when all are already shown', () => {
      const state = sampleState()
      state[0].visible = true
      state[1].visible = true
      const action = actions.showAll()

      const newState = reducer(state, action)

      expect(newState[0].visible).toBeTruthy()
      expect(newState[1].visible).toBeTruthy()
    })
  })

  describe('LIGANDS_HIDE', () => {
    it('should do nothing when all are already hidden', () => {
      const state = sampleState()
      state[0].visible = false
      state[1].visible = false
      const action = actions.hideAll()

      const newState = reducer(state, action)

      expect(newState).toEqual(state)
    })

    it('should set visible=false for all', () => {
      const state = sampleState()
      state[0].visible = true
      state[1].visible = true
      const action = actions.hideAll()

      const newState = reducer(state, action)

      expect(newState[0].visible).toBeFalsy()
      expect(newState[1].visible).toBeFalsy()
    })
  })

  describe('LIGANDS_HILITE_FETCH_SUCCEEDED', () => {
    it('should hide all when no higlights fetched', () => {
      const state = sampleState()
      state[0].visible = true
      state[1].visible = false
      const ids: string[] = []
      const action = actions.hiLitefetchSucceeded(ids)

      const newState = reducer(state, action)

      expect(newState[0].visible).toBeFalsy()
      expect(newState[1].visible).toBeFalsy()
    })

    it('should show all when all higlights fetched', () => {
      const state = sampleState()
      state[0].visible = true
      state[1].visible = false
      const ids: string[] = ['id1', 'id2']
      const action = actions.hiLitefetchSucceeded(ids)

      const newState = reducer(state, action)

      expect(newState[0].visible).toBeTruthy()
      expect(newState[1].visible).toBeTruthy()
    })
  })
})
