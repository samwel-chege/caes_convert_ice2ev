import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setEnergy } from "../../features/distance/distanceSlice";
import { useRouter } from "next/router";

const BatteryPercentage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const charge = useAppSelector((state) => state.distance.charge);
  const showEnergy = useAppSelector((state) => state.distance.showEnergy);

  const handleClick = () => {
    dispatch(setEnergy());
    router.push("/energydetails")
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


  const good = (
    <>
      <div className="ml-4 w-4/5 rounded-lg h-4 bg-green-700"></div>
      <span className="material-icons">sentiment_very_satisfied</span>
    </>
  );


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
         {charge < 60 ? below50 : good}
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
