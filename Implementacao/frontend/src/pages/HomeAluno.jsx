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
const HomeAluno = () => {

    const [values, setValues] = useState();

    return (
        <div>
            <Navbar />
            <ToastContainer />
            <div className="containerBoxes">
                <h2>Vantagens a resgatar</h2>
                <h3>Quantidade de moedas: 23</h3>
            </div>

            <div className="containerBoxes2">
                <div className="card">
                    <div className="card-details">
                        <h2>Cupom canetas</h2>
                        <h2>Empresa: Saraiva</h2>
                        <h5><b>Descrição:</b> Compre 6 canetas leve 12 com o cupom</h5>
                        <h5><b>Quantidade:</b> 57</h5>
                        <h5><b>Valor:</b> 30 moedas</h5>
                    </div>
                    <button>Comprar</button>
                </div>
                <div className="card">
                    <div className="card-details">
                        <h2>Cupom livro</h2>
                        <h2>Empresa: Saraiva</h2>
                        <h5><b>Descrição:</b> 30% desconto nos livros da editora globo livros</h5>
                        <h5><b>Quantidade:</b> 12</h5>
                        <h5><b>Valor:</b> 70 moedas</h5>
                    </div>
                    <button>Comprar</button>
                </div>
                <div className="card">
                    <div className="card-details">
                        <h2>Cupom chocolate</h2>
                        <h2>Empresa: Americanas</h2>
                        <h5><b>Descrição:</b> 5 caixas de bombom garoto pelo preço de 3</h5>
                        <h5><b>Quantidade:</b> 25</h5>
                        <h5><b>Valor:</b> 110 moedas</h5>
                    </div>
                    <button>Comprar</button>
                </div>
                <div className="card">
                    <div className="card-details">
                        <h2>Cupom estojos</h2>
                        <h2>Empresa: Leitura</h2>
                        <h5><b>Descrição:</b> estojo do homem aranha com 45% de desconto</h5>
                        <h5><b>Quantidade:</b> 3</h5>
                        <h5><b>Valor:</b> 140 moedas</h5>
                    </div>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="containerBoxes">
                <h2>Vantagens resgatadas anteriormente</h2>
                <div className="containerBoxes2">
                <div className="card">
                    <div className="card-details">
                        <h2>Cupom copo tematico</h2>
                        <h2>Empresa: Saraiva</h2>
                        <h5><b>Descrição:</b> ganhe um copo em qualquer compra acima de 10 reais</h5>
                        <h5><b>Data do resgate:</b> 10/10/2023</h5>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>


    );
};

export default HomeAluno;