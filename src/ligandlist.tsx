// TODO replace with `import React from 'react'`, but tslint complains see https://github.com/palantir/tslint/issues/893
import * as React from 'react';

import {ILigand} from './ligand';
import {LigandListItem} from './ligandlistitem';

interface ILigandListProps {
    ligands: ILigand[];
}

export class LigandList extends React.Component<ILigandListProps, {}> {
    public render() {
        return <table className='table table-condensed"'><tbody>
            { this.props.ligands.map((ligand) => <LigandListItem key={ligand.id} ligand={ligand}/>) }
        </tbody></table>;
    }
}
