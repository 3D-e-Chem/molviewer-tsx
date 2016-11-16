import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { LigandsAndProteinsViewer } from './containers/LigandsAndProteinsViewer';
import { mainSaga } from './mainSaga';
import { rootReducer } from './rootReducer';
import { ServerListener } from './sse';

import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mainSaga);

const serverlistener = new ServerListener(store.dispatch);
serverlistener.listen();

const container = document.getElementById('root');
ReactDOM.render(<Provider store={store}><LigandsAndProteinsViewer /></Provider>, container);
