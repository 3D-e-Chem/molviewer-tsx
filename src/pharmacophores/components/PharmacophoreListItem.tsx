import * as React from 'react';

import { Button, ButtonGroup, DropdownButton, Glyphicon, MenuItem } from 'react-bootstrap';

import { EllipsisText } from '../../components/EllipsisText';
import { IPharmacophoreContainer } from '../types';

export interface IPharmacophoreListItemProps extends IPharmacophoreContainer {
    onPharmacophoreVisibilityClick(id: string): void;
    onPharmacophoreContainerVisibilityClick(id: string): void;
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
        this.onPharmacophoreContainerVisibilityClick = this.onPharmacophoreContainerVisibilityClick.bind(this);
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

    onPharmacophoreContainerVisibilityClick() {
        this.props.onPharmacophoreContainerVisibilityClick(this.props.id);
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
                        <Button bsSize="small" title="All" onClick={this.onPharmacophoreContainerVisibilityClick}>
                            <Glyphicon glyph={this.props.visible ? 'eye-open' : 'eye-close'} />
                        </Button>
                        <DropdownButton pullRight={true} bsSize="small" id={this.props.id} title="">
                                <MenuItem
                                    title="Pharmacophore"
                                    disabled={!(this.props.visible)}
                                    onSelect={this.onPharmacophoreVisibilityClick}
                                >
                                    <Glyphicon glyph={this.props.pharmacophoreVisible ? 'eye-open' : 'eye-close'} />
                                    &nbsp;
                                    Pharmacophore
                                </MenuItem>
                                <MenuItem
                                    title="Protein"
                                    disabled={!(this.props.visible && this.props.protein)}
                                    onSelect={this.onProteinVisibilityClick}
                                >
                                    <Glyphicon glyph={this.props.proteinVisible ? 'eye-open' : 'eye-close'} />
                                    &nbsp;
                                    Protein
                                </MenuItem>
                                <MenuItem
                                    title="Ligand"
                                    disabled={!(this.props.visible && (this.props.ligand || this.props.proteinVisible))}
                                    onSelect={this.onLigandVisibilityClick}
                                >
                                    <Glyphicon glyph={this.props.ligandVisible ? 'eye-open' : 'eye-close'} />
                                    &nbsp;
                                    Ligand
                                </MenuItem>
                                <MenuItem
                                    title="Pocket"
                                    disabled={!(this.props.visible && this.props.proteinVisible)}
                                    onSelect={this.onPocketVisibilityClick}
                                >
                                    <Glyphicon glyph={this.props.pocketVisible ? 'eye-open' : 'eye-close'} />
                                    &nbsp;
                                    Pocket
                                </MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}
