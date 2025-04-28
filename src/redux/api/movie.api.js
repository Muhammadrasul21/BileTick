import { mainApi } from "./index";
const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query({
      query: (params) => ({
        url: "/discover/movie",
        method: "GET",
        params,
      }),
    }),
    getSingleMovie: build.query({
      query: (id) => ({
        url: `/movie/${id}`,
        method: "GET",
      }),
    }),
    getSingleItems: build.query({
      query: ({ id, path }) => ({
        url: `/movie/${id}/${path}`,
        method: "GET",
      }),
    }),
    getGenres: build.query({
      query: () => ({
        url: `/genre/movie/list`,
        method: "GET",
      }),
    }),
    getSearch: build.query({
      query: (params) => ({
        url: `/search/movie`,
        method: "GET",
        params,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMoviesQuery,
  useGetSingleMovieQuery,
  useGetSingleItemsQuery,
  useGetGenresQuery,
  useGetSearchQuery,
} = extendedApi;
