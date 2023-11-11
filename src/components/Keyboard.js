import {
  setVal,
  clearValue,
  getValores,
  currentOps,
  setOps,
} from "../actions/calc/calcSlice";
import { useDispatch, useSelector } from "react-redux";
import { resultValuex, handleActions } from "../utils";

const Keyboard = () => {
  const dispatch = useDispatch();
  const valores = useSelector(getValores);
  const current = useSelector(currentOps);
  const buttons = ["0", "1", "AC", "="];

  const buttonAction = (val) => {
    dispatch(handleActions(val));
  };

  return (
    <>
      <div className="flex  flex-wrap p-2 gap-3 justify-center">
        {buttons.map((r) => {
          const buttonStyle =
            r === "AC" || r === "="
              ? "bg-purple-500 hover:bg-purple-400 text-white"
              : "hover:bg-gray-200 text-black";
          return (
            <div
              key={r}
              className={`rounded-3xl w-[45%] h-[100px] text-center shadow-xl ${buttonStyle}`}
            >
              {/* <button
                className={`h-[100%] w-[100%] text-3x ${
                  r === "AC" ? "bg-red-100" : "bg-green-100"
                }`}
              >
                {r}
              </button> */}
              <button
                className={`h-[100%] w-[100%] text-3xl`}
                onClick={() => buttonAction(r)}
              >
                {r}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Keyboard;
