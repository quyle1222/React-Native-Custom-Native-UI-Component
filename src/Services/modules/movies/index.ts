import { api } from '@/Services/api'
import fetchListMovies from './fetchListMovies'
export const moviesApi = api.injectEndpoints({
  endpoints: build => ({
    fetchListMovies: fetchListMovies(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchListMoviesQuery } = moviesApi
