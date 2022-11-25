import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import Exemplo from './Exemplo'

function Routing() {
  return (

    <BrowserRouter >
      <Routes >
        <Route path="/" element={<App />} />
        <Route path="/exe" element={<Exemplo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing