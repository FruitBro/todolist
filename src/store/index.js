import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSages from './sagas'

const sagaMiddleware = createSagaMiddleware()

// 通过下面的方式，即支持调试,也使用了Redux-thunk,知道就行
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(
    reducer,
    enhancer
)

sagaMiddleware.run(todoSages)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store