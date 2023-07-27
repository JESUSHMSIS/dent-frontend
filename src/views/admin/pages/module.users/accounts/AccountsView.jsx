import React from 'react';

import '../../../../../styles/admin/accounts.css';

import  { AccountsList } from './AccountsList';
import { AccountsHead } from './AccountsHead';

export const AccountsView = () => {


  return (
    <div className='content-accounts'>
      <AccountsHead />
      {/* <AccountsList /> */}
      <div className='view-accounts'>
        <div className='content-list-accounts'>
          <AccountsList />
        </div>
        <div className='content-type-account'></div>
        <div className='content-inf-account'></div>
      </div>
    </div>
  );
}