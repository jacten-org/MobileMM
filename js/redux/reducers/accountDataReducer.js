const initialState = {
  id: null,
  username: null,
  email: null,
  firstname: null,
  lastname: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ACCOUNT_DATA_RECIEVED':
      return { ...state, ...action.payload };
    case 'USER_ACCOUNT_DATA_UPDATED':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
