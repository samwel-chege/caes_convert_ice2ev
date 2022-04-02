import { useEffect } from "react";

import BatteryPercentage from "./components/BatteryPercentage";
import DistanceAvailable from "./components/DistanceAvailable";
import DistanceCovered from "./components/DistanceCovered";
import SideBar from "./components/SideBar";
import EnergyDetails from "./components/EnergyDetails";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { decrement } from "../features/distance/distanceSlice";

export default function Home() {
  const dispatch = useAppDispatch()
  const showEnergy = useAppSelector((state) => state.distance.showEnergy);
  const charge = useAppSelector(state => state.distance.charge)

  // useEffect(() => {
  //   setInterval(() => {
  //     dispatch(decrement())
  //   }, 4000)
  // }, [])
  return (
    <>
      <div className="flex gap-2">
        <SideBar />
        {showEnergy ? (
          <EnergyDetails />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BatteryPercentage />
            <DistanceAvailable />
            <DistanceCovered />
          </div>
        )}
      </div>
    </>
  );
}
