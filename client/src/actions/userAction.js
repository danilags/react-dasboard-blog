import axios from 'axios';

import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER, FETCH_USER_ARTICLES } from  './constants';

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

export const loginSuccess = (data) => ({
  type: LOGIN_USER,
  payload: data
})

export const loginUser = (dataUser) => (
  dispatch => (
    axios.post('http://localhost:3000/users/login', dataUser)
    .then((res) => {
      alert("Your Success Login!")
      return dispatch(loginSuccess(res.data))
    })
  )
)

export const logoutUser = () => ({
  type: LOGOUT_USER
})


export const fetchArticleSucces = (articles) => ({
  type: FETCH_USER_ARTICLES,
  payload: articles
})

export const fetchUserArticle = (idUser) => (
  dispatch => (
    axios.get('http://localhost:3000/users/'+idUser)
    .then((res) => {
      // console.log(res.data);
      return dispatch(fetchArticleSucces(res.data))
    })
  )
)
