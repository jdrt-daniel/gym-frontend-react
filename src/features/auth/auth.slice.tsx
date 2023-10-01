import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Auth {
  token: string;
  isLogin: boolean;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isLogin: false,
  },
  reducers: {
    logIn: (state: Auth, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.token = action.payload;
      state.isLogin = true;
      localStorage.setItem("token", action.payload);
    },
    logOut: (state: Auth) => {
      state.token = "";
      state.isLogin = false;
      localStorage.removeItem("token");
    },
  },
});
export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
