import React from 'react';

import '../../../../../styles/admin/accounts.css';

import  { AccountsList } from './AccountsList';
import { AccountsHead } from './AccountsHead';

export const AccountsView = () => {


  return (
    <div className='content-accounts'>
      <AccountsHead />
      <AccountsList />
    </div>
  );
}