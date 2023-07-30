import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import { useUserStore, useAccountStore } from '../../../../../../hooks';
import { useSelector } from 'react-redux';
import { addAccount } from '../../../../../../helpers';

import { styleModalCreateAccount } from '../../../../../../styles/modals/StyleModalCreate';
import '../../../../../../styles/admin/contentModal.css';


export const ModalCreateAccount = ({modal, closeModal, typeAccounts, roles}) => {

  // Efecto response para el modal
  const [isDisabled, setIsDisabled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth - 420);
  styleModalCreateAccount.content.width = windowWidth;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if(width > 1100){
        setWindowWidth(width - 350);
      }
      else if(width > 800){
        setWindowWidth(width - 200);
      }
      else if(width > 500){
        setWindowWidth(width - 100);
      }else if(width < 500){
        setWindowWidth(width - 70);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const { getUser } = useUserStore();
  const { postAccount } = useAccountStore();

  useEffect(()=>{
    getUser();
  }, []);

  const { users = [] } = useSelector((state) => state.users);
  const [users_search, setUsers] = useState(users);

  useEffect(() => {
    setUsers(users);
  }, [users]);

  // Filtrar usuarios
  const searchUser=(user)=>{
    const regex = new RegExp(user, 'i');

    const filter_name = users.filter(
      (user) => regex.test(user.name)
    );

    setUsers(filter_name);
  }

  // Agregar usuarios a la nueva cuenta
  const [users_account, setUsersAccount] = useState([]);
  const AddUsers = (user, state) =>{
    
    if(state){
      setUsersAccount((users_prev)=>[...users_prev, user]);
    }else{
      setUsersAccount((users_prev)=> users_prev.filter((user_ac)=> user_ac !== user ));
    }
  }

  const struct_data = {
    rol : '',
    users : [],
    typeAccount: '',
    userName: '',
    password: ''
  };
  // Crear Usuario
  const [data, setData] = useState(struct_data);
  const handleData = (e) => {
    const { name, value } = e.target;
    console.log(users_account);
    setData((data_pre)=>({
      ...data_pre,
      [name]: value 
    }));
  }
  useEffect(() => {
    setData((data_pre) => ({
      ...data_pre,
      users: users_account
    }));
  }, [users_account]);


  const handleAddUser = async () =>{
    const pre_res = addAccount(data);
    if(pre_res.length > 0){
      pre_res.map(res => {
        setIsDisabled(true);
        toast.info(res, {
          onClose: ()=>{
            setIsDisabled(false);
          }
        });
      })
    }else{
      const response = await postAccount(data);
      if(response){
        setIsDisabled(true);
        toast.success("Se creo la cuenta con exito!",{
          onClose: ()=>{
            setData(struct_data);
            setUsersAccount([]);
            setIsDisabled(false);
            closeModal();
          },
        });
      }else{
        toast.error('No se pudo crear la cuenta, consulte con el administrador');
      }
    }
  }


  return (
    <Modal
      isOpen={modal}
      onRequestClose={closeModal}
      style={styleModalCreateAccount}
    >
      <div className='content-create-account'>
        <div className='data-new-account'>
          <div>
            <h4>Nombre de cuenta:</h4>
            <input
              disabled={isDisabled}
              type="text" 
              name='userName'
              className='custom-input'
              placeholder='Escriba el nombre'
              onInput={ handleData }
            />
          </div>
          <div>
            <h4>Contraseña de cuenta:</h4>
            <input 
              disabled={isDisabled}
              type="password" 
              name='password'
              className='custom-input'
              placeholder='Escribe la contraseña'
              onInput={ handleData }
            />
          </div>
          <div>
            <h4>Rol de cuenta:</h4>
            <select 
              disabled={isDisabled}
              name='rol'
              className='custom-select'
              onChange={ handleData }
            >
              <option value="" disabled selected hidden>
                Ninguno
              </option>
              {
                roles.map(rol => {
                  return (
                    <option 
                      value={rol.id}
                      key={rol.id}>
                      {rol.name}
                    </option>
                  );
                })
              }
            </select>
          </div>
          <div>
            <h4>Tipo de cuenta:</h4>
            <select 
              disabled={isDisabled}
              name='typeAccount'
              className='custom-select'
              onChange={ handleData }
            >
              <option value="" disabled selected hidden>
                Ninguno
              </option>
              {
                typeAccounts.map(typeAccount => {
                  return (
                    <option 
                      value={typeAccount.id}
                      key={typeAccount.id}>
                      {typeAccount.name}
                    </option>
                  );
                })
              }
            </select>
          </div>
          <div>
            <h4>Usuarios de cuenta:</h4>
            <input 
              disabled={isDisabled}
              type="text" 
              className='custom-input'
              placeholder='Escriba un nombre de usuario'
              onChange={(e)=>{searchUser(e.target.value)}}
            />
          </div>
        </div>

        <div className='content-users-selected'>
          <table>
            {
              users_search.map(user => {
                return (
                  <tr key={user.id} id={user.id}>
                    <td>
                      <p><b>{user.name}</b></p>
                    </td>
                    <td>
                      <input 
                        disabled={isDisabled}
                        type="checkbox" 
                        checked={users_account.includes(user.id) ? true : false}
                        id="custom-checkbox" 
                        className="custom-checkbox"
                        name='users'
                        onChange={(e)=>{
                          const state = e.target.checked;
                          AddUsers(user.id, state);
                        }}
                      />
                    </td>
                  </tr>
                );
              })
            }
          </table>
        </div>
        
        <div className='content-btn-create'>
          <button 
            disabled={isDisabled}
            className='create-btn'
            onClick={ handleAddUser }>
            Crear Cuenta
          </button>
          <button
            disabled={isDisabled}
            onClick={closeModal} 
            className='cancel-btn'>
            Cacnelar
          </button>
        </div>
      </div>
      
      <ToastContainer className="custom-toast-container" />
    </Modal>
  );
}