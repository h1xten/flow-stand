import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  power: false,
  duration: 0,
  N: 0,
  water: false,
  stopwatch: 0,
  stopwatchSettings: {
    stopwatchResult: null,
    stopwatchStartFrom: null,
    stopwatchEnd: null,
  }
}

export const standSlice = createSlice({
  name: 'standSlice',
  initialState,
  reducers: {
    setN: (state, action) => {
      state.N = action.payload
      const dur = state.N === 0 ? 5 : state.N === 20 ? 337 : state.N === 40 ? 10 : state.N === 60 ? 2 : state.N === 80 ? 50 : 5
      state.duration = dur
    },
    setWater: (state, action) => {
      state.water = action.payload
    },
    setDuration: (state, action) => {
      state.duration = action.payload
    },
    setStopwatch: (state, action) => {
      state.stopwatch = action.payload
    },
    setStopwatchStartFrom: (state, action) => {
      state.stopwatchSettings.stopwatchStartFrom = action.payload
    },
    setStopwatchEnd: (state, action) => {
      state.stopwatchSettings.stopwatchEnd = action.payload
    },

  }
})

export const {setN, setWater, setDuration, setStopwatch, setStopwatchStartFrom, setStopwatchEnd} = standSlice.actions