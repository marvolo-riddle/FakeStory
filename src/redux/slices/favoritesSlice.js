import {createSlice} from "@reduxjs/toolkit";

const favoritesData = () => {
  const data = localStorage.getItem('favorites');
  return data ? JSON.parse(data) : [];
};

const favoritesSlice = createSlice({

  name: "favorites",
  initialState: {
    products: favoritesData()
  },

  reducers: {
    addFavorites: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(i => i.id === product.id)
      if (!existingProduct) {
        state.products.push(product);
        localStorage.setItem('favorites', JSON.stringify(state.products));
      }
    },

    removeFavorites: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.findIndex(i => i.id === product.id)
      if (existingProduct !== -1) {
        state.products.splice(existingProduct, 1);
        localStorage.setItem('favorites', JSON.stringify(state.products));
      }
    }
  }
})


export const {addFavorites, removeFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;