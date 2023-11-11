import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getValores, lastOps } from "../actions/calc/calcSlice";
export const Display = ({ action }) => {
  const calcNumber = useSelector(getValores);
  const lastValue = useSelector(lastOps);
  const [value, setValue] = useState(0);
  const changeValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(action);
  }, [action]);
  return (
    <div className="h-[126px] flex justify-end items-end border-b-2 border-white p-2 bg-black flex-col">
      <span className="text-white text-sm">{lastValue}</span>
      <div
        type="number"
        className="text-white bg-black text-end w-[100%] mr-2 text-3xl"
      >
        <p className="break-all">{calcNumber}</p>
      </div>
    </div>
  );
};

export default Display;
