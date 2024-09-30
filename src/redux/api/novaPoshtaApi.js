// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// import {setCities, setLoading, setError} from '../slices/citiesSlice.js';
// import {setWarehouses} from '../slices/warehousesSlice.js';
//
// const API_KEY = 'd51a6c98ac40de2e0f3e7f92ba9e2320';
//
// export const novaPoshtaApi = createApi({
//   reducerPath: 'novaPoshtaApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.novaposhta.ua/v2.0/json/',
//   }),
//
//   endpoints: (builder) => ({
//     getCity: builder.query({
//       query: (cityName) => ({
//         url: '',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: {
//           apiKey: API_KEY,
//           modelName: 'Address',
//           calledMethod: 'getCities',
//           methodProperties: {
//             FindByString: cityName,
//           },
//         },
//       }),
//
//       async onQueryStarted(arg, {dispatch, queryFulfilled}) {
//         dispatch(setLoading(true));
//
//         try {
//           const {data} = await queryFulfilled;
//           if (data.data.length > 0) {
//             dispatch(setCities(data.data[0]));
//           } else {
//             dispatch(setCities(null));
//           }
//         } catch (error) {
//           console.error(error);
//           dispatch(setError(error.message));
//         } finally {
//           dispatch(setLoading(false));
//         }
//       },
//     }),
//
//     getWarehouses: builder.query({
//       query: (cityId) => ({
//         url: '',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: {
//           apiKey: API_KEY,
//           modelName: 'Address',
//           calledMethod: 'getWarehouses',
//           methodProperties: {
//             CityID: cityId,
//           },
//         },
//       }),
//
//       async onQueryStarted(cityId, {dispatch, queryFulfilled}) {
//         dispatch(setLoading(true));
//
//         try {
//           const {data} = await queryFulfilled;
//           dispatch(setWarehouses({cityId, data: data.data}));
//         } catch (error) {
//           console.error(error);
//           dispatch(setError(error.message));
//         } finally {
//           dispatch(setLoading(false));
//         }
//       },
//     }),
//   }),
// });
//
//
// export const {useGetCityQuery, useGetWarehousesQuery} = novaPoshtaApi;
