import * as React from 'react';

import { Button, ButtonGroup, DropdownButton, Glyphicon, MenuItem } from 'react-bootstrap';

import { EllipsisText } from '../../components/EllipsisText';
import { IPharmacophoreContainer } from '../types';

const uncheckedStyle = {display: 'inline-block', width: 14};

export interface IPharmacophoreListItemProps extends IPharmacophoreContainer {
    onPharmacophoreVisibilityClick(id: string): void;
    onPharmacophoreContainerVisibilityClick(id: string): void;
    onPharmacophoreSolidClick(id: string): void;
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

    onPharmacophoreSolidClick = () => {
        this.props.onPharmacophoreSolidClick(this.props.id);
    }

    render() {
        const p = this.props;
        const showLigand = (
            (p.ligand && p.ligand.visible)
            ||
            (p.protein && p.protein.hasHetero && p.protein.hetVisible)
        );
        const showProtein = p.protein && p.protein.visible && p.protein.proteinVisible;
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
                        <Button
                            bsSize="small"
                            title={p.visible ? 'Hide all' : 'Show all'}
                            onClick={this.onPharmacophoreContainerVisibilityClick}
                        >
                            <Glyphicon glyph={p.visible ? 'eye-open' : 'eye-close'} />
                        </Button>
                        <DropdownButton pullRight={true} bsSize="small" id={p.id} title="">
                            <MenuItem
                                title={p.visible ? 'Hide pharmacophore' : 'Show pharmacophore'}
                                disabled={!(p.visible)}
                                onSelect={this.onPharmacophoreVisibilityClick}
                            >
                                <Glyphicon glyph={p.pharmacophore.visible ? 'eye-open' : 'eye-close'} />
                                &nbsp;
                                Pharmacophore
                            </MenuItem>
                            <MenuItem
                                title={showProtein ? 'Hide protein' : 'Show protein'}
                                disabled={!(p.visible && p.protein)}
                                onSelect={this.onProteinVisibilityClick}
                            >
                                <Glyphicon glyph={showProtein ? 'eye-open' : 'eye-close'}/>
                                &nbsp;
                                Protein
                            </MenuItem>
                            <MenuItem
                                title={showLigand ? 'Hide ligand' : 'Show ligand'}
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
                                title={p.protein && p.protein.pocketVisible ? 'Hide pocket' : 'Show pocket'}
                                disabled={!(p.visible && p.protein && p.protein.hasHetero && p.protein.visible)}
                                onSelect={this.onPocketVisibilityClick}
                            >
                                <Glyphicon
                                    glyph={p.protein && p.protein.pocketVisible ? 'eye-open' : 'eye-close'}
                                />
                                &nbsp;
                                Pocket
                            </MenuItem>
                            <MenuItem divider={true}/>
                            <MenuItem
                                title={p.pharmacophore.solid ? 'Transparent pharmacophore' : 'Solid pharmacophore'}
                                disabled={!(p.visible)}
                                onSelect={this.onPharmacophoreSolidClick}
                            >
                                {p.pharmacophore.solid ? <Glyphicon glyph="ok"/> : <span style={uncheckedStyle}/>}
                                &nbsp;
                                Solid
                            </MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}
