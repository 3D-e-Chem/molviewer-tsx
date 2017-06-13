import * as React from 'react';

import { IPharmacophoreFunctionalType } from '../types';

export class LegendItem extends React.Component<IPharmacophoreFunctionalType, {}> {

    render() {
        const { description, label, color} = this.props;
        return (
            <li
                className="list-group-item"
                style={{backgroundColor: color}}
                alt={label}
            >
                {description}
            </li>
        );
    }
}
