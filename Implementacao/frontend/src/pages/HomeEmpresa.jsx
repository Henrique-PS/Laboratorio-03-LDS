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
const HomeEmpresa = () => {

    const [values, setValues] = useState();

    return (
        <div>
            <Navbar />
            <ToastContainer />
            <div className="login_home">
                <h4>Criar vantagem</h4>
                <form>
                <div className="text_area_home">
                {/* <label className="form-label">Nome</label> */}
                    <input
                    id="Nomevantagem"
                    name="Nomevantagem"
                    placeholder="Nome vantagem"
                    
                    />
                </div>
                <div className="text_area_home">
                {/* <label className="form-label">Descrição</label> */}
                    <input
                    id="Descrição"
                    name="Descrição"
                    placeholder="Descrição"
                    
                    />
                </div>
                <div className="text_area_home">
                {/* <label className="form-label">Quantidade</label> */}
                    <input
                    id="Quantidade"
                    name="Quantidade"
                    placeholder="Quantidade"
                    
                    />
                </div>
                <div className="text_area_home">
                {/* <label className="form-label">Custo</label> */}
                    <input
                    id="Custo"
                    name="Custo"
                    placeholder="Custo"
                    
                    />
                </div>
                
                <button type="submit" className="btn" >Criar</button>
                </form>
            </div>
            <div className="containerBoxes">
                <h2>Vantagens existentes</h2>
            </div>
            <div className="containerBoxes2">
                <div className="card">
                    <div className="card-details">
                        <h2>Cupom canetas</h2>
                        <h5><b>Descrição:</b> Compre 6 canetas leve 12 com o cupom</h5>
                        <h5><b>Quantidade:</b> 57</h5>
                        <h5><b>Valor:</b> 30 moedas</h5>
                    </div>
                    <button>Editar</button>
                </div>
                <div className="card">
                    <div className="card-details">
                        <h2>Cupom livro</h2>
                        <h5><b>Descrição:</b> 30% desconto nos livros da editora globo livros</h5>
                        <h5><b>Quantidade:</b> 12</h5>
                        <h5><b>Valor:</b> 70 moedas</h5>
                    </div>
                    <button>Editar</button>
                </div>
                <div className="card">
                    <div className="card-details">
                        <h2>Cupom kit lapis</h2>
                        <h5><b>Descrição:</b> 30 Lapis de colorir com 40% de desconto</h5>
                        <h5><b>Quantidade:</b> 8</h5>
                        <h5><b>Valor:</b> 100 moedas</h5>
                    </div>
                    <button>Editar</button>
                </div>
            </div>
            <Footer />
        </div>


    );
};

export default HomeEmpresa;