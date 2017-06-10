import { GET_LOCAL_ARTICLE } from '../actions/constants';

const localArticleReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LOCAL_ARTICLE: {
      return action.payload
    }
    default: return state
  }
}

export default localArticleReducer