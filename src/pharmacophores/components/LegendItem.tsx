import * as React from 'react';

import { ListGroupItem } from 'react-bootstrap';

import { IPharmacophoreFunctionalType } from '../types';

export const LegendItem = ({ description, label, color}: IPharmacophoreFunctionalType) => (
    <ListGroupItem
        style={{backgroundColor: color}}
        alt={label}
    >
        {description}
    </ListGroupItem>
);
