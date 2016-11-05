import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import { ConnectedSdfPdbViewer } from './sdfpdbviewer';
import { ServerListener } from './serverlistener';

import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const serverlistener = new ServerListener(store.dispatch);
serverlistener.listen();

const container = document.getElementById('root');
ReactDOM.render(<Provider store={store}><ConnectedSdfPdbViewer /></Provider>, container);
