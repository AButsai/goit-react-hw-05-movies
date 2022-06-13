import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_THEMOVIEDB_KEY = '185a0ab5d7b155f2662fdcb8709753e2';

export const getMovies = axios.create({
  url: '',
  baseURL: BASE_URL,

  params: {
    api_key: API_THEMOVIEDB_KEY,
    language: 'en-US',
    include_adult: false,
  },
});
