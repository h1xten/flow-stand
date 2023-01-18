import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  power: false,
  duration: 0,
  N: 0,
  warningLight: false,
  water: false,
  stopwatch: 0,
  stopwatchSettings: {
    stopwatchResult: null,
    stopwatchStartFrom: null,
    stopwatchEnd: null,
    intervStop: false,
  }
}

const timeForN = (N) => {
  const Q = 102.74 * Math.log(N) - 65.55
  const time = ((1.47 / Q) * 3600 * 20)
  return time
}

export const standSlice = createSlice({
  name: 'standSlice',
  initialState,
  reducers: {
    setN: (state, action) => {
      state.N = action.payload

      // const dur = 
      //   state.N === 0 ? 1000000 :
      //   state.N === 20 ? timeForN(20) : 
      //   state.N === 40 ? timeForN(40) : 
      //   state.N === 60 ? timeForN(60) : 
      //   state.N === 80 ? timeForN(80) : 10000000
      // state.duration = dur

      const dur = timeForN(state.N)
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
    setIntervStop: (state, action) => {
      state.stopwatchSettings.intervStop = action.payload
    },
    setWarningLight: (state, action) => {
      state.warningLight = action.payload
    }

  }
})

export const {setN, setWater, setDuration, setStopwatch, setStopwatchStartFrom, setStopwatchEnd, setIntervStop, setWarningLight} = standSlice.actions