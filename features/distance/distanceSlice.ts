import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface distanceInterface {
    distance: number,
    charge: number,
    total_distance: number,
    showEnergy: boolean,
    stopShow: boolean
}


const initialState: distanceInterface = {
    distance: 200,
    charge: 100,
    total_distance: 0,
    showEnergy: false,
    stopShow: false

};


export const distanceSlice = createSlice({
  name: "distance",
  initialState,
    reducers: {
        decrement: (state) => {
            if(state.charge > 0 && state.distance > 0 && state.total_distance <= 200){
            state.charge -= 2
            state.distance -= 4
            state.total_distance += 4
            }
            
        },
        increment: (state) => {
            if(state.charge <= 100 && state.distance <= 200 && state.total_distance >= 0){
            state.charge += 2
            state.distance += 4
            state.total_distance -= 4
            }
            
        },
        setEnergy: (state) => {
            state.showEnergy = true
        },
        reset: (state) => {
            state.charge = 100
            state.distance = 200
            state.total_distance = 200
        },
        stop: (state) => {
            state.charge = state.charge
            state.distance = state.distance
            state.stopShow = true
        }
  },
});

export const { decrement, increment, setEnergy, reset, stop } = distanceSlice.actions

export default distanceSlice.reducer;