import * as React from 'react';
import { Route } from 'react-router';
import { HashRouter as Router, Switch } from 'react-router-dom';

import { LigandsAndProteinsViewer } from '../containers/LigandsAndProteinsViewer';
import { PharmacophoresViewer } from '../containers/PharmacophoresViewer';
import { NoMatch } from './NoMatch';

export const Routes = () => (
    <Router>
        <Switch>
            <Route path="/ligands-and-proteins" component={LigandsAndProteinsViewer}/>
            <Route path="/pharmacophores" component={PharmacophoresViewer}/>
            <Route component={NoMatch}/>
        </Switch>
    </Router>
);
