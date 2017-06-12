import { GET_LOCAL_ARTICLE, FETCH_USER_ARTICLES } from '../actions/constants';

function articleUserOne(payload) {
  return payload
}

const localArticleReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LOCAL_ARTICLE: {
      return action.payload
    }
    case FETCH_USER_ARTICLES: return articleUserOne(action.payload)
    default: return state
  }
}

export default localArticleReducer