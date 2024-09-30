import { configureStore } from "@reduxjs/toolkit";
import { fetchApi } from "./api/baseApi.js";
import {authApi} from "./api/authApi.js";
// import {novaPoshtaApi} from "./api/novaPoshtaApi.js";
import favoritesReducer from "./slices/favoritesSlice.js";
import cartReducer from "./slices/cartSlice.js";
import authReducer from "./slices/authSlice.js";
import dialogReducer from "./slices/dialogSlice.js";
// import citiesReducer from "./slices/citiesSlice.js";
// import warehousesReducer from "./slices/warehousesSlice.js";


export const store = configureStore({
  reducer: {
    [fetchApi.reducerPath]: fetchApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    // [novaPoshtaApi.reducerPath]: fetchApi.reducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    auth: authReducer,
    dialog: dialogReducer,
    // cities: citiesReducer,
    // warehouses: warehousesReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(fetchApi.middleware, authApi.middleware),
});