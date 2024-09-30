import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const authApi = createApi({

  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: '/auth/login',
        method: 'POST',
        body: loginData,
      }),

      onQueryStarted: async (arg, {queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          const {token} = data;
          Cookies.set("token", token);

        } catch (error) {
          console.log(error)
        }
      }
    })
  })
});

export const {useLoginUserMutation} = authApi;