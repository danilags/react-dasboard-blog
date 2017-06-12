import { GET_LOCAL_ARTICLE, FETCH_USER_ARTICLES } from '../actions/constants';


const ArticleUsers = (state, payload) => {
  if (payload.error === null || payload.errror) {
    return {...state}
  } else {
    return {...payload}
  }
}

const localArticleReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LOCAL_ARTICLE: {
      return action.payload
    }
    case FETCH_USER_ARTICLES: return ArticleUsers(state, action.payload)
    default: return state
  }
}

export default localArticleReducer