import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import HomeEmpresa from './pages/HomeEmpresa'
import HomeAluno from './pages/HomeAluno'
import HomeProfessor from './pages/HomeProfessor'

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/homeEmpresa" element={<HomeEmpresa />} />
        <Route path="/homeAluno" element={<HomeAluno />} />
        <Route path="/homeProfessor" element={<HomeProfessor />} />
      </Routes>
    </BrowserRouter>
  )
}
