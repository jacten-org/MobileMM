const unstar = (matchId, starred, allOthers) => {
  allOthers.forEach((item) => {
    if (item.id === matchId) {
      item.starred = 0;
    }
  })
  starred.forEach((item, index) => {
    if (item.id === matchId) {
      starred.splice(index, 1)
    }
  })
}

export default (state = { starred: [], allOthers: [] }, { type, payload, page, index, matchId }) => {
  switch (type) {
    case 'USER_FOLLOWS_RECIEVED':
      return (state = payload);
    case 'FOLLOW_STARRED_SUCCESS': {
      const starred = [...state.starred];
      const allOthers = [...state.allOthers];
      const newStar = allOthers[payload]
      newStar.starred = 1; 
      starred.push(newStar);
      starred.sort((a, b) => a.id - b.id)
      return { starred, allOthers };
    }
    case 'FOLLOW_UNSTARRED_SUCCESS': {
      const starred = [...state.starred];
      const allOthers = [...state.allOthers];
      unstar(matchId, starred, allOthers);
      return { starred, allOthers }
    }
    default:
      return state;
  }
};