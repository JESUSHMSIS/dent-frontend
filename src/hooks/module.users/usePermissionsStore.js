
import { useDispatch, useSelector } from 'react-redux';
import { cafeApi } from "../../services";
import { setPermissions } from '../../store';

export const usePermissionStore = () =>{
  
  const dispatch = useDispatch();

  const getPermissions = async () => {
    
    const { data } = await cafeApi.get('/permissions');
    console.log(data);

    dispatch(setPermissions({permissions : data.permissions}));
  }

  return {
    getPermissions
  }
}