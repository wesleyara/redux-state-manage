import { configureStore } from "@reduxjs/toolkit";

import requestsSlice from "./requestsSlice";
import statesSlice from "./statesSlice";

export default configureStore({
  reducer: {
    requests: requestsSlice,
    states: statesSlice,
  },
});
