import { GET_ARTICLE, GET_LOCAL_ARTICLE, CREATE_ARTICLE } from '../actions/constants';
const initialState = {
  id: '',
  username: '',
  email: ''
}

function createArticle(payload) {
  console.log("tetstsiuhuohoh ==-=-==== ", payload);
  if (payload.error === null || payload.error) {
    return initialState
  } else {
    return {...payload}
  }
}

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ARTICLE: {
      return action.payload
    }
    case CREATE_ARTICLE: return createArticle(action.payload)
    default: return state
  }
}

export default articleReducer