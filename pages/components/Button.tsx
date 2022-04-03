import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, stop } from "../../features/distance/distanceSlice";

const Button = () => {
  const dispatch = useAppDispatch();
  const stopShow = useAppSelector((state) => state.distance.stopShow);
  const handleClick = () => {
    setInterval(() => {
      dispatch(decrement());
    }, 4000);
  };
  return (
    <button
      onClick={handleClick}
      className="w-48 h-12 rounded-lg mt-4 bg-green-500"
    >
      Start
    </button>
  );
};

export default Button;
