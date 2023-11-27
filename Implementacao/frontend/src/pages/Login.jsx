import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Select from 'react-select'
import styled from 'styled-components'
import './login.css'
// import { AuthContext } from '../contexts/auth'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

// const Wrapper = styled.div``

// display: flex;
// flex-direction: column;
// min-height: 85vh;
// justify-content: center;
// align-items: center;

// const LoginForm = styled.form``
// width: 300px; /* ou o tamanho desejado para o formulário */
// margin: 20px;

const Login = () => {
  const options = [
    { value: 'Students', label: 'Aluno' },
    { value: 'Companies', label: 'Empresa' },
    { value: 'Teachers', label: 'Professor' }
  ]

  const [values, setValues] = useState()
  const [tipo, setTipo] = useState('students')
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    try {
      console.log(tipo)
      const response = await api.post(`${tipo}/login`, { email, password })
      console.log(response.data)
      localStorage.setItem('cpf', response.data)
      navigate('/')
    } catch (err) {
      console.log('erro')
    }
  }

  // const handleChangesValue = value => {
  //   setValues(prevValue => ({
  //     ...prevValue,
  //     [value.target.name]: value.target.value
  //   }))
  // }
  const handleChangesType = value => {
    setValues(prevValue => ({
      ...prevValue,
      ['tipo']: value.value
    }))
    setTipo(value.value.toLowerCase())
  }

  // const { authenticated, login } = useContext(AuthContext);

  // const handleClickButton = () =>{
  //     login(values.email, values.password, tipo);
  // };

  return (
    <div>
      <Navbar />

      <div className="login">
        <h4>Login</h4>
        <form onSubmit={handleLogin}>
          <div className="text_area">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email@examplo.com"
              className="text_input"
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              className="text_input"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div className="select_area">
            <Select
              onChange={handleChangesType}
              classNamePrefix="tipo"
              defaultValue={options[0]}
              name="Tipo"
              options={options}
              className="select_input"
              isSearchable={false}
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <a className="link" href="/Cadastro">
          Cadastrar
        </a>
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
  )
}

export default Login
