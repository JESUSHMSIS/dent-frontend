
import { useDispatch, useSelector } from 'react-redux';
import { cafeApi } from "../../services";
import { setRoles, setAddRol } from '../../store';

export const useRoleStore = () =>{
  
  const dispatch = useDispatch();

  const getRoles = async () => {
    
    const { data } = await cafeApi.get('/roles');
    // console.log(data);
    dispatch(setRoles({roles : data.roles}));
  }

  const postRol = async (rol) => {
    try {
      const { data } = await cafeApi.post('/roles', rol);
      // console.log(data);
      dispatch(setAddRol({ rol: data.role }));
      return true;
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      return false;
    }
  }

  return {
    getRoles,
    postRol
  }
}