import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../actions/calc/calcSlice";

export default configureStore({
  reducer: {
    calc: calcReducer,
  },
});
