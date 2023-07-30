// useAuthStore.js
import { useDispatch, useSelector } from 'react-redux';
import { cafeApi } from '../services';
import { onChecking, onLogin, onLogout, onLoginUser } from '../store/auth/authSlice';
import Cookies from 'universal-cookie'; // Importamos el paquete universal-cookie

const cookies = new Cookies(); // Creamos una instancia de cookies

export const useAuthStore = () => {
  const { status, user, errorMessage, statusUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ userName, password }) => {
    dispatch(onChecking());
    
      const { data } = await cafeApi.post('/auth', { userName, password });
      if(data.error==undefined) {
      console.log(data)
      cookies.set('token', data.token, { path: '/' }); // Usamos cookies para guardar el token
      cookies.set('token-init-date', new Date().getTime(), { path: '/' });
      cookies.set('data', JSON.stringify(data.users), { path: '/' }); // Convertimos el objeto a una cadena JSON para guardarlo
      dispatch(onLogin(data.users));
    } else {
      dispatch(onLogout());
      console.log('Oops ocurrio algo', data.errors[0].msg, 'error');
    }
  };

  const checkAuthToken = async () => {
    const token = cookies.get('token'); // Obtenemos el token del cookie
    console.log(token)
    if (token) {
      const data = JSON.parse(cookies.get('data')); // Obtenemos los datos del cookie y los convertimos de vuelta a objeto
      console.log(data)
      return dispatch(onLogin(data));
    } else {
      cookies.remove('token'); // Limpiamos las cookies si no hay token
      cookies.remove('token-init-date');
      cookies.remove('data');
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    cookies.remove('token'); // Limpiamos las cookies al hacer logout
    cookies.remove('token-init-date');
    cookies.remove('data');
    // dispatch(onLogoutCalendar());
    dispatch(onLogout());
  };
  
  return {
    //* Propiedades
    errorMessage,
    status,
    user,
    statusUser,

    //* Métodos
    startLogin,
    checkAuthToken,
    startLogout,
  };
};
