// TODO replace with `import React from 'react'`, but tslint complains see https://github.com/palantir/tslint/issues/893
import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

import { ILigand } from './ligand';

interface ILigandListItemProps extends ILigand {
    onVisibilityClick(): void;
}

export const LigandListItem = ({label, visible, onVisibilityClick}: ILigandListItemProps) => (
    <tr>
        <td>{label}</td>
        <td>
            <Button bsSize='small' onClick={onVisibilityClick}>
                <Glyphicon glyph={visible ? 'eye-open' : 'eye-close'} />
            </Button>
        </td>
    </tr>
);
