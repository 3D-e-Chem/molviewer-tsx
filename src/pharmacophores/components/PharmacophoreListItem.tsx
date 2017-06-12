import * as React from 'react';

import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

import { EllipsisText } from '../../components/EllipsisText';
import { IPharmacophore } from '../types';

export interface IPharmacophoreListItemProps extends IPharmacophore {
    onPharmacophoreVisibilityClick(id: string): void;
    onProteinVisibilityClick(id: string): void;
    onLigandVisibilityClick(id: string): void;
    onPocketVisibilityClick(id: string): void;
}

export class PharmacophoreListItem extends React.Component<IPharmacophoreListItemProps, {}> {
    constructor() {
        super();
        this.onLigandVisibilityClick = this.onLigandVisibilityClick.bind(this);
        this.onPocketVisibilityClick = this.onPocketVisibilityClick.bind(this);
        this.onProteinVisibilityClick = this.onProteinVisibilityClick.bind(this);
        this.onPharmacophoreVisibilityClick = this.onPharmacophoreVisibilityClick.bind(this);
    }

    onLigandVisibilityClick() {
        this.props.onLigandVisibilityClick(this.props.id);
    }

    onPocketVisibilityClick() {
        this.props.onPocketVisibilityClick(this.props.id);
    }

    onProteinVisibilityClick() {
        this.props.onProteinVisibilityClick(this.props.id);
    }

    onPharmacophoreVisibilityClick() {
        this.props.onPharmacophoreVisibilityClick(this.props.id);
    }

    render() {
        return (
            <tr>
                <td>
                    <EllipsisText
                        maxLength={25}
                        text={this.props.label}
                        tooltipId={'phar-label-tooltip' + this.props.id}
                    />
                </td>
                <td style={{textAlign: 'right'}}>
                    <ButtonGroup>
                        <Button bsSize="small" title="All" onClick={this.onPharmacophoreVisibilityClick}>
                            A&nbsp;
                            <Glyphicon glyph={this.props.visible ? 'eye-open' : 'eye-close'} />
                        </Button>
                        <Button bsSize="small" title="Protein" onClick={this.onProteinVisibilityClick}>
                            Pr&nbsp;
                            <Glyphicon glyph={this.props.proteinVisible ? 'eye-open' : 'eye-close'} />
                        </Button>
                        <Button bsSize="small" title="Ligand" onClick={this.onLigandVisibilityClick}>
                            L&nbsp;
                            <Glyphicon glyph={this.props.ligandVisible ? 'eye-open' : 'eye-close'} />
                        </Button>
                        <Button bsSize="small" title="Pocket" onClick={this.onPocketVisibilityClick}>
                            Po&nbsp;
                            <Glyphicon glyph={this.props.pocketVisible ? 'eye-open' : 'eye-close'} />
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}
