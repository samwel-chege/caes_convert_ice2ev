import React, {useState} from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';


const DistanceAvailable = () => {
  const distance = useAppSelector(state => state.distance.distance)
    return (
      <>
        <div className="m-4 p-4 rounded-lg shadow-lg border border-gray-200">
          <div className="py-2 px-4 rounded-lg ">
            <div className="pt-2 flex justify-between">
              <p className="font-bold text-xl">Distance(Km)</p>
              <span className="material-icons">pedal_bike</span>
            </div>
            <div className="pt-4"></div>
            <p className="pt-2 text-2xl">{distance}</p>
          </div>
          <div className="ml-4 w-4/5 rounded-lg h-4 bg-green-700"></div>
        </div>
      </>
    );
}

export default DistanceAvailable