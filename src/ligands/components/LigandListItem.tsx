import * as React from 'react';

import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

import { EllipsisText } from '../../components/EllipsisText';
import { ILigand } from '../types';

interface ILigandListItemProps extends ILigand {
    onVisibilityClick(id: string): void;
}

export class LigandListItem extends React.Component<ILigandListItemProps, {}> {
    constructor() {
        super();
        this.onVisibilityClick = this.onVisibilityClick.bind(this);
    }

    onVisibilityClick() {
        this.props.onVisibilityClick(this.props.id);
    }

    render() {
        return (
            <tr>
                <td className="item-label">
                    <EllipsisText
                        maxLength={32}
                        text={this.props.label}
                        tooltipId={'ligand-label-tooltip' + this.props.id}
                    />
                </td>
                <td style={{textAlign: 'right'}}>
                    <ButtonGroup>
                        <Button bsSize="small" onClick={this.onVisibilityClick}>
                            <Glyphicon glyph={this.props.visible ? 'eye-open' : 'eye-close'} />
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}
