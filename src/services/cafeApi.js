import axios from 'axios';
import { getEnvVariables } from '../helpers';
import Cookies from 'universal-cookie';

const { VITE_API_URL } = getEnvVariables()

const cafeApi = axios.create({
  baseURL: `${VITE_API_URL}/api`
});

// Todo: configurar interceptores
cafeApi.interceptors.request.use(config => {

    const cookies = new Cookies();
    const token = cookies.get('token');

  config.headers = {
    ...config.headers,
    'Authorization': `Bearer ${token}`
  }

  return config;
})


export default cafeApi;



