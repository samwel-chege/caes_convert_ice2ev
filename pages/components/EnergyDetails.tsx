import React from 'react'
import { useAppSelector } from '../../app/hooks';

const EnergyDetails = () => {
  const charge = useAppSelector(state => state.distance.charge)
  return (
    <div>
      <div className="p-6 shadow-lg rounded my-2">
        <h2 className="font-semibold">Energy Details</h2>
        <div className="mt-4 flex gap-4">
          <div className="h-6 w-6 rounded-full bg-green-400"></div>
          <div className="text">Battery Capacity</div>
          <div className="text-green-500 font-semibold">25 KWh</div>
        </div>
        <div className="mt-4 flex gap-4">
          <div className="h-6 w-6 rounded-full bg-green-400"></div>
          <div className="text">Current Energy</div>
          <div className="text-yellow-500 font-semibold">{charge} KWh</div>
        </div>
        <div className="mt-4 flex gap-4">
          <div className="h-6 w-6 rounded-full bg-green-400"></div>
          <div className="text-lg">Time Remaining</div>
          <div className="text-blue-500 font-semibold">30 mins</div>
        </div>
      </div>
    </div>
  );
}

export default EnergyDetails