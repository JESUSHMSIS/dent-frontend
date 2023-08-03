import React, {useState, useEffect} from 'react';

import { useTypeAccountStore, useRoleStore } from '../../../../../hooks';
import { useSelector } from 'react-redux';

import { ModalCreateAccount, ModalCreateRol } from './modals';

export const AccountsHead = ({searchAccount}) => {

  /* ------------------  Functions Modal Init ---------------  */

  // Modal Create Account
  const [modalCreateAccount, setModalCreateAccount] = useState(false);
  const CloseModalCreateAccount = () => { setModalCreateAccount(false) };
  // Modal Create Rol
  const [modalCreateRol, setModalCreateRol] = useState(false);
  const CloseModalCreateRol = () => { setModalCreateRol(false) };

  /* ------------------  Funcitons Modal end  ---------------  */


  const { getTypeAccounts } = useTypeAccountStore();
  const { getRoles } = useRoleStore();
  

  useEffect(() => {
    getTypeAccounts();
    getRoles();
  }, []);

  const { typeAccounts = [] } = useSelector((state) => state.typeAccounts);
  const { roles = [] } = useSelector((state) => state.roles);

  const typeAccountsEdit = [
    {
      id : 1,
      name : 'Todos'
    },
    ...typeAccounts
  ]

  return (
    <div className='header-accounts'>
      <div className='content-search'>
        <div>
          <input
            onChange={
              (e)=>{
                const typeAccount = e.target.parentNode.parentNode.querySelector('select').value;
                searchAccount(e.target.value, typeAccount);
              }
            }
            type='text'
            placeholder='Buscar cuentas'
            className='custom-input'
          />
        </div>
        <div>
          <select className='custom-select'
            onChange={(e)=>{
              const account = e.target.parentNode.parentNode.querySelector('input').value;
              searchAccount(account, e.target.value);
            }}
          >
            {
              typeAccountsEdit.map(typeAccount => {
                return (
                  <option key={typeAccount.id} value={typeAccount.id}>{typeAccount.name}</option>
                );
              })
            }
          </select>
        </div>
      </div>
      <div className='content-create'>
        <div>
          <button 
            onClick={()=>{setModalCreateAccount(true)}} 
            className='custom-btn'
          >
            Crear cuenta
          </button>
        </div>
        <div>
          <button 
            className='custom-btn'
            onClick={()=>{setModalCreateRol(true)}}
          >
            Crear rol
          </button>
        </div>
      </div>

      <ModalCreateAccount 
        modal={modalCreateAccount}
        closeModal={CloseModalCreateAccount}
        typeAccounts={typeAccounts}
        roles={roles}
      />

      <ModalCreateRol
        modal={modalCreateRol}
        closeModal={CloseModalCreateRol}
        roles={roles}
      />
      
    </div>
  );
}