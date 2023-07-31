
import { useDispatch, useSelector } from 'react-redux';
import { cafeApi } from "../../services";
import { setAccounts, setAddAccount } from '../../store';

export const useAccountStore = () =>{
  
  const dispatch = useDispatch();

  const getAccounts = async () => {
    
    const { data } = await cafeApi.get('/account');
    // console.log(data);

    dispatch(setAccounts({accounts : data.accounts}));
  }
  
  const postAccount = async (account) => {
    try {
      const { data } = await cafeApi.post('/account', account);
      // console.log(data)
      dispatch(setAddAccount({ account: data.account }));
      return true;
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      return false;
    }
  }

  return {
    getAccounts,
    postAccount
  }
}