import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  });
const enhancer = composeEnhanders(
    applyMiddleware(sagaMiddleware)
);



const store = createStore(
    reducer,
    enhancer
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
);

sagaMiddleware.run(mySaga);



export default store;