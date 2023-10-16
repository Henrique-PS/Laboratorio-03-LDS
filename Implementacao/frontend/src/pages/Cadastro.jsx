import { useState } from 'react'
import React from 'react'
import Select from 'react-select'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import styled from 'styled-components';
import "./cadastro.css";

const Cadastro = () => {

    const [values, setValues] = useState();
    const [aluno, setAluno] = useState(true);
    const [professor, setProfessor] = useState(true);

    const options = [
        { value: 'Aluno', label: 'Aluno' },
        { value: 'Empresa', label: 'Empresa' },
        { value: 'Professor', label: 'Professor' }
      ]
    
    const handleChangesValue = (value) => {
        setValues(prevValue=>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };
    const handleChangesType = (value) => {
        setValues(prevValue=>({
            ...prevValue,
            ['tipo']: value.value,
        }));

        if(value.value.toLowerCase() == "aluno"){
            setAluno(true);
            setProfessor(false);
        } 
        else if (value.value.toLowerCase() == "professor" ) {
            setProfessor(true);
            setAluno(false);
        }    
        else{
            setAluno(false);
            setProfessor(false);
        }
        
    };

    const handleClickButton = () =>{
        console.log(values);
    };

    return (
        <div>
            <Navbar />

            <div className="logincad">
                <h4 className="cad">Cadastro</h4>
                <form className="formcad">
                <div className="text_areacad">
                    <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nome"
                    className="text_inputcad"
                    onChange={handleChangesValue}
                    />
                </div>
                <div className="text_areacad">
                    <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email@examplo.com"
                    className="text_inputcad"
                    onChange={handleChangesValue}
                    />
                </div>
                <div className="text_areacad">
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    className="text_inputcad"
                    onChange={handleChangesValue}
                    />
                </div>
                <div className="select_areacad">
                    <Select onChange={handleChangesType} classNamePrefix="tipo" defaultValue={options[0]} name="Tipo" options={options} className="select_inputcad" isSearchable={false}/>
                </div>
                {(aluno || professor) && <div className="text_areacad">
                    <input
                    type="cpf"
                    id="cpf"
                    name="cpf"
                    placeholder="CPF"
                    className="text_inputcad"
                    onChange={handleChangesValue}
                    />
                </div>}
                {(aluno || professor) && <div className="text_areacad">
                    <input
                    type="instituicao"
                    id="instituicao"
                    name="instituicao"
                    placeholder="Instituição"
                    className="text_inputcad"
                    onChange={handleChangesValue}
                    />
                </div>}
                {aluno && <div className="text_areacad">
                    <input
                    type="curso"
                    id="curso"
                    name="curso"
                    placeholder="Curso"
                    className="text_inputcad"
                    onChange={handleChangesValue}
                    />
                </div>}
                {!aluno && !professor && <div className="text_areacad">
                    <input
                    type="cnpj"
                    id="cnpj"
                    name="cnpj"
                    placeholder="CNPJ"
                    className="text_inputcad"
                    onChange={handleChangesValue}
                    />
                </div>}
                <button type="submit" className="btncad" onClick={handleClickButton}>Cadastrar</button>
                </form>
                <a className="linkcad" href="/Login">Logar</a>
            </div>

            {/* <Wrapper>
                <LoginForm>
                    <h4>Login</h4>
                        <div className="mb-3 text_area">
                            <input type="email" className="form-control text_input" placeholder="email@example.com" />
                        </div>
                        <div className="mb-3 text_area">
                            <input type="password" className="form-control text_input" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                </LoginForm>
                <a className="link" href="/signup">Sign Up</a>
            </Wrapper> */}


            <Footer />
        </div>


    );
};

export default Cadastro;