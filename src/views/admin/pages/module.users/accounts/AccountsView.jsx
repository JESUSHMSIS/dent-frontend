
import React, {useState, useEffect} from 'react';

import '../../../../../styles/admin/accounts.css';
import '../../../../../styles/buttons.css';
import '../../../../../styles/inputs.css';

import  { AccountsList } from './AccountsList';
import { AccountsHead } from './AccountsHead';
import { AccountsInf } from './AccountInf';
import { AccountsRolType } from './AccountRolType';

import { useAccountStore } from '../../../../../hooks';
import { useSelector } from 'react-redux';

export const AccountsView = () => {

  const { getAccounts } = useAccountStore();

  useEffect(() => {
    getAccounts();
  }, []);


  const { accounts = [] } = useSelector( (state) => state.accounts)
  
  const [accounts_search, setAccountSearch] = useState(accounts);
  
  useEffect(() => {
    setAccountSearch(accounts);
  }, [accounts]);


  // Fitrando la busqueda del usuario
  const searchAccount = (search_account, search_type)=>{

    const regex = new RegExp(search_account, 'i');

    const filter_name = accounts.filter(
      (account) => regex.test(account.userName)
    );
    setAccountSearch(filter_name);
    
    if(search_type != 1){
      const filter_type = filter_name.filter(
        (account) => account.typeAccount._id === search_type
      );
      setAccountSearch(filter_type);
    }

  }


  return (
    <div className='content-accounts'>

      <AccountsHead 
        searchAccount={searchAccount}
      />

      <div className='view-accounts'>
        
        <AccountsList accounts={accounts_search}/>

        <AccountsRolType />
        
        <AccountsInf />

      </div>
    </div>
  );
}