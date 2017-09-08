import * as React from 'react';

import { Button, ButtonGroup, DropdownButton, Glyphicon, MenuItem } from 'react-bootstrap';

import { EllipsisText } from '../../components/EllipsisText';
import { IProtein } from '../types';

export interface IProteinListItemProps extends IProtein {
    onProteinVisibilityClick(id: string): void;
    onHeteroVisibilityClick(id: string): void;
    onPocketVisibilityClick(id: string): void;
    onWholeProteinVisibilityClick(id: string): void;
}

export class ProteinListItem extends React.Component<IProteinListItemProps, {}> {
    onHeteroVisibilityClick = () => {
        this.props.onHeteroVisibilityClick(this.props.id);
    }

    onPocketVisibilityClick = () => {
        this.props.onPocketVisibilityClick(this.props.id);
    }

    onProteinVisibilityClick = () => {
        this.props.onProteinVisibilityClick(this.props.id);
    }

    onWholeProteinVisibilityClick = () => {
        this.props.onWholeProteinVisibilityClick(this.props.id);
    }

    render() {
        const p = this.props;
        const dropDown = this.renderDropdown();
        return (
            <tr>
                <td>
                    <EllipsisText
                        maxLength={25}
                        text={this.props.label}
                        tooltipId={'protein-label-tooltip' + this.props.id}
                    />
                </td>
                <td style={{textAlign: 'right'}}>
                    <ButtonGroup>
                        <Button
                            bsSize="small"
                            title={p.visible ? 'Hide all' : 'Show all'}
                            onClick={this.onWholeProteinVisibilityClick}
                        >
                            <Glyphicon glyph={this.props.visible ? 'eye-open' : 'eye-close'} />
                        </Button>
                        {dropDown}
                    </ButtonGroup>
                </td>
            </tr>
        );
    }

    renderDropdown() {
        const p = this.props;
        const showHetero = (p.hasHetero && p.hetVisible);
        const showPocket = (p.hasHetero && p.pocketVisible);
        return (
            <DropdownButton
                pullRight={true}
                disabled={!p.visible}
                bsSize="small"
                title=""
                id={this.props.id}
                dropup={true}
            >
                <MenuItem
                    title={p.proteinVisible ? 'Hide structure' : 'Show structure'}
                    onSelect={this.onProteinVisibilityClick}
                >
                    <Glyphicon glyph={this.props.proteinVisible ? 'eye-open' : 'eye-close'} />
                    &nbsp;Structure
                </MenuItem>
                <MenuItem
                    title={showHetero ? 'Hide hetero' : 'Show hetero'}
                    disabled={!p.hasHetero}
                    onSelect={this.onHeteroVisibilityClick}
                >
                    <Glyphicon glyph={showHetero ? 'eye-open' : 'eye-close'} />
                    &nbsp;Hetero
                </MenuItem>
                <MenuItem
                    title={showPocket ? 'Hide pocket' : 'Show pocket'}
                    onSelect={this.onPocketVisibilityClick}
                >
                    <Glyphicon glyph={showPocket ? 'eye-open' : 'eye-close'} />
                    &nbsp;Pocket
                </MenuItem>
            </DropdownButton>
        );
    }
}
