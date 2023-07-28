// import  {useState} from 'react';
// import Modal from 'react-modal';


export const AccountsHead = ({searchAccount}) => {

  return (
    <div className='header-accounts'>
      <div className='content-search'>
        <div>
          <input 
            type='text'
            placeholder='Search accounts'
            onChange={(e)=>searchAccount(e.target.value)}
          />
        </div>
        <div>
          <select name="" id="">
            <option value="uno">Opcion1</option>
          </select> 
        </div>
      </div>
      <div className='content-create'>
        <div>
          <button>New Account</button>
        </div>
        <div>
          <button>New type Account</button>
        </div>
      </div>
    </div>
  );
}