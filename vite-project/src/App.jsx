import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Productview from './page/Productview'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/product/:id' element={<Productview/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App