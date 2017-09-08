import * as actions from './actions'
import * as constants from './constants'
import { pharmacophoresReducer, typesReducer } from './reducer'
import { IPharmacophoreContainer, IPharmacophoreFunctionalType } from './types'

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

describe('pharmacophoresReducer()', () => {
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

  describe(constants.PHARMACOPHORES_HILITE_FETCH_SUCCEEDED, () => {
    it('should hide when id not in response', () => {
      const state = sampleState()
      state[0].id = 'id1'
      state[0].visible = true
      const ids = ['otherid']
      const action = actions.hiLitefetchSucceeded(ids)

      const newState = pharmacophoresReducer(state, action)

      expect(newState[0].visible).toBeFalsy()
    })

    it('should show when id in response', () => {
      const state = sampleState()
      state[0].id = 'id1'
      state[0].visible = false
      const ids = ['id1']
      const action = actions.hiLitefetchSucceeded(ids)

      const newState = pharmacophoresReducer(state, action)

      expect(newState[0].visible).toBeTruthy()
    })

    it('should not change visiblility when shown and id in response', () => {
      const state = sampleState()
      state[0].id = 'id1'
      state[0].visible = true
      const ids = ['id1']
      const action = actions.hiLitefetchSucceeded(ids)

      const newState = pharmacophoresReducer(state, action)

      expect(newState[0].visible).toBeTruthy()
    })
  })
})

describe('typesReducer()', () => {
  describe(constants.PHARMACOPHORE_TOGGLE_TYPE, () => {
    let state: IPharmacophoreFunctionalType[]

    beforeEach(() => {
      state = [
        {
          checked: true,
          color: 'yellow',
          description: 'Aromatic ring',
          label: 'AROM',
          textColor: 'black'
        },
        {
          checked: true,
          color: 'gray',
          description: 'Exclusion sphere',
          label: 'EXCL',
          textColor: 'white'
        }
      ]
    })

    it('should checked=!checked when label matches', () => {
      const action = actions.togglePharmacophoreType('AROM')

      const newState = typesReducer(state, action)

      expect(newState[0].checked).toBeFalsy()
      expect(newState[1].checked).toBeTruthy()
    })
  })
})
