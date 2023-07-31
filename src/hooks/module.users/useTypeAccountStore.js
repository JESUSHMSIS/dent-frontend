
import { useDispatch, useSelector } from 'react-redux';
import { cafeApi } from "../../services";
import { setAccounts, setTypeAccounts } from '../../store';

export const useTypeAccountStore = () =>{
  
  const dispatch = useDispatch();

  const getTypeAccounts = async () => {
    
    const { data } = await cafeApi.get('/typeAccount');
    console.log(data);

    dispatch(setTypeAccounts({typeAccounts : data.typesAcount}));
  }

  return {
    getTypeAccounts
  }
}