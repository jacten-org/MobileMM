import axios from 'axios';

import { REST_SERVER_URL } from 'react-native-dotenv';

export default {
  updateTagsState(type, tags) {
    return async (dispatch, getState) => {
      try {
        dispatch({
          type: 'TAGS_UPDATED',
          payload: {tags: tags, type: type}
        });
        dispatch({
          type: 'UNSAVED_CHANGES',
        });
      } catch (err) {
        console.error
      }
    }
  },
  saveTags() {
    return async (dispatch, getState) => {
      try {
        const { id } = getState().accountData;
        const { tags } = getState();
        await axios
          .put(`${REST_SERVER_URL}/api/tags/saveTags/${id}`, tags)
        dispatch({
          type: 'SAVED_CHANGES',
        });
      } catch (err) {
        console.error
      }
    }
  },
}