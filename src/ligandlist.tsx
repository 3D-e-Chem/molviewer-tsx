// TODO replace with `import React from 'react'`, but tslint complains see https://github.com/palantir/tslint/issues/893
import * as React from 'react';

import { ILigand } from './ligand';
import { LigandListItem } from './ligandlistitem';

interface ILigandListProps {
    ligands: ILigand[];
    onLigandVisibilityClick(ligandId: string): void;
}

export const LigandList = ({ligands, onLigandVisibilityClick}: ILigandListProps) => (
    <table className='table table-condensed'><tbody>
        {ligands.map((ligand) => (
            <LigandListItem
                key={ligand.id}
                {...ligand}
                onVisibilityClick={() => onLigandVisibilityClick(ligand.id)}
            />
        ))}
    </tbody></table>
);
