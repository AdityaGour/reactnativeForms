import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
