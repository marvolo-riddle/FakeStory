import { createSlice } from "@reduxjs/toolkit";

const cartData = () => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : [];
};

const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: cartData(),
    isCartOpen: false,
    totalPrice: calculateTotalPrice(cartData())
  },

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.findIndex(i => i.id === product.id)
      if (existingProduct !== -1) {
        state.products[existingProduct].quantity += 1
      } else {
        state.products.push({...product, quantity: 1})
      }
      state.totalPrice = calculateTotalPrice(state.products)
      localStorage.setItem('cart', JSON.stringify(state.products));
    },

    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.products.findIndex(i => i.id === product.id)
      if (state.products[existingProductIndex].quantity > 1) {
        state.products[existingProductIndex].quantity -= 1;
      } else {
        state.products.splice(existingProductIndex, 1);
      }
      state.totalPrice = calculateTotalPrice(state.products)
      localStorage.setItem('cart', JSON.stringify(state.products));
    },

    deleteFromCart: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.products.findIndex(i => i.id === product.id)
      if (existingProductIndex !== -1) {
        state.products.splice(existingProductIndex, 1);
      } else {
        throw new Error('Product not found');
      }
      state.totalPrice = calculateTotalPrice(state.products)
      localStorage.setItem('cart', JSON.stringify(state.products));
    },

    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    closeCart: (state) => {
      state.isCartOpen = false;
    }
  }
})

export const {addToCart, removeFromCart, deleteFromCart, closeCart, toggleCart} = cartSlice.actions;
export default cartSlice.reducer;