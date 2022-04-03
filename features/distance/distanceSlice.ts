import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface distanceInterface {
    distance: number,
    charge: number,
    total_distance: number,
    showEnergy: boolean,
}


const initialState: distanceInterface = {
    distance: 200,
    charge: 100,
    total_distance: 0,
    showEnergy: false
};


export const distanceSlice = createSlice({
  name: "distance",
  initialState,
    reducers: {
        decrement: (state) => {
            state.charge -= 2
            state.distance -= 4
            state.total_distance += 4
        },
        increment: (state) => {
            state.charge += 2
            state.distance += 4
            state.total_distance -= 4
        },
        setEnergy: (state) => {
            state.showEnergy = true
        }
  },
});

export const { decrement, increment, setEnergy } = distanceSlice.actions

export default distanceSlice.reducer;