import { IPharmacophoreContainer, IRestAnonymousMolecule, IRestPharmacophoreContainer } from './types';

const initialShownMolecules = 1;

// Copied from https://github.com/arose/ngl/blob/master/src/structure/structure-constants.js
// as it is not part of ngl distribution
const WaterNames = [
    'SOL', 'WAT', 'HOH', 'H2O', 'W', 'DOD', 'D3O', 'TIP3', 'TIP4'
];

// Copied from https://github.com/arose/ngl/blob/master/src/structure/structure-constants.js
// as it is not part of ngl distribution
const IonNames = [
    '118', '119', '1AL', '1CU', '2FK', '2HP', '2OF', '3CO',
    '3MT', '3NI', '3OF', '3P8', '4MO', '4PU', '543', '6MO', 'ACT', 'AG', 'AL',
    'ALF', 'AM', 'ATH', 'AU', 'AU3', 'AUC', 'AZI', 'BA', 'BCT', 'BEF', 'BF4', 'BO4',
    'BR', 'BS3', 'BSY', 'CA', 'CAC', 'CD', 'CD1', 'CD3', 'CD5', 'CE', 'CHT', 'CL',
    'CO', 'CO3', 'CO5', 'CON', 'CR', 'CS', 'CSB', 'CU', 'CU1', 'CU3', 'CUA', 'CUZ',
    'CYN', 'DME', 'DMI', 'DSC', 'DTI', 'DY', 'E4N', 'EDR', 'EMC', 'ER3', 'EU',
    'EU3', 'F', 'FE', 'FE2', 'FPO', 'GA', 'GD3', 'GEP', 'HAI', 'HG', 'HGC', 'IN',
    'IOD', 'IR', 'IR3', 'IRI', 'IUM', 'K', 'KO4', 'LA', 'LCO', 'LCP', 'LI', 'LU',
    'MAC', 'MG', 'MH2', 'MH3', 'MLI', 'MLT', 'MMC', 'MN', 'MN3', 'MN5', 'MN6',
    'MO1', 'MO2', 'MO3', 'MO4', 'MO5', 'MO6', 'MOO', 'MOS', 'MOW', 'MW1', 'MW2',
    'MW3', 'NA', 'NA2', 'NA5', 'NA6', 'NAO', 'NAW', 'NCO', 'NET', 'NH4', 'NI',
    'NI1', 'NI2', 'NI3', 'NO2', 'NO3', 'NRU', 'O4M', 'OAA', 'OC1', 'OC2', 'OC3',
    'OC4', 'OC5', 'OC6', 'OC7', 'OC8', 'OCL', 'OCM', 'OCN', 'OCO', 'OF1', 'OF2',
    'OF3', 'OH', 'OS', 'OS4', 'OXL', 'PB', 'PBM', 'PD', 'PDV', 'PER', 'PI', 'PO3',
    'PO4', 'PR', 'PT', 'PT4', 'PTN', 'RB', 'RH3', 'RHD', 'RU', 'SB', 'SCN', 'SE4',
    'SEK', 'SM', 'SMO', 'SO3', 'SO4', 'SR', 'T1A', 'TB', 'TBA', 'TCN', 'TEA', 'TH',
    'THE', 'TL', 'TMA', 'TRA', 'UNX', 'V', 'VN3', 'VO4', 'W', 'WO5', 'Y1', 'YB',
    'YB2', 'YH', 'YT3', 'ZCM', 'ZN', 'ZN2', 'ZN3', 'ZNO', 'ZO3',
    // additional ion names
    'OHX'
];

export function detectHetero(protein: IRestAnonymousMolecule) {
  if (protein.format === 'pdb') {
    return protein.data.split(/\n/).some((line) => {
      if (line.substr(0, 6) === 'HETATM') {
        const hetatmName = line.substr(17, 3).trim();
        const isIon = IonNames.indexOf(hetatmName) > -1;
        const isWater = WaterNames.indexOf(hetatmName) > -1;
        return (!(isIon || isWater));
      }
      return false;
    });
  }
  return false;
}

export function prepPharmacophore(restPharmacophore: IRestPharmacophoreContainer, index: number) {
  const pharmacophore = restPharmacophore as IPharmacophoreContainer;
  pharmacophore.visible = index < initialShownMolecules;
  pharmacophore.pharmacophore.visible = true;
  pharmacophore.pharmacophore.solid = index < initialShownMolecules;
  if (pharmacophore.protein) {
    pharmacophore.protein.visible = true;
    pharmacophore.protein.hasHetero = detectHetero(pharmacophore.protein);
    pharmacophore.protein.pocketVisible = pharmacophore.protein.hasHetero;
    pharmacophore.protein.ligandVisible = pharmacophore.protein.hasHetero;
  }
  if (pharmacophore.ligand) {
    pharmacophore.ligand.visible = true;
  }
  return pharmacophore;
}

export function fetchPharmacophores(url: string = '/api/pharmacophores') {
  return fetch(url)
    .then<IRestPharmacophoreContainer[]>((response) => response.json())
    .then<IPharmacophoreContainer[]>((restPharmacophores) => restPharmacophores.map(prepPharmacophore));
}
