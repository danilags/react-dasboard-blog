import { SIGNUP_USER, LOGIN_USER} from '../actions/constants';

const initialState = {
  token: '',
  userdata: ''
}

function signUp(payload) {
  console.log(payload + " tetstttt");
  if (payload.error === null || payload.error) {
    return initialState
  } else {
    console.log("testttt");
    localStorage.setItem('token', payload.token)
    return {...payload}
  }
}

function loginSuccess() {
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
    case LOGIN_USER: return loginSuccess(action.payload)
    default: return state;
  }
}

export default userReducer;