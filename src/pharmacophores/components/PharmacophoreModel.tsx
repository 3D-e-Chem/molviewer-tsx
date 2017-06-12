import * as React from 'react';

import { LigandGLModel } from '../../ligands';
import { ProteinGLModel } from '../../proteins';
import { IPharmacophore } from '../types';
import { PharmacophoreGLModel } from './PharmacophoreGLModel';

interface IProps {
    pharmacophore: IPharmacophore;
    pocketRadius: number;
}

export const PharmacophoreModel = ({pharmacophore, pocketRadius}: IProps) => (
    <div>
        <PharmacophoreGLModel
            visible={pharmacophore.visible}
            data={pharmacophore.pharmacophore}
            format={pharmacophore.pharmacophoreFormat}
        />
        <ProteinGLModel
            visible={pharmacophore.proteinVisible}
            data={pharmacophore.protein}
            format={pharmacophore.proteinFormat}
            pocketRadius={pocketRadius}
            pocketVisible={pharmacophore.pocketVisible}
            hetVisible={pharmacophore.ligandVisible}
        />
        <LigandGLModel
            visible={pharmacophore.ligandVisible}
            data={pharmacophore.ligand}
            format={pharmacophore.ligandFormat}
        />
    </div>
);
