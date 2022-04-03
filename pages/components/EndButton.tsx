import React from 'react'
import { useAppDispatch } from "../../app/hooks"
import { increment, stop } from "../../features/distance/distanceSlice";


const EndButton = () => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    setInterval(() => {
      dispatch(stop())
    }, 4000)
  }
  return (
    <button onClick={handleClick} className="w-48 h-12 rounded-lg mt-4 bg-red-500">End</button>
  );
}

export default EndButton