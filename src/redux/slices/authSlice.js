import {createSlice} from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: Cookies.get("token") || null,
  isAuthenticated: !!Cookies.get('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      Cookies.remove("token");
      state.isAuthenticated = false;
      state.token = null;
    }
  }

})

export const {logOut} = authSlice.actions;
export default authSlice.reducer;