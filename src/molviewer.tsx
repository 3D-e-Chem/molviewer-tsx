// TODO replace with `import React from 'react'`, but tslint complains see https://github.com/palantir/tslint/issues/893
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { ConnectedSdfPdbViewer } from './sdfpdbviewer';
import { ServerListener } from './serverlistener';

import 'bootstrap/dist/css/bootstrap.css!';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

const serverlistener = new ServerListener(store.dispatch);
serverlistener.listen();

const container = document.getElementById('container');
ReactDOM.render(<Provider store={store}><ConnectedSdfPdbViewer /></Provider>, container);
