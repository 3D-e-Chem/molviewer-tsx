import * as actions from './actions'
import * as constants from './constants'
import { pharmacophoresReducer } from './reducer'
import { IPharmacophoreContainer } from './types'

function sampleState(): IPharmacophoreContainer[] {
  return [
    {
      id: 'id1',
      label: 'label1',
      ligand: {
        data: '...',
        format: 'sdf',
        visible: true
      },
      ligandColor: '#32CD32',
      pharmacophore: {
        data: '...',
        format: 'phar',
        solid: true,
        visible: true
      },
      protein: {
        data: '...',
        format: 'pdb',
        hasHetero: true,
        hetVisible: true,
        pocketVisible: true,
        proteinVisible: true,
        visible: true
      },
      visible: true
    }
  ]
}

describe('pharmacophoresReducer', () => {
  it('should return the initial state', () => {
    const state = pharmacophoresReducer(undefined, actions.OtherAction)

    expect(state).toEqual([])
  })

  describe('other action', () => {
    it('should return same state', () => {
      const state = sampleState()
      const action = actions.OtherAction

      const newState = pharmacophoresReducer(state, action)

      expect(newState).toEqual(state)
    })
  })

  describe(constants.PHARMACOPHORE_TOGGLE_CONTAINER_VISIBILITY, () => {
    it('should set pharmacophore visible to !visible', () => {
      const state = sampleState()
      const action = actions.toggleContainerVisibility('id1')

      const newState = pharmacophoresReducer(state, action)

      const expected = sampleState()
      expected[0].visible = false
      expect(newState).toEqual(expected)
    })
  })

  describe(constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_VISIBILITY, () => {
    it('should set pharmacophore visible to !visible', () => {
      const state = sampleState()
      const action = actions.togglePharmacophoreVisibility('id1')

      const newState = pharmacophoresReducer(state, action)

      const expected = sampleState()
      expected[0].pharmacophore.visible = false
      expect(newState).toEqual(expected)
    })
  })

  describe('constants.PHARMACOPHORE_TOGGLE_PHARMACOPHORE_OPACITY', () => {
    it('should set pharmacophore solid to !solid', () => {
      const state = sampleState()
      const action = actions.togglePharmacophoreOpacity('id1')

      const newState = pharmacophoresReducer(state, action)

      const expected = sampleState()
      expected[0].pharmacophore.solid = false
      expect(newState).toEqual(expected)
    })
  })

  describe(constants.PHARMACOPHORE_TOGGLE_PROTEIN_VISIBILITY, () => {
    it('should set protein proteinVisible to !proteinVisible', () => {
      const state = sampleState()
      const action = actions.toggleProteinVisibility('id1')

      const newState = pharmacophoresReducer(state, action)

      const expected = sampleState()
      const expectedProtein = expected[0].protein
      if (expectedProtein) {
        expectedProtein.proteinVisible = false
      }
      expect(newState).toEqual(expected)
    })
  })

  describe(constants.PHARMACOPHORE_TOGGLE_POCKET_VISIBILITY, () => {
    it('should set pocket visible to !visible', () => {
      const state = sampleState()
      const action = actions.togglePocketVisibility('id1')

      const newState = pharmacophoresReducer(state, action)

      const expected = sampleState()
      const expectedProtein = expected[0].protein
      if (expectedProtein) {
        expectedProtein.pocketVisible = false
      }
      expect(newState).toEqual(expected)
    })
  })

  describe(constants.PHARMACOPHORE_TOGGLE_LIGAND_VISIBILITY, () => {
    it('should set ligand visible to !visible and set protein.hetVisible to !visible', () => {
      const state = sampleState()
      const action = actions.toggleLigandVisibility('id1')

      const newState = pharmacophoresReducer(state, action)

      const expected = sampleState()
      const expectedLigand = expected[0].ligand
      if (expectedLigand) {
        expectedLigand.visible = false
      }
      const expectedProtein = expected[0].protein
      if (expectedProtein) {
        expectedProtein.hetVisible = false
      }
      expect(newState).toEqual(expected)
    })
  })

  describe(constants.PHARMACOPHORES_HIDE, () => {
    it('should set all visible to false', () => {
      const state = sampleState()
      const action = actions.hideAll()

      const newState = pharmacophoresReducer(state, action)

      const expected = sampleState()
      expected[0].visible = false
      expect(newState).toEqual(expected)
    })
  })

  describe(constants.PHARMACOPHORES_SHOW, () => {
    it('should set all visible to show', () => {
      const state = sampleState()
      const action = actions.showAll()

      const newState = pharmacophoresReducer(state, action)

      const expected = sampleState()
      expected[0].visible = true
      expect(newState).toEqual(expected)
    })
  })

  describe(constants.PHARMACOPHORES_FETCH_SUCCEEDED, () => {
    it('should return the pharmacophores of the action', () => {
      const fetched = sampleState()
      const action = actions.fetchSucceeded(fetched)

      const state = pharmacophoresReducer(undefined, action)

      expect(state).toEqual(fetched)
    })
  })
})
