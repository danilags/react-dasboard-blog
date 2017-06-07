import { SIGNUP_USER } from '../actions/constants';

const initialState = {
  token: '',
  userdata: ''
}

function signUp(payload) {
  if (payload.error === null || payload.error) {
    return initialState
  } else {
    localStorage.setItem('token', payload.token)
    return {...payload}
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER: return signUp(action.payload)
    default: return state;
  }
}

export default userReducer;