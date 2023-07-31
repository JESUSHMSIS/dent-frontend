

import React, {useState} from 'react';



export const AccountsList = ({accounts}) => {

  const [dataAccount, setDataAccount] = useState([]);
  
  return (
    <div className='content-list-accounts'>
      <table className='accounts-list'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            accounts.length > 0 ? 
            (accounts.map( account =>{
              return (
                <tr key={account.id}>
                  <td>{account.userName}</td>
                  <td>
                    <button className='button-delete btn-icon'>
                      <span className="icon">
                        <ion-icon name='trash-outline'></ion-icon>
                      </span>
                      <span className="title">{account.title}</span>
                    </button>
                  </td>
                </tr>
              )
            }))
            : 
            <tr>
              <td colSpan={3}>No hay una cuenta con esas caracteristicas</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}