import React, {useState} from 'react';
import Modal from 'react-modal';

import '../../../../../styles/admin/accounts.css';

import  { AccountsList } from './AccountsList';
import { AccountsHead } from './AccountsHead';

export const AccountsView = () => {


  return (
    <>
      <div className='content-accounts'>
        <AccountsHead />
        <AccountsList />
      </div>
    </>
  );
}