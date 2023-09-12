import { configureStore } from "@reduxjs/toolkit";

import fetchSlice from "./fetchSlice";
import stateSlice from "./stateSlice";

export default configureStore({
  reducer: {
    fetch: fetchSlice,
    state: stateSlice,
  },
});
