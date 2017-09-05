import * as React from 'react';
import { Route } from 'react-router';
import { HashRouter as Router, Switch } from 'react-router-dom';

import { LigandsAndProteinsViewer } from '../containers/LigandsAndProteinsViewer';
import { LigandsViewer } from '../containers/LigandsViewer';
import { PharmacophoresViewer } from '../containers/PharmacophoresViewer';
import { ProteinsViewer } from '../containers/ProteinsViewer';
import { NoMatch } from './NoMatch';

export const Routes = () => (
    <Router>
        <Switch>
            <Route path="/ligands-and-proteins" component={LigandsAndProteinsViewer}/>
            <Route path="/ligands" component={LigandsViewer}/>
            <Route path="/pharmacophores" component={PharmacophoresViewer}/>
            <Route path="/proteins" component={ProteinsViewer}/>
            <Route component={NoMatch}/>
        </Switch>
    </Router>
);
