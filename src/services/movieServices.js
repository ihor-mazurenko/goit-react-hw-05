import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    }
}

export const fetchTrending = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
};

export const fetchMovies = async query => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        ...options,
        params: {
            query,
            include_adults: false,
            language: 'en-US',
            page: 1,
        }
    })
    return response.data.results;
}