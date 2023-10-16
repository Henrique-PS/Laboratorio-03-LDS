import { useState, useContext } from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import Select from 'react-select';
import styled from 'styled-components';
import "./login.css";
import { AuthContext } from '../contexts/auth';

const Wrapper = styled.div`

`;

// display: flex;
// flex-direction: column;
// min-height: 85vh;
// justify-content: center;
// align-items: center;

const LoginForm = styled.form`

`;
// width: 300px; /* ou o tamanho desejado para o formulário */
// margin: 20px;


const Login = () => {
    const options = [
        { value: 'Aluno', label: 'Aluno' },
        { value: 'Empresa', label: 'Empresa' },
        { value: 'Professor', label: 'Professor' },
      ]         
    

    const [values, setValues] = useState();
    const [tipo, setTipo] = useState('aluno');
    
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
        setTipo(value.value.toLowerCase());
    };

    const { authenticated, login } = useContext(AuthContext);

    const handleClickButton = () =>{
        debugger;   
        login(values.email, values.password, tipo);
    };

    return (
        <div>
            <Navbar />

            <div className="login">
                <h4>Login</h4>
                <form>
                <div className="text_area">
                    <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email@examplo.com"
                    className="text_input"
                    onChange={handleChangesValue}
                    />
                </div>
                <div className="text_area">
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    className="text_input"
                    onChange={handleChangesValue}
                    />
                </div>
                <div className="select_area">
                    <Select onChange={handleChangesType} classNamePrefix="tipo" defaultValue={options[0]} name="Tipo" options={options} className="select_input" isSearchable={false}/>
                </div>
                <button type="submit" className="btn" onClick={() => handleClickButton()}>Login</button>
                </form>
                <a className="link" href="/Cadastro">Cadastrar</a>
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

export default Login;