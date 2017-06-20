import { detectHetero, prepPharmacophore } from './services';
import { IPharmacophoreContainer } from './types';

describe('pharmacophore/services', () => {
    describe('detectHetero()', () => {
        describe('when pdb contains hetero', () => {
            it('should detect hetero', () => {
                const data = 'HETATM 1188  H2  SRT A1076     -17.263  11.260  28.634  1.00 59.62           H  \n';
                const protein = {format: 'pdb', data};

                const result = detectHetero(protein);

                expect(result).toBeTruthy();
            });
        });

        describe('when pdb contains water', () => {
            it('should not detect hetero', () => {
                const data = 'HETATM 1188  H2  H2O A1076     -17.263  11.260  28.634  1.00 59.62           H  \n';
                const protein = {format: 'pdb', data};

                const result = detectHetero(protein);

                expect(result).toBeFalsy();
            });
        });

        describe('when pdb contains ion', () => {
            it('should not detect hetero', () => {
                const data = 'HETATM 1188  FE  FE2 A1076     -17.263  11.260  28.634  1.00 59.62           F  \n';
                const protein = {format: 'pdb', data};

                const result = detectHetero(protein);

                expect(result).toBeFalsy();
            });
        });

        describe('when pdb contains no hetatm', () => {
            it('should not detect hetero', () => {
                const data = 'ATOM    601  N   LEU A  75     -17.070 -16.002   2.409  1.00 55.63           N  \n' +
                    'ATOM    602  CA  LEU A  75     -16.343 -16.746   3.444  1.00 55.50           C  \n';
                const protein = {format: 'pdb', data};

                const result = detectHetero(protein);

                expect(result).toBeFalsy();
            });
        });

        describe('when mol2 format', () => {
            it('should not detect hetero', () => {
                const protein = {format: 'mol2', data: '...'};

                const result = detectHetero(protein);

                expect(result).toBeFalsy();
            });
        });
    });

    describe('prepPharmacophore()', () => {
        describe('for first row', () => {
            let result: IPharmacophoreContainer;

            beforeAll(() => {
                const input = {
                    id: 'id1',
                    label: 'label1',
                    pharmacophore: {
                        data: '...',
                        format: 'phar'
                    }
                };
                result = prepPharmacophore(input, 0);
            });

            it('should show row', () => {
                expect(result.visible).toBeTruthy();
            });

            it('should show pharmacophore', () => {
                expect(result.pharmacophore.visible).toBeTruthy();
            });

            it('should have solid pharmacophore', () => {
                expect(result.pharmacophore.solid).toBeTruthy();
            });
        });

        describe('for second row', () => {
            let result: IPharmacophoreContainer;

            beforeAll(() => {
                const input = {
                    id: 'id2',
                    label: 'label2',
                    pharmacophore: {
                        data: '...',
                        format: 'phar'
                    }
                };
                result = prepPharmacophore(input, 1);
            });

            it('should hid row', () => {
                expect(result.visible).toBeFalsy();
            });

            it('should show pharmacophore', () => {
                expect(result.pharmacophore.visible).toBeTruthy();
            });

            it('should have transparent pharmacophore', () => {
                expect(result.pharmacophore.solid).toBeFalsy();
            });
        });

        describe('with ligand', () => {
            let result: IPharmacophoreContainer;

            beforeAll(() => {
                const input = {
                    id: 'id1',
                    label: 'label1',
                    ligand: {
                        data: '...',
                        format: 'mol2'
                    },
                    pharmacophore: {
                        data: '...',
                        format: 'phar'
                    }
                };
                result = prepPharmacophore(input, 0);
            });

            it('should show ligand', () => {
                expect(result.ligand && result.ligand.visible).toBeTruthy();
            });
        });

        describe('with protein', () => {
            describe('without ligand', () => {
                let result: IPharmacophoreContainer;

                beforeAll(() => {
                    const input = {
                        id: 'id1',
                        label: 'label1',
                        pharmacophore: {
                            data: '...',
                            format: 'phar'
                        },
                        protein: {
                            data: '...',
                            format: 'mol2'
                        }
                    };
                    result = prepPharmacophore(input, 0);
                });

                it('should show protein', () => {
                    expect(result.protein && result.protein.visible).toBeTruthy();
                });

                it('should have no hetero', () => {
                    expect(result.protein && result.protein.hasHetero).toBeFalsy();
                });

                it('should hide ligand', () => {
                    expect(result.protein && result.protein.ligandVisible).toBeFalsy();
                });

                it('should hide pocket', () => {
                    expect(result.protein && result.protein.pocketVisible).toBeFalsy();
                });
            });

            describe('with ligand', () => {
                let result: IPharmacophoreContainer;

                beforeAll(() => {
                    const input = {
                        id: 'id1',
                        label: 'label1',
                        pharmacophore: {
                            data: '...',
                            format: 'phar'
                        },
                        protein: {
                            data: 'HETATM 1188  H2  SRT A1076     -17.263  11.260  28.634  1.00 59.62           H  \n',
                            format: 'pdb'
                        }
                    };
                    result = prepPharmacophore(input, 0);
                });

                it('should show protein', () => {
                    expect(result.protein && result.protein.visible).toBeTruthy();
                });

                it('should have hetero', () => {
                    expect(result.protein && result.protein.hasHetero).toBeTruthy();
                });

                it('should show ligand', () => {
                    expect(result.protein && result.protein.ligandVisible).toBeTruthy();
                });

                it('should show pocket', () => {
                    expect(result.protein && result.protein.pocketVisible).toBeTruthy();
                });
            });
        });
    });
});
