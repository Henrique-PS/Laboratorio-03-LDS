import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Pages/Login'
import Home from './Pages/Home'
// import Cadastro from './Pages/Cadastro'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/cadastro" element={<Cadastro />} /> */}
      </Routes>
    </BrowserRouter>
  )
}