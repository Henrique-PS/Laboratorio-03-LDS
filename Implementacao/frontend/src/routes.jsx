import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';

import Login from './Pages/Login'
import Home from './Pages/Home'
import Cadastro from './Pages/Cadastro'
import Axios from 'axios';

import { AuthContext } from "./contexts/auth";


export default function AppRoutes() {
  const [user, setUser] = useState(null);

  const login = (email, senha, tipo) => {
    debugger;
    if(tipo == "aluno"){
      Axios.post("http://localhost:3001/loginAluno", {
          email: email,
          senha: senha,
      }).then((response)=>{
          console.log(response);
          setUser({cpf: "", email});
      });
  } else if (tipo == "professor"){
      Axios.post("http://localhost:3001/loginProfessor", {
          email: email,
          senha: senha,
      }).then((response)=>{
          console.log(response);
          setUser({cpf: "", email});
      });
  } else if (tipo == "empresa"){
      Axios.post("http://localhost:3001/loginEmpresa", {
          email: email,
          senha: senha,
      }).then((response)=>{
          console.log(response);
          setUser({cnpj: "", email});
          debugger;
      });
  }
    
  };

  const logout = () => {

  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{authenticated: !!user, user, login, logout}} >
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}