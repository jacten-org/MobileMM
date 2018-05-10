import axios from 'axios';

import { REST_SERVER_URL } from 'react-native-dotenv';

export default {
  starFollow(matchId, index) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      try {
      await axios
        .put(`${REST_SERVER_URL}/api/outcomes/starSingleMatch/${id}/${matchId}`)
        dispatch({
          type: 'FOLLOW_STARRED_SUCCESS',
          payload: index,
          });
      } catch (err) {
        console.error
      }
    }
  },
  unstarFollow(matchId, index, page) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      try {
      await axios
        .put(`${REST_SERVER_URL}/api/outcomes/unstarSingleMatch/${id}/${matchId}`)
        dispatch({
          type: 'FOLLOW_UNSTARRED_SUCCESS',
          index: index,
          page: page,
          matchId: matchId,
          });
      } catch (err) {
        console.error
      }
    }
  },
} 