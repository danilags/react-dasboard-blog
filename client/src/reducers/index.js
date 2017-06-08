import { combineReducers } from 'redux';

import userReducer from './userReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  logindata: userReducer,
  article: articleReducer,
});

export default rootReducer;