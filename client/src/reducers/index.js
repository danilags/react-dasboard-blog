import { combineReducers } from 'redux';

import userReducer from './userReducer';
import articleReducer from './articleReducer';
import localArticleReducer from './localArticleReducer';

const rootReducer = combineReducers({
  logindata: userReducer,
  article: articleReducer,
  localArticleState: localArticleReducer,
});

export default rootReducer;