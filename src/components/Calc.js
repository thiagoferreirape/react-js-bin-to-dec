import Display from "./Display";
import Keyboard from "./Keyboard";

import { useSelector } from "react-redux";
export const Calc = () => {
  return (
    <>
      <div className="box-content w-[400px] h-[400px] rounded-3xl bg-gradient-to-r from-gray-200 to-white shadow-2xl">
        <Display />

        <Keyboard />
      </div>
    </>
  );
};

export default Calc;
