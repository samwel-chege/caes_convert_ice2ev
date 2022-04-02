import Head from 'next/head'
import Image from 'next/image'
import BatteryPercentage from './components/BatteryPercentage'
import DistanceAvailable from './components/DistanceAvailable'
import DistanceCovered from './components/DistanceCovered'


export default function Home() {
  return (
    <>
    <div className='container mx-auto my-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <BatteryPercentage />
        <DistanceAvailable />
        <DistanceCovered />

      </div>

    </div>
    </>
    

  )
}
