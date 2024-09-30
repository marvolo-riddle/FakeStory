import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://fakestoreapi.com',

  prepareHeaders: (headers) => {
    const token = Cookies.get('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },

});

export const fetchApi = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});

