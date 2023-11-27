import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Login from './pages/Login'
import Home from './Pages/Home'
import Cadastro from './Pages/Cadastro'
import HomeEmpresa from './pages/HomeEmpresa'
import HomeAluno from './pages/HomeAluno'
import HomeProfessor from './pages/HomeProfessor'
import Axios from 'axios'

// import { AuthContext } from "./contexts/auth";

export default function AppRoutes() {
  // const [user, setUser] = useState(null);

  // const login = (email, senha, tipo) => {

  //   //apenas enquanto n resolve login
  //   window.location.href("/Implementacao/frontend/src/pages/homeEmpresa.jsx");
  //   //

  //   if(tipo == "aluno"){
  //     Axios.post("http://localhost:3001/loginAluno", {
  //         email: email,
  //         senha: senha,
  //     }).then((response)=>{
  //         console.log(response);
  //         setUser({cpf: "", email});
  //     });
  // } else if (tipo == "professor"){
  //     Axios.post("http://localhost:3001/loginProfessor", {
  //         email: email,
  //         senha: senha,
  //     }).then((response)=>{
  //         console.log(response);
  //         setUser({cpf: "", email});
  //     });
  // } else if (tipo == "empresa"){
  //     Axios.post("http://localhost:3001/loginEmpresa", {
  //         email: email,
  //         senha: senha,
  //     }).then((response)=>{
  //         console.log(response);
  //         setUser({cnpj: "", email});
  //     });
  // }

  // };

  // const logout = () => {
  //   setUser(null);
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/homeEmpresa" element={<HomeEmpresa />} />
        <Route path="/homeAluno" element={<HomeAluno />} />
        <Route path="/homeProfessor" element={<HomeProfessor />} />
      </Routes>
    </BrowserRouter>
  )
}
