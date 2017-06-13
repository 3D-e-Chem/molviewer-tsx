import * as React from 'react';

import { LigandGLModel } from '../../ligands';
import { ProteinGLModel } from '../../proteins';
import { IPharmacophoreContainer } from '../types';
import { PharmacophoreGLModel } from './PharmacophoreGLModel';

interface IProps {
    pharmacophore: IPharmacophoreContainer;
    pocketRadius: number;
}

export const PharmacophoreContainerModel = ({pharmacophore, pocketRadius}: IProps) => {
    let protein;
    if (pharmacophore.protein !== undefined && pharmacophore.proteinFormat !== undefined) {
        protein = (
            <ProteinGLModel
                visible={pharmacophore.visible && pharmacophore.proteinVisible}
                data={pharmacophore.protein}
                format={pharmacophore.proteinFormat}
                pocketRadius={pocketRadius}
                pocketVisible={pharmacophore.pocketVisible}
                hetVisible={pharmacophore.ligandVisible}
            />
        );
    }
    let ligand;
    if (pharmacophore.ligand !== undefined && pharmacophore.ligandFormat !== undefined) {
        ligand = (
            <LigandGLModel
                visible={pharmacophore.visible && pharmacophore.ligandVisible}
                data={pharmacophore.ligand}
                format={pharmacophore.ligandFormat}
            />
        );
    }
    return (
        <div>
            <PharmacophoreGLModel
                visible={pharmacophore.visible && pharmacophore.pharmacophoreVisible}
                data={pharmacophore.pharmacophore}
                format={pharmacophore.pharmacophoreFormat}
            />
            {protein}
            {ligand}
        </div>
    );
};
