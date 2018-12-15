import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import FeedReducer from '../features/feed/reducer';
import ProfileReducer from '../features/profile/reducer';

export default function configureStore() {
  const initialState = {};
  const middleware = applyMiddleware(ReduxThunk, logger);
  const reducers = combineReducers({
    feed: FeedReducer,
    profile: ProfileReducer,
  });

  return createStore(reducers, initialState, middleware);
}
