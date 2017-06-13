import * as React from 'react';

import { IPharmacophoreFunctionalType } from '../types';
import { LegendItem } from './LegendItem';

interface IProps {
    types: IPharmacophoreFunctionalType[];
}

export const Legend = ({types}: IProps) => {
    const items = types.map((d) => <LegendItem key={d.label} {...d}/>);
    return (
        <div>
            <h5>Functional types</h5>
            <ul className="list-group">
                {items}
            </ul>
        </div>
    );
};
