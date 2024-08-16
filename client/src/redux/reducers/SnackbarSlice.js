import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  severity: "success",
};

const snackbar = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.open = true;
      state.severity = action.payload.severity;
    },
    closeSnackbar: (state) => {
      state.open = true;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbar.actions;

export default snackbar.reducer;
