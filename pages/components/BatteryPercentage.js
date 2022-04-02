import React from 'react'

const BatteryPercentage = () => {
    return (
        <>
            <div class="m-4 pl-1 rounded-lg shadow-md">
                <div class="flex py-2 px-4 bg-white rounded-lg justify-between">
                    <div class="">
                        <p class="pt-12 font-bold text-xl">Battery Percentage</p>
                        <p class="pt-2 text-lg">100%</p>
                    </div>
                    <div class="pt-12">
                        <span class="material-icons">
                            battery_charging_full
                        </span>
                    </div>
                </div>
                <div className='mx-auto p-2 w-4/5 rounded-lg h-6 bg-green-600'></div>
            </div>
        </>

    )
}

export default BatteryPercentage