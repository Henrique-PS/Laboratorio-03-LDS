import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 85vh;
    justify-content: center;
    align-items: center;
`;

const LoginForm = styled.form`
    width: 300px; /* ou o tamanho desejado para o formulário */
    margin: 20px;
`;

const Login = () => {
    return (
        <div>
            <Navbar />

            <Wrapper>
                <LoginForm>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" defaultValue="email@example.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </LoginForm>
            </Wrapper>


            <Footer />
        </div>


    );
};

export default Login;