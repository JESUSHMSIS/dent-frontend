import React, {useState} from 'react';

export const ModalUpdateAccount = ({account, closeModal}) => {

  return (
    <div className='content-update-account'>
      <div className='content-close-modal'>
        <button onClick={closeModal}>
          X
        </button>
      </div>
      <div className='content-update'>
        <div className='name-user'>
          <h3>Nombre de cuenta:</h3>
          <br />
          <input 
            type="text"
            value={account.userName}
            placeholder='Nombre de cuenta'

          />
        </div>
        <div className='type-account'>
          <h3>Tipo de cuenta:</h3>
          <br />
          <h4>{account.typeAccount.name}</h4>
        </div>
        <div className='users'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>Age</th>
                <th>Email</th>
                <th>CI</th>
              </tr>
            </thead>
            <tbody>
              {
                account.users.map(user => {
                  return (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.lastName}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>{user.CI}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}