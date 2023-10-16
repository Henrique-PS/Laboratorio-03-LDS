import { useState } from 'react'
import React from 'react';
import Select from 'react-select';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import styled from 'styled-components';
import "./Homes.css";
import { useTable } from "react-table";
const HomeProfessor = () => {
     
      const data = [
        {
            nome: "Ana",
            curso: "Engenharia de Software",
            email: "ana@sga.pucminas.com"
        },
        {
            nome: "Gabriel",
            curso: "Engenharia de Software",
            email: "gabriel@sga.pucminas.com"
        },
        {
            nome: "Henrique",
            curso: "Engenharia de Software",
            email: "henrique@sga.pucminas.com"
        },
        {
            nome: "Manuel",
            curso: "Ciência da computação",
            email: "manuel@sga.pucminas.com"
        },
        {
            nome: "Rogerio",
            curso: "Ciencias contábeis",
            email: "rogerio@sga.pucminas.com"
        },
        {
            nome: "Bruno",
            curso: "Jogos digitais",
            email: "bruno@sga.pucminas.com"
        },
        {
            nome: "Leonardo",
            curso: "Jogos digitais",
            email: "leonardo@sga.pucminas.com"
        },
      ]

    return (
        <div>
            <Navbar />
            <ToastContainer />
            <div className="containerBoxes">
                <h2>Alunos</h2>
                <h3>Quantidade de moedas a distribuir: 463</h3>
            </div>
            
            <div className="containerBoxes2">
            <table className="tablePessoa">
                <tr>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>Email</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.nome}</td>
                            <td>{val.curso}</td>
                            <td>{val.email}</td>
                            <td><button>Enviar moedas</button></td>
                        </tr>
                    )
                })}
            </table>
            </div>
            <Footer />
        </div>


    );
};

export default HomeProfessor;