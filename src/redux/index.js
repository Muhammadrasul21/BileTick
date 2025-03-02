import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth.slice";
import savedReducer from "./features/savedSlice";
import { mainApi } from "./api";

export const store = configureStore({
  reducer: {
    auth,
    saved: savedReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});
export default store;