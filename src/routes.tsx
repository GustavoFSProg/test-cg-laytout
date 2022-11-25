import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import Exemplo from './Exemplo'
import Grid from './Grid'

function Routing() {
  return (

    <BrowserRouter >
      <Routes >
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Grid />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing