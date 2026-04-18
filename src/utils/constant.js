export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            
    },
};

export const TMDB_MOVIE_API =
    "https://api.themoviedb.org/3/movie/";

export const MOVIE_POSTER_URL = 'https://image.tmdb.org/t/p/w185/'

