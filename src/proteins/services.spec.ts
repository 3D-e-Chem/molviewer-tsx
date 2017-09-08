import { detectHetero } from './services'

describe('proteins/services', () => {
  describe('detectHetero()', () => {
    describe('when pdb contains hetero', () => {
      it('should detect hetero', () => {
        const data =
          'HETATM 1188  H2  SRT A1076     -17.263  11.260  28.634  1.00 59.62           H  \n'
        const protein = { format: 'pdb', data }

        const result = detectHetero(protein)

        expect(result).toBeTruthy()
      })
    })

    describe('when pdb contains water', () => {
      it('should not detect hetero', () => {
        const data =
          'HETATM 1188  H2  H2O A1076     -17.263  11.260  28.634  1.00 59.62           H  \n'
        const protein = { format: 'pdb', data }

        const result = detectHetero(protein)

        expect(result).toBeFalsy()
      })
    })

    describe('when pdb contains ion', () => {
      it('should not detect hetero', () => {
        const data =
          'HETATM 1188  FE  FE2 A1076     -17.263  11.260  28.634  1.00 59.62           F  \n'
        const protein = { format: 'pdb', data }

        const result = detectHetero(protein)

        expect(result).toBeFalsy()
      })
    })

    describe('when pdb contains no hetatm', () => {
      it('should not detect hetero', () => {
        const data =
          'ATOM    601  N   LEU A  75     -17.070 -16.002   2.409  1.00 55.63           N  \n' +
          'ATOM    602  CA  LEU A  75     -16.343 -16.746   3.444  1.00 55.50           C  \n'
        const protein = { format: 'pdb', data }

        const result = detectHetero(protein)

        expect(result).toBeFalsy()
      })
    })

    describe('when mol2 format', () => {
      it('should not detect hetero', () => {
        const protein = { format: 'mol2', data: '...' }

        const result = detectHetero(protein)

        expect(result).toBeFalsy()
      })
    })
  })
})
