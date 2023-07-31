
import { useDispatch, useSelector } from 'react-redux';
import { cafeApi } from "../../services";
import { setRoles } from '../../store';

export const useRoleStore = () =>{
  
  const dispatch = useDispatch();

  const getRoles = async () => {
    
    const { data } = await cafeApi.get('/roles');
    console.log(data);
    dispatch(setRoles({roles : data.roles}));
  }

  return {
    getRoles
  }
}