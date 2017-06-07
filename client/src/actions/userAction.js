import axios from 'axios';

import { SIGNUP_USER } from  './constants';

export const signUpSuccess = (data) => ({
  type: SIGNUP_USER,
  payload: data
})

export const signUp = (dataUser) => {
  dispatch => (
    axios.post('http://localhost:3000/users', dataUser)
    .then((res) => (dispatch(signUpSuccess(res.data)))
    )
  )
}