export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_ACCOUNT_DATA_RECIEVED':
      return { ...state, ...action.payload };
    case 'USER_ACCOUNT_DATA_UPDATED':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
