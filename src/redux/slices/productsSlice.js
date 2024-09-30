import {fetchApi} from "../api/baseApi.js";

export const productsSlice = fetchApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getAllCategories: builder.query({
      query: () => '/products/categories'
    }),
    getSpecificCategory: builder.query({
      query: (nameCategory) => `/products/category/${nameCategory}`,
    })
  })
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetAllCategoriesQuery,
  useGetSpecificCategoryQuery
} = productsSlice;



