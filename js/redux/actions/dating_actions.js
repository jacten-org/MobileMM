import axios from 'axios';

import { REST_SERVER_URL } from 'react-native-dotenv';

export default {
  acceptPendingMatch() {
    return async (dispatch, getState) => {
      const matchId = getState().dating.pending[0].id;
      const userId = getState().accountData.id;
      try {
        await axios
          .put(`${REST_SERVER_URL}/api/stageTwo/acceptStageTwo/${matchId}/${userId}`);
        // const { data } = await axios
        //   .get(`${REST_SERVER_URL}/api/stageTwo/fetchStageTwo/${userId}`)
        dispatch({
          type: 'PENDING_DATING_ACCECPTED',
          });
      } catch (err) {
        console.error
      }
    }
  },
  rejectPendingMatch() {
    return async (dispatch, getState) => {
      const matchId = getState().dating.pending[0].id;
      const userId = getState().accountData.id;
      try {
        await axios
          .put(`${REST_SERVER_URL}/api/stageTwo/rejectOrEndStageTwo/${matchId}/${userId}`);
        // const { data } = await axios
        //   .get(`${REST_SERVER_URL}/api/stageTwo/fetchStageTwo/${userId}`)
        dispatch({
          type: 'PENDING_DATING_REJECTED',
        });
      } catch (err) {
        console.error
      }
    } 
  },
  checkForNewMatch() {
    return async (dispatch, getState) => {
      const userId = getState().accountData.id;
      try {
        const { data } = await axios
          .get(`${REST_SERVER_URL}/api/stageTwo/fetchStageTwo/${userId}`)
        dispatch({
          type: 'CURRENT_MATCH_REFRESHED',
          payload: data,
        });
      } catch (err) {
        console.error
      }
    }
  },
} 