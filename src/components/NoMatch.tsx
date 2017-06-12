import * as React from 'react';
import { Link } from 'react-router-dom';

export const NoMatch = () => (
    <div>
        <h1>404 - Not Found</h1>
        <span>Available viewers</span>
        <ul>
            <li><Link to="/ligands-and-proteins">Ligands and Proteins Viewer</Link></li>
            <li><Link to="/pharmacophores">Pharmacophores Viewer</Link></li>
        </ul>
    </div>
);
