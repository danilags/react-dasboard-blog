import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER} from '../actions/constants';

const initialState = {
  token: '',
  userdata: '',
  shouldRedirectSignIn: false,
}

function signUp(payload) {
  console.log(payload + " tetstttt");
  if (payload.error === null || payload.error) {
    return initialState
  } else {
    localStorage.setItem('token', payload.token)
    return {...payload}
  }
}

function loginSuccess(payload) {
  if (payload.error === null || payload.error) {
    return {...initialState}
  } else {
    let encodeUsername = new Buffer(payload.userdata.username).toString('base64')

    localStorage.setItem('username', encodeUsername)
    localStorage.setItem('token', payload.token)
    return {...payload, shouldRedirectSignIn: true}
  }
}

function logoutUser() {
  localStorage.removeItem('token', function() {
    console.log("hapus");
  })
  localStorage.removeItem('username')
  return initialState
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER: return signUp(action.payload)
    case LOGIN_USER: return loginSuccess(action.payload)
    case LOGOUT_USER: return logoutUser()
    default: return state;
  }
}

export default userReducer;