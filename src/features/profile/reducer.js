import * as types from './types';

const INITIAL_STATE = {
  loading: false,
  results: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_PROFILE:
      return { ...state, loading: true, results: [] };
    case types.GET_PROFILE_SUCCESS:
      return { ...state, loading: false, results: action.payload };
    case types.GET_PROFILE_FAIL:
      return { ...state, loading: false, error: 'Error while fetching flowers' };
    default:
      return state;
  }
}