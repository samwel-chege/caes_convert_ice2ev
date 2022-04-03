import React from 'react'
import { useAppDispatch } from "../../app/hooks"
import { reset } from "../../features/distance/distanceSlice";


const ResetButton = () => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(reset())
    }
  return (
     <button onClick={handleClick} className="w-48 h-12 rounded-lg mt-4 bg-blue-500">Reset</button>
  )
}

export default ResetButton