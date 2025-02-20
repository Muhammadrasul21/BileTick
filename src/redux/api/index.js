import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = async (args, api, extraOptions) => {
  const { dispatch } = api;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDgxMWI5ZDI5YjU0YWQ1NjZkZmQwYmMyZWZkNGE2NyIsIm5iZiI6MTczOTk4NDk1Ni4zMDksInN1YiI6IjY3YjYxMDNjOTAyZjVlMjBhNjg4ZGNjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEgSyBAOrJkQQi8joJ1tdXJ0MzwyZ0oTFNnQKDDdUW8";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      dispatch(logout());
    }
  }
  return result;
};

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["BLOG", "PRODUCT"],
});
