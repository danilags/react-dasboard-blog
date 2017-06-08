import axios from 'axios';

import { SIGNUP_USER } from  './constants';

export const signUpSuccess = (data) => ({
  type: SIGNUP_USER,
  payload: data
})

export const signUp = (dataUser) => (
  // console.log("dari action -------- : " , dataUser);
  dispatch => (
    axios.post('http://localhost:3000/users', dataUser)
    .then((res) => {
        console.log("ini dispatch ----- : ", res.data);
        return dispatch(signUpSuccess(res.data))
      }
    )
  )
)