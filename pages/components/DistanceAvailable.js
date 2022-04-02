import React from 'react'

const DistanceAvailable = () => {
    return (
        <>
            <div class="m-4 p-4 rounded-lg shadow-md">
                <div class="flex py-2 px-4 bg-white rounded-lg justify-between">
                    <div class="">
                        <p class="pt-12 font-bold text-xl">Distance Available(Km)</p>
                        <p class="pt-2 text-lg">100</p>
                    </div>
                    <div class="pt-12">
                        <span class="material-icons">
                            pedal_bike
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DistanceAvailable