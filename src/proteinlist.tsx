import * as React from 'react';

import { IProtein } from './protein';
import { ProteinListItem } from './proteinlistitem';

interface IProteinListProps {
    proteins: IProtein[];
    onProteinVisibilityClick(proteinId: string): void;
    onHeteroVisibilityClick(proteinId: string): void;
}

export const ProteinList = ({proteins, onProteinVisibilityClick, onHeteroVisibilityClick}: IProteinListProps) => (
    <table className='table table-condensed'><tbody>
        {proteins.map((protein) => (
            <ProteinListItem
                key={protein.id}
                {...protein}
                onProteinVisibilityClick={() => onProteinVisibilityClick(protein.id)}
                onHeteroVisibilityClick={() => onHeteroVisibilityClick(protein.id)}
            />
        ))}
    </tbody></table>
);
