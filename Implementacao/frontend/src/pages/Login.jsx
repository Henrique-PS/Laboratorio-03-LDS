import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import styled from 'styled-components';
import "./login.css";

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
    return (
        <div>
            <Navbar />

            <div className="login">
                <h4>Login</h4>
                <form>
                <div className="text_area">
                    <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="email@examplo.com"
                    className="text_input"

                    />
                </div>
                <div className="text_area">
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    className="text_input"

                    />
                </div>
                <button type="submit" className="btn">Login</button>
                </form>
                <a className="link" href="/signup">Sign Up</a>
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