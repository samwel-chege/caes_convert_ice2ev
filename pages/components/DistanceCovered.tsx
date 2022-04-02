import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const DistanceCovered = () => {
  const total_distance = useAppSelector(
    (state) => state.distance.total_distance
  );

  return (
    <>
      <div className="m-4 p-4 rounded-lg shadow-lg border-gray-200 border">
        <div className=" py-2 px-4 rounded-lg ">
          <div className="flex justify-between">
            <p className="font-bold text-xl">Total Distance Covered(Km)</p>
            <span className="material-icons">alt_route</span>
          </div>
          <div className="pt-4">
            <p className="pt-2 text-2xl">{total_distance} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DistanceCovered;
