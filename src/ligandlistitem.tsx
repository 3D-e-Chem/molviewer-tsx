// TODO replace with `import React from 'react'`, but tslint complains see https://github.com/palantir/tslint/issues/893
import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

import {ILigand} from './ligand';

interface ILigandListItemProps {
    ligand: ILigand;
}

export class LigandListItem extends React.Component<ILigandListItemProps, {}> {
    public render() {
        const ligand = this.props.ligand;
        return <tr>
           <td>{ligand.label}</td>
           <td>
             <Button bsSize='small' onClick={() => this.toggleLigandVisibility(ligand)}>
               <Glyphicon glyph={ligand.visible ? 'eye-open' : 'eye-close'}/>
             </Button>
           </td>
        </tr>;
    }

    protected toggleLigandVisibility(ligand: ILigand) {
        // TODO move to redux reducer, now its not working
        ligand.visible = !ligand.visible;
    }
}
