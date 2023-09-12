import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "requests",
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
    setRequestState: (state: any, action) => {
      state.data[action.payload.id] = action.payload;

      return state;
    },
  },
});

export const { setRequestState } = slice.actions;

export default slice.reducer;
