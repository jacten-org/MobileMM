export default (state = 0, action) => {
  switch (action.type) {
    case 'PASSWORD_UPDATE_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}