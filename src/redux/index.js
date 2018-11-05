import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './saga'
const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(sagaMiddleware, logger)

const store = createStore(reducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
