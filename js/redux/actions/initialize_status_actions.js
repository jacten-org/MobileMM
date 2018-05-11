import axios from 'axios';

import { REST_SERVER_URL } from 'react-native-dotenv'; 

export default {
  updateInitializeState() {
    return async (dispatch, getState) => {
      let { initializeState } = getState();
      console.log('initialize state from actions', initializeState)
      try {
        dispatch({
          type: 'INITIALIZE_STATUS_TRUE',
        })
      } catch (err) {
        console.log('error on update initialize state action', err)
      }
    }
  }
};