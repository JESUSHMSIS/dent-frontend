import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { styleModalUpdateAccount } from '../../../../../styles/StyleModals';

import axios from 'axios';
import Cookies from 'universal-cookie';


import { ModalUpdateAccount } from './ModalUpdateAccount';

export const AccountsList = () => {
  
  const [accounts, setData] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  
  const fetchAccounts = () => {
    const cookies = new Cookies();
    const token = cookies.get('token');

    axios.get(
      'http://localhost:8080/api/account',
      {
        headers : {
          Authorization : `Bearer ${token}`}
      })
      .then(response => {
        console.log(response.data.accounts);
        setData(response.data.accounts);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  };


  const [dataAccount, setDataAccount] = useState([]);

  const [modalUpdAccount, setModalUpdAccount] = useState(false);
  const OpenModalUpdAccount = (account) => {
    setModalUpdAccount(true);
    setDataAccount(account);
  };
  const CloseModalUpdAccount = () => { setModalUpdAccount(false) };

  
  const [modalDelAccount, setModalDelAccount] = useState(false);
  const OpenModalDelAccount = () => { setModalDelAccount(true) };
  const CloseModalDelAccount = () => { setModalDelAccount(false) };

  return (
    <>
      <div className='accounts-content-list'>
        <table className='accounts-list'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              accounts.map( account =>{
                return (
                  <tr key={account.id}>
                    <td>{account.userName}</td>
                    <td>
                      <button className='button-update' onClick={()=>OpenModalUpdAccount(account)}>
                        <span className="icon">
                          <ion-icon name='create-outline'></ion-icon>
                        </span>
                        <span className="title">{account.title}</span>
                      </button>
                    </td>
                    <td>
                      <button className='button-delete'>
                        <span className="icon">
                          <ion-icon name='trash-outline'></ion-icon>
                        </span>
                        <span className="title">{account.title}</span>
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      
      <Modal
        isOpen={modalUpdAccount}
        onRequestClose={CloseModalUpdAccount}
        style={styleModalUpdateAccount}
      >
        <ModalUpdateAccount account={dataAccount} closeModal={CloseModalUpdAccount}/>
      </Modal>

    </>
  );
}