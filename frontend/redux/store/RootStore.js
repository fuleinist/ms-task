import { createStore, combineReducers } from 'redux';
import rootReducer from 'redux/reducers/RootReducer';
import sampleReducer from 'redux/reducers/SampleReducer';
import { routerReducer } from 'react-router-redux';

// Initialize store
const store = createStore(
  combineReducers({
    app: rootReducer,
    sample: sampleReducer,
    routing: routerReducer,
  }),
  {}, /* initial state */
  // redux-devtools extension
  // https://github.com/zalmoxisus/redux-devtools-extension
  // - Install Chrome/Firefox addon
  // - Open develop toolbar on Chrome
  // - Or select redux `Redux DevTools` from web page
  // - will crash IE11
);

export default store;
