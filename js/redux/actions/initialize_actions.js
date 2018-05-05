import axios from 'axios';
import jwtDecode from 'jwt-decode';

import turnBirthdayIntoAge from '../../utils/turnBirthdayIntoAge';

import { REST_SERVER_URL, REDIS_SERVER_URL } from 'react-native-dotenv';


export default {
  initialize(navigate) {
    return async (dispatch, getState) => {
      try {
        let id = 25;
        console.log(REST_SERVER_URL, id)
        // const { id } = await jwtDecode(localStorage.token);
        const { data } = await axios.get(
          `${REST_SERVER_URL}/api/initialize/${id}`
        );
        const redisData = await axios.get(
          `${REDIS_SERVER_URL}/redis/leaderboard/fetchLeaderboardAndRank/${id}`
        );
        dispatch({
          type: 'INITIALIZE_STATUS_TRUE'
        });
        dispatch({
          type: 'USER_ACCOUNT_DATA_RECIEVED',
          payload: data.accountData || null
        });
        dispatch({
          type: 'USER_BIO_DATA_RECIEVED',
          payload: data.bioData || null
        });
        dispatch({
          type: 'USER_TAGS_RECIEVED',
          payload: data.tagData || null
        });
        dispatch({
          type: 'USER_PHOTOS_RECIEVED',
          payload: data.photoData.photos || null
        });
        dispatch({
          type: 'USER_POWERRANKING_RECIEVED',
          payload: {
            totalPoints: data.powerRankingData.totalPoints || 0,
            rank: redisData.data.rank || 0
          }
        });
        dispatch({
          type: 'USER_SIGNUP_STATUS_RECIEVED',
          payload: data.signupStatusData || false
        });
        dispatch({
          type: 'USER_FOLLOWS_RECIEVED',
          payload: data.outcomesData || null
        });
        dispatch({
          type: 'USER_CURRENT_MATCH_RECIEVED',
          payload: data.currentMatchData || null
        });
        dispatch({
          type: 'RATINGS_DATA_RECIEVED',
          payload: data.ratingData || null
        });
        dispatch({
          type: 'MATCHES_DATA_RECIEVED',
          payload: data.matchData || null
        });
        dispatch({
          type: 'LEADERBOARD_RECIEVED',
          payload: redisData.data.leaderboard || null
        });
        navigate('Main');
      } catch (err) {
        console.error;
      }
    };
  }
};
