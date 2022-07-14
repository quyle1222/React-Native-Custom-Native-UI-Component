import { Constant } from '@/Utils/Constant'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<Response, number>({
    query: page =>
      `/trending/movie/day?api_key=${Constant.KEY}&language=vi&page=${page}`,
  })

export type Response = {
  page: string
  results: Array<Movie>
  total_pages: string
  total_results: string
}
export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: Array<string>
  id: number
  media_type: string
  title: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}
