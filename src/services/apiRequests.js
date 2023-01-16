import axios from "axios"

export const getTrendingMovies = async () => {
    const {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
        params: {
            api_key: '9cda16d98a6e510af2decf0d66e8e7d5'
        }
    })
    return data
}

export const getMoviesByQuery = async (query) => {
    const {data} = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: '9cda16d98a6e510af2decf0d66e8e7d5',
            language: 'en-US',
            page: 1,
            include_adult: false,
            query
        }
    })
    return data
}

export const getMovieById = async (movieId) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
            api_key: '9cda16d98a6e510af2decf0d66e8e7d5',
            language: 'en-US',
        }
    })
    return data
}

export const getCastById = async(movieId) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
            api_key: '9cda16d98a6e510af2decf0d66e8e7d5',
            language: 'en-US',
        }
    })
    return data
}

export const getReviewsById = async(movieId) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
        params: {
            api_key: '9cda16d98a6e510af2decf0d66e8e7d5',
            language: 'en-US',
            page: 1
        }
    })
    return data
}