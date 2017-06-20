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
        const p = this.props;
        const showLigand = (
            (p.ligand && p.ligand.visible)
            ||
            (p.protein && p.protein.hasHetero && p.protein.ligandVisible)
        );
        return (
            <tr>
                <td>
                    <EllipsisText
                        maxLength={25}
                        text={p.label}
                        tooltipId={'phar-label-tooltip' + p.id}
                    />
                </td>
                <td style={{textAlign: 'right'}}>
                    <ButtonGroup>
                        <Button bsSize="small" title="All" onClick={this.onPharmacophoreContainerVisibilityClick}>
                            <Glyphicon glyph={p.visible ? 'eye-open' : 'eye-close'} />
                        </Button>
                        <DropdownButton pullRight={true} bsSize="small" id={p.id} title="">
                                <MenuItem
                                    title="Pharmacophore"
                                    disabled={!(p.visible)}
                                    onSelect={this.onPharmacophoreVisibilityClick}
                                >
                                    <Glyphicon glyph={p.pharmacophore.visible ? 'eye-open' : 'eye-close'} />
                                    &nbsp;
                                    Pharmacophore
                                </MenuItem>
                                <MenuItem
                                    title="Protein"
                                    disabled={!(p.visible && p.protein)}
                                    onSelect={this.onProteinVisibilityClick}
                                >
                                    <Glyphicon
                                        glyph={p.protein && p.protein.visible ? 'eye-open' : 'eye-close'}
                                    />
                                    &nbsp;
                                    Protein
                                </MenuItem>
                                <MenuItem
                                    title="Ligand"
                                    disabled={!(p.visible && (p.ligand || (p.protein && p.protein.hasHetero)))}
                                    onSelect={this.onLigandVisibilityClick}
                                >
                                    <Glyphicon
                                        glyph={showLigand ? 'eye-open' : 'eye-close'}
                                    />
                                    &nbsp;
                                    Ligand
                                </MenuItem>
                                <MenuItem
                                    title="Pocket"
                                    disabled={!(p.visible && p.protein && p.protein.hasHetero && p.protein.visible)}
                                    onSelect={this.onPocketVisibilityClick}
                                >
                                    <Glyphicon
                                        glyph={p.protein && p.protein.pocketVisible ? 'eye-open' : 'eye-close'}
                                    />
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
