import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    value: "",
    current_ops: "",
    last_ops: "",
  },
  reducers: {
    setVal: (state, action) => {
      state.value += action.payload;
    },
    clearValue: (state) => {
      state.value = "";
    },
    setResult: (state, action) => {
      state.value = action.payload;
    },
    setOps: (state, action) => {
      state.current_ops = action.payload;
    },
    setLastOps: (state, action) => {
      state.last_ops = action.payload;
    },
  },
});

export const { setVal, clearValue, setResult, setOps, setLastOps } =
  calcSlice.actions;
export const getValores = (state) => state.calc.value;
export const lastOps = (state) => state.calc.last_ops;
export const currentOps = (state) => state.calc.current_ops;
export default calcSlice.reducer;
