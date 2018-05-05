
export default (state = true, action) => {
  switch (action.type) {
    case 'UNSAVED_CHANGES':
      return (state = false);
    case 'SAVED_CHANGES':
      return (state = true);
    default:
      return state;
  }
}