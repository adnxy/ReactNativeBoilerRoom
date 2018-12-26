import axios from 'axios';
import * as types from './types';

function feeedRequest() {
  return {
    type: types.GET_FEED,
  };
}

function feedSuccess(response) {
  return {
    type: types.GET_FEED_SUCCESS,
    payload: response.data,
  };
}

function feedFailure(error) {
  return {
    type: types.GET_FEED_FAIL,
    payload: error,
  };
}

export function getFeed(user) {
  return async (dispatch) => {
    dispatch(feeedRequest());
    try {
      const response = await axios.get(`https://api.github.com/users/${user}/repos`);
      dispatch(feedSuccess(response));
    } catch (error) {
      dispatch(feedFailure(error.message));
    }
  };
}
