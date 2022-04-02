import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setEnergy } from "../../features/distance/distanceSlice";

const BatteryPercentage = () => {
  const dispatch = useAppDispatch();
  const charge = useAppSelector((state) => state.distance.charge);
  const showEnergy = useAppSelector((state) => state.distance.showEnergy);

  const handleClick = () => {
    dispatch(setEnergy());
    console.log(showEnergy);
  };

  const below80 = (
    <>
      <div className="ml-4 w-3/5 rounded-lg h-4 bg-green-300"></div>
      <span className="material-icons">sentiment_satisfied</span>
    </>
  );

  const below50 = (
    <>
      <div className="ml-4 w-1/2 rounded-lg h-4 bg-yellow-700"></div>
      <span className="material-icons">mood_bad</span>
    </>
  );

  const below20 = (
    <>
      <div className="ml-4 w-1/4 rounded-lg h-4 bg-red-700"></div>
      <span className="material-icons">sentiment_very_dissatisfied</span>
    </>
  );

  const good = (
    <>
      <div className="ml-4 w-4/5 rounded-lg h-4 bg-green-700"></div>
      <span className="material-icons">sentiment_very_satisfied</span>
    </>
  );


  const checkPercentage = () => {
    if (charge < 80 && charge > 50) {
      below80
    } else if (charge < 50 && charge > 20) {
      below50
    } else if (charge < 20 && charge > 0) {
      below20
    } else {
      good
    }
  }

  return (
    <>
      <div className="m-4 p-4 rounded-lg shadow-lg border border-gray-200">
        <div className="py-2 px-4 rounded-lg ">
          <div className="pt-2 flex justify-between">
            <p className="font-bold text-xl">Battery Percentage %</p>
            <span className="material-icons">battery_charging_full</span>
          </div>
          <div className="pt-4">
            <p className="pt-2 text-2xl">{charge}</p>
          </div>
        </div>
        <div className="flex gap-4">
          {() => checkPercentage()}
         
        </div>
        <button
          onClick={handleClick}
          className="ml-4 mt-2 bg-green-600 hover:bg-green-400 h-8 w-20 rounded"
        >
          More
        </button>
      </div>
    </>
  );
};

export default BatteryPercentage;
