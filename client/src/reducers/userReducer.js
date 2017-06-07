import { SIGNUP_USER } from '../actions/constants';

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

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER: return signUp(action.payload)
    default: return state;
  }
}

export default userReducer;