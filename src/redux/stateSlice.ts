import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "states",
  initialState: {
    data: {
      default: {
        data: null,
      },
    },
  },
  reducers: {
    setState: (state: any, action) => {
      state.data[action.payload.id] = action.payload;

      return state;
    },
  },
});

export const { setState } = slice.actions;

export default slice.reducer;
