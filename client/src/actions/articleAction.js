import axios from 'axios';

import { GET_ARTICLE, GET_LOCAL_ARTICLE } from './constants';

export const fetchArticle = () => dispatch => {
  let url = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=38ad236884974c379b8fda98079c28bc'

  axios.get(url)
      .then(res => {
          console.log("ini adalah data "+ res.data.articles);
          dispatch(getArticle(res.data.articles))
        })
      .catch(err => { console.log(err)})
}

export const getArticle = article => ({
  type: GET_ARTICLE,
  payload: article
})

export const localArticle = () => dispatch => {
  let url = 'http://localhost:3000/articles'

  axios.get(url)
        .then(res => {
          dispatch(getLocalArticle(res.data))
        })
        .catch(err => { console.log(err)})
}

export const getLocalArticle = article => ({
  type: GET_LOCAL_ARTICLE,
  payload: article
})