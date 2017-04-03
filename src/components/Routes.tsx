import * as React from 'react';
import { Route } from 'react-router';
import { HashRouter as Router, Switch } from 'react-router-dom';

import { LigandsAndProteinsViewer } from '../containers/LigandsAndProteinsViewer';
import { NoMatch } from './NoMatch';

export const Routes = () => (
    <Router>
        <Switch>
            <Route path="/ligands-and-proteins" component={LigandsAndProteinsViewer}/>
            <Route component={NoMatch}/>
        </Switch>
    </Router>
);
