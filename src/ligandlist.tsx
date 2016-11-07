import * as React from 'react';

import { ILigand } from './ligand';
import { LigandListItem } from './ligandlistitem';
import { ListActions } from './ListActions';

interface ILigandListProps {
    ligands: ILigand[];
    onLigandVisibilityClick(ligandId: string): void;
    onShowAllClick(): void;
    onHideAllClick(): void;
}

function onClick(func: (id: string) => void, id: string) {
    return () => func(id);
}

export const LigandList = ({ligands, onLigandVisibilityClick, onShowAllClick, onHideAllClick}: ILigandListProps) => {
    let listactions: JSX.Element = <div/>;
    if (ligands.length > 1) {
        listactions = <ListActions hideAll={onHideAllClick} showAll={onShowAllClick}/>;
    }
    const ligandItems = ligands.map((ligand) => (
        <LigandListItem
            key={ligand.id}
            {...ligand}
            onVisibilityClick={onClick(onLigandVisibilityClick, ligand.id)}
        />
    ));
    return <div style={{ height: '85%', overflowY: 'auto'}}>
        <h5>Ligands</h5>
        {listactions}
        <table className="table table-condensed"><tbody>
            {ligandItems}
        </tbody></table>
    </div>;
};
