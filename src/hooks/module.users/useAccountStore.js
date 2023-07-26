
import { useDispatch, useSelector } from 'react-redux';
import { cafeApi } from "../../services";
import { setAccounts } from '../../store';

export const useAccountStore = () =>{
  
  const dispatch = useDispatch();

  const getAccounts = async () => {
    
    const { data } = await cafeApi.get('/account');
    console.log(data);

    dispatch(setAccounts({accounts : data.accounts}));
  }

  return {
    getAccounts
  }
}