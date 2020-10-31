import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './App';
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {logger} from 'redux-logger'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware,logger)
)
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);