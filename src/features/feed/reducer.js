import * as types from './types';

const INITIAL_STATE = {
  loading: false,
  results: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_FEED:
      return { ...state, loading: true, results: [] };
    case types.GET_FEED_SUCCESS:
      return { ...state, loading: false, results: action.payload };
    case types.GET_FEED_FAIL:
      return { ...state, loading: false, error: 'Error while fetching feed' };
    default:
      return state;
  }
}