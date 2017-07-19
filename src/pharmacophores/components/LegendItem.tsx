import * as React from 'react';

import { Glyphicon, ListGroupItem } from 'react-bootstrap';

import { IPharmacophoreFunctionalType } from '../types';

export interface IProps extends IPharmacophoreFunctionalType {
    onToggle(label: string): void;
}

export class LegendItem extends React.Component<IProps, {}> {
    onToggle = () => {
        this.props.onToggle(this.props.label);
    }

    render() {
        const { checked, description, label, color } = this.props;
        return (
            <ListGroupItem
                style={{backgroundColor: color}}
                alt={label}
                onClick={this.onToggle}
            >
                <Glyphicon glyph={checked ? 'eye-open' : 'eye-close'}/>
                &nbsp;
                {description}
            </ListGroupItem>
        );
    }
}
