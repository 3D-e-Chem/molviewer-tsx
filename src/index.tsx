import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './reducers';
import { sagas } from './sagas';
import { ConnectedSdfPdbViewer } from './sdfpdbviewer';
import { ServerListener } from './ServerListener';

import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

const serverlistener = new ServerListener(store.dispatch);
serverlistener.listen();

const container = document.getElementById('root');
ReactDOM.render(<Provider store={store}><ConnectedSdfPdbViewer /></Provider>, container);
