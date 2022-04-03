import { useEffect } from "react";

import BatteryPercentage from "./components/BatteryPercentage";
import DistanceAvailable from "./components/DistanceAvailable";
import DistanceCovered from "./components/DistanceCovered";
import SideBar from "./components/SideBar";
import EnergyDetails from "./energydetails";
import Button from "./components/Button";
import EndButton from "./components/EndButton";
import ResetButton from "./components/ResetButton"
import { useAppSelector, useAppDispatch } from "../app/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const showEnergy = useAppSelector((state) => state.distance.showEnergy);
  const charge = useAppSelector((state) => state.distance.charge);

  // useEffect(() => {
  //   setInterval(() => {
  //     dispatch(decrement())
  //   }, 4000)
  // }, [])
  return (
    <>
      <div className="flex gap-2">
        <SideBar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BatteryPercentage />
          <DistanceAvailable />
          <DistanceCovered />
          <Button />
          <EndButton />
          <ResetButton />
        </div>
      </div>
    </>
  );
}
