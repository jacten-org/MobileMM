import axios from 'axios';

import { REST_SERVER_URL, S3_SERVER_URL } from 'react-native-dotenv';

export default {
  updateAccountData(accountData) {
    return async (dispatch, getState) => {
      try {
        const { id } = await getState().accountData
        accountData.id = id;
        await axios
          .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, accountData)
        dispatch({
          type: 'USER_ACCOUNT_DATA_UPDATED',
          payload: accountData
        });
      } catch (err) {
        console.error
      }
    }
  },
  updateBioData(bioData) {
    return async (dispatch, getState) => {
      try {
        const { id } = await getState().accountData
        bioData.id = id
        await axios
          .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, bioData)
        delete bioData.id
        dispatch({
          type: 'USER_BIO_DATA_UPDATED',
          payload: bioData
        });
      } catch (err) {
        console.error
      }
    }
  },
  updateTagsData(type, tags) {
    return async (dispatch, getState) => {
      try {
        const { id } = getState().accountData;
        await axios
          .put(`${REST_SERVER_URL}/api/tags/userAndPreferenceTags/${type}/${id}`, tags)
        dispatch({
          type: 'USER_TAGS_UPDATED',
          payload: {tags: tags, type: type}
        });
      } catch (err) {
        console.error
      }
    }
  },
  uploadPhoto(formData) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      try {
        await axios
          .post(`${S3_SERVER_URL}/api/s3`, formData);
        const { data } = await axios
          .get(`${REST_SERVER_URL}/api/photos/fetchAllPhotos/${id}`)
        setTimeout(() => {
          dispatch({
            type: 'USER_PHOTO_ADDED',
            payload: data
          });
        }, 2000)
      } catch (err) {
        console.error
      }
    }
  },
  deletePhoto(key, photoId, targetPhoto) {
    return async (dispatch, getState) => {
      try {
        const { id } = getState().accountData;
        await axios
          .delete(`${S3_SERVER_URL}/api/s3/${id}/${key}/${photoId}`)
        dispatch({
          type: 'USER_PHOTO_DELETED',
          payload: targetPhoto,
        });
      } catch (err) {
        console.error
      }
    }
  },
  updatePrimaryPhoto(photoId, targetPhoto) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      try {
        await axios.
          put(`${REST_SERVER_URL}/api/photos/updatePrimaryPhoto/${id}/${photoId}`)
        dispatch({
          type: 'USER_PRIMARY_PHOTO_UPDATED',
          payload: targetPhoto
        });
      } catch (err) {
        console.error
      }
    }
  },
  updateSignupStatus() {
    return async (dispatch, getState) => {
      try {
        const { signupStatus } = getState();
        const { id } = getState().accountData;
        const signupStatusData = { signupcomplete: 1, id: id };
        if (!signupStatus) {
          await axios
            .put(`${REST_SERVER_URL}/api/users/updateUserInfo`, signupStatusData)
          dispatch({
            type: 'SIGNUP_COMPLETE'
          });
        }
      } catch (err) {
        console.error
      }
    }
  },
}
