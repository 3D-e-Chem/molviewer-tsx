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
    const pp = pharmacophore.protein;
    if (pp) {
        protein = (
            <ProteinGLModel
                visible={pharmacophore.visible && pp.visible}
                data={pp.data}
                format={pp.format}
                pocketRadius={pocketRadius}
                pocketVisible={pp.pocketVisible}
                hetVisible={pp.ligandVisible}
                transform={pharmacophore.transform}
            />
        );
    }
    let ligand;
    const pl = pharmacophore.ligand;
    if (pl) {
        ligand = (
            <LigandGLModel
                visible={pharmacophore.visible && pl.visible}
                data={pl.data}
                format={pl.format}
                transform={pharmacophore.transform}
            />
        );
    }
    const p = pharmacophore.pharmacophore;
    return (
        <div>
            <PharmacophoreGLModel
                visible={pharmacophore.visible && p.visible}
                data={p.data}
                format={p.format}
                solid={p.solid}
                transform={pharmacophore.transform}
            />
            {protein}
            {ligand}
        </div>
    );
};
