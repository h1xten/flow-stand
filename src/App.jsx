import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Homepage from './pages/homepage/Homepage'
import Manualpage from './pages/manualpage/Manualpage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Homepage />}/>
          <Route path='manual' element={<Manualpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App