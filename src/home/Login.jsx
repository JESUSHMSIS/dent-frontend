import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/logo.png';
import './Login.css';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  const [userName, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Verificar si los campos están vacíos
    if (!userName || !password) {
      toast.error('Por favor, completa todos los campos');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        {
          userName,
          password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // Manejar la respuesta del servidor según tus necesidades
      console.log(response.data);

      // Redirigir al usuario a otra página, por ejemplo:
      // history.push('/dashboard');
    } catch (error) {
      // Manejar errores en la solicitud
      console.error(error);

      // Mostrar ventana emergente de error
      toast.error('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <div className="login_form_section">
        <div className="form_container_for_login">
          <form
            method="POST"
            className="login_u_form"
            onSubmit={handleLogin}
            data-aos="fade-right"
          >
            <div className="brand">
              <img src={Logo} alt="logo" />
              <h1>Om Dental Clinic</h1>
            </div>
            <input
              type="text"
              placeholder="Enter your user name"
              name="email"
              value={userName}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login_form_button" type="submit">
              Login In
            </button>
            <span className="lower_title_login"></span>
          </form>
        </div>
      </div>
      <ToastContainer className="custom-toast-container"/>
    </>
  );
};

export default Login;
