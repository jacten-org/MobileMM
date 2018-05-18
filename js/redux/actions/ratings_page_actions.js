import axios from 'axios';

import { REST_SERVER_URL } from 'react-native-dotenv';

export default {
  submitRating(ratingObject) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      const total = getState().ratings.length;
      try {
        console.log(total, 'TOTALLL')
        await axios.put(
          `${REST_SERVER_URL}/api/ratings/updateUserRating`,
          ratingObject 
        )
        console.log(total, 'TOTALLL')
        if (total === 1) {
          const data = await axios.get(
            `${REST_SERVER_URL}/api/ratings/fetchMultipleUsers/${id}`
          ); 
          dispatch({
            type: 'ADDITIONAL_USERS_TO_RATE_ADDED',
            payload: data.data,
            });
          }
        dispatch({
          type: 'RATING_SUBMITTED',
        });
      } catch (err) {
        console.error;
      }
    };
  }
}; 
