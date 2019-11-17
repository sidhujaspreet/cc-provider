import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main/rootReducer';

const configureStore = () => {
  return createStore(
      rootReducer,
      compose(
          applyMiddleware(thunk),
      )
  );
};

export default configureStore;
