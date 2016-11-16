import * as React from 'react';
import { hashHistory, Route, Router } from 'react-router';

import { LigandsAndProteinsViewer } from '../containers/LigandsAndProteinsViewer';
import { NoMatch } from './NoMatch';

export const Routes = () => (
    <Router history={hashHistory}>
        <Route path="/ligands-and-proteins" component={LigandsAndProteinsViewer}/>
        <Route path="*" component={NoMatch}/>
    </Router>
);
