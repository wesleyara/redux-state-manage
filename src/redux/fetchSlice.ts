import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "fetch",
  initialState: {
    data: {
      default: {
        data: null,
        error: null,
        isLoading: true,
      },
    },
  },
  reducers: {
    setFetchState: (state: any, action) => {
      state.data[action.payload.id] = action.payload;

      return state;
    },
  },
});

export const { setFetchState } = slice.actions;

export default slice.reducer;
