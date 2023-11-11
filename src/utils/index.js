import {
  setOps,
  setResult,
  clearValue,
  getValores,
  setVal,
  setLastOps,
} from "../actions/calc/calcSlice";
import { useSelector } from "react-redux";

export const resultValue = (valores) => (dispatch) => {
  let binArr = valores.split("");
  let decArr = [];

  for (let i = 0; i < binArr.length; i++) {
    let dec = 2 ** i;
    decArr.push(dec);
  }

  let decVal = 0;

  decArr.reverse().forEach((element, index) => {
    decVal += binArr[index] === "0" ? 0 : element;
  });

  dispatch(setResult(decVal.toString()));
  dispatch(setOps("result"));
  dispatch(setLastOps(binArr));
};

export const handleActions = (val) => (dispatch, getState) => {
  switch (val) {
    case "AC":
      dispatch(clearValue());
      break;
    case "=":
      dispatch(resultValue(getState().calc.value));
      break;
    default:
      if (getState().calc.current_ops === "result") {
        dispatch(clearValue(""));
        dispatch(setOps(""));
        dispatch(setVal(val));
      } else {
        dispatch(setVal(val));
      }
  }
};
