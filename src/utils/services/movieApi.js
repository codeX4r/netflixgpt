import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TMDB_MOVIE_API } from "../constant.js"
const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const movieApi = createApi({
    reducerPath: 'api',
    keepUnusedDataFor: 60,
    baseQuery: fetchBaseQuery({
        baseUrl: TMDB_MOVIE_API,
        prepareHeaders: (headers) => {
            headers.set("accept", "application/json");
            headers.set("Authorization", `Bearer ${API_TOKEN}`)
        }
    }),
    tagTypes: ['movies'],
    endpoints: (builder) => ({
        nowPlaying: builder.query({
            query: () => 'now_playing',
            providesTags: ['movies'],
            transformResponse: (response) => response?.results
        }),
        popular: builder.query({
            query: () => "popular",
            providesTags: ['movies'],
            transformResponse: (response) => response?.results
        }),
        topRated: builder.query({
            query: () => "top_rated",
            providesTags: ['movies'],
            transformResponse: (response) => response?.results
        }),
        upcoming: builder.query({
            query: () => "upcoming",
            providesTags: ['movies'],
            transformResponse: (response) => response?.results
        }),

    })
})
export const { useNowPlayingQuery, usePopularQuery, useUpcomingQuery, useTopRatedQuery } = movieApi;