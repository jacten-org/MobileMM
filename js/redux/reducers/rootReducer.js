import { combineReducers } from 'redux';

import accountData from './accountDataReducer';
import bioData from './bioDataReducer';
import currentMatch from './currentMatchReducer';
import follows from './followsReducer';
import leaderboard from './leaderboardReducer';
import matches from './matchesReducer';
import userPhotos from './photosReducer';
import powerRanking from './powerRankingReducer';
import ratings from './ratingsReducer';
import signupStatus from './signupStatusReducer';
import tags from './tagsReducer';
import savedStatus from './savedStatusReducer';
import comments from './commentsReducer';
import initializeState from './initializeStateReducer';
import passwordLength from './passwordUpdateReducer';

const rootReducer = combineReducers({
  passwordLength,
  accountData,
  bioData,
  currentMatch,
  follows,
  leaderboard,
  matches,
  userPhotos,
  powerRanking,
  signupStatus,
  ratings,
  tags,
  comments,
  savedStatus,
  initializeState,
});

export default rootReducer;
