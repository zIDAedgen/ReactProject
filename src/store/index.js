import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

/*
const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  });
const enhancer = composeEnhanders(
    applyMiddleware(thunk)
);
*/
const store = createStore(
    reducer,
    applyMiddleware(thunk)
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
);

export default store;