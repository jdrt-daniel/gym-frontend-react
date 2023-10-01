import { createSlice } from "@reduxjs/toolkit";

export const templateSlice = createSlice({
  name: "template",
  initialState: {
    collapsed: false,
    isLogin: false,
  },
  reducers: {
    onCollapse: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});
export const { onCollapse } = templateSlice.actions;

export default templateSlice.reducer;
