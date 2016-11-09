import * as React from 'react';

import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

import { IProtein } from '../services/protein';

interface IProteinListItemProps extends IProtein {
    onProteinVisibilityClick(): void;
    onHeteroVisibilityClick(): void;
}

export const ProteinListItem = ({label,
                                 visible,
                                 hetVisible,
                                 onProteinVisibilityClick,
                                 onHeteroVisibilityClick
                                }: IProteinListItemProps) => (
    <tr>
        <td>{label}</td>
        <td style={{textAlign: 'right'}}>
            <ButtonGroup>
                <Button bsSize="small" title="All" onClick={onProteinVisibilityClick}>
                    A&nbsp;
                    <Glyphicon glyph={visible ? 'eye-open' : 'eye-close'} />
                </Button>
                <Button bsSize="small" title="Hetero" onClick={onHeteroVisibilityClick}>
                    H&nbsp;
                    <Glyphicon glyph={hetVisible ? 'eye-open' : 'eye-close'} />
                </Button>
            </ButtonGroup>
        </td>
    </tr>
);
