import * as React from 'react';

import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

import { EllipsisText } from '../../components/EllipsisText';
import { IProtein } from '../types';

interface IProteinListItemProps extends IProtein {
    onProteinVisibilityClick(id: string): void;
    onHeteroVisibilityClick(id: string): void;
}

export class ProteinListItem extends React.Component<IProteinListItemProps, {}> {
    constructor() {
        super();
        this.onHeteroVisibilityClick = this.onHeteroVisibilityClick.bind(this);
        this.onProteinVisibilityClick = this.onProteinVisibilityClick.bind(this);
    }

    onHeteroVisibilityClick() {
        this.props.onHeteroVisibilityClick(this.props.id);
    }

    onProteinVisibilityClick() {
        this.props.onProteinVisibilityClick(this.props.id);
    }

    render() {
        return <tr>
            <td>
                <EllipsisText maxLength={25} text={this.props.label} tooltipId={'protein-label-tooltip' + this.props.id}/>
            </td>
            <td style={{textAlign: 'right'}}>
                <ButtonGroup>
                    <Button bsSize="small" title="All" onClick={this.onProteinVisibilityClick}>
                        A&nbsp;
                        <Glyphicon glyph={this.props.visible ? 'eye-open' : 'eye-close'} />
                    </Button>
                    <Button bsSize="small" title="Hetero" onClick={this.onHeteroVisibilityClick}>
                        H&nbsp;
                        <Glyphicon glyph={this.props.hetVisible ? 'eye-open' : 'eye-close'} />
                    </Button>
                </ButtonGroup>
            </td>
        </tr>;
    }
}
