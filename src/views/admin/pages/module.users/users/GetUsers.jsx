import { useEffect, useState } from 'react';
import { useUserStore } from '../../../../../hooks';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
// import AddUser from './AddUser';
import DeleteUser from './DeleteUsers';
import EditUser from './EditUser'; 
import { styleModalPrefab } from '../../../../../styles/modals';
import '../../../../../styles/admin/accounts.css';
import { ToastContainer } from 'react-toastify';
import SearchUsers from './SearchUsers';
const GetUsers = () => {
  const styleModalDelete = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000',
    },
    content: {
      border: 'none',
      borderRadius: 20,
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      maxWidth: '400px', // Ajusta el ancho máximo según tus preferencias
      margin: '20px', // Ajusta el margen según tus preferencias
      padding: '20px', // Ajusta el padding según tus preferencias
      backgroundColor: 'var(--widget)',
    },
  };

  const { getUser,deleteUser } = useUserStore();
  const { users = [] } = useSelector((state) => state.users);


  // Estado para controlar la apertura/cierre del modal
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false); // 2. Nuevo estado para controlar la apertura del formulario de edición
  const [editUserId, setEditUserId] = useState(null); // 2. Nuevo estado para almacenar el ID del usuario a editar
  const [searchUsers, setSearchUsers] = useState(users);
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setSearchUsers(users);
  }, [users]);

  // Fitrando la busqueda del usuario
  const searchUser = (search)=>{
    const regex = new RegExp(search, 'i');
    const filter_accounts = users.filter(
      (users) => regex.test(users.name)
    );
    setSearchUsers(filter_accounts);
  }
  // Function to open the delete confirmation modal
   const openDeleteModal = (userId) => {
    setUserIdToDelete(userId);
  };

  // Function to close the delete confirmation modal
  const closeDeleteModal = () => {
    setUserIdToDelete(null);
  };

  // Function to handle user deletion
  const handleDeleteUser = async () => {
    if (userIdToDelete) {
      await deleteUser(userIdToDelete);
      closeDeleteModal();
    }
  };
  const handleEditUser = (id) => {
    setEditUserId(id);
    setEditModalOpen(true);
  };

  

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
            <SearchUsers searchAccount={searchUser}/>
          <div className='content-create' style={{marginTop:'10px'}}>
            
          </div>
        </div>
      <div className='content-list-accounts'>
      <table className='accounts-list'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th className='hidden-mobile'>Email</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {searchUsers.length > 0 ? (
            searchUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td className='hidden-mobile'>{user.email}</td>
                <td>
                  <button
                    className='button-update'
                    style={{ marginLeft: '50px' }}
                    onClick={() => handleEditUser(user.id)}
                  >
                    <ion-icon name='create-outline'></ion-icon>
                  </button>
                  <button className='button-delete'
                  style={{ marginLeft: '50px' }} 
                  onClick={() => openDeleteModal(user.id)}>
                    <ion-icon name='trash-outline'></ion-icon>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='4'>No hay usuarios</td>
            </tr>
          )}
        </tbody>
      </table>

      </div>
        
      </div>

     
     {/* Modal de eliminación */}
     <Modal
          isOpen={!!userIdToDelete}
          onRequestClose={closeDeleteModal}
          contentLabel="Confirmar Eliminación de Usuario"
          ariaHideApp={false}
          style={styleModalDelete} // Utiliza el nuevo objeto de estilos
        >
          {/* Pass handleDeleteUser and closeDeleteModal as props to the DeleteUser component */}
          <DeleteUser onDelete={handleDeleteUser} onCancel={closeDeleteModal} />
        </Modal>
              
      <Modal
      isOpen={isEditModalOpen}
      onRequestClose={() => setEditModalOpen(false)}
      contentLabel="Editar Usuario"
      ariaHideApp={false}
      style={styleModalPrefab}
    >
      {/* Solo renderiza EditUser cuando hay un usuario válido para editar */}
      {editUserId !== null && (
        <EditUser
          editUser={users.find((user) => user.id === editUserId)}
          onUserUpdated={() => { /* Aquí puedes hacer cualquier acción después de actualizar el usuario */ }}
          onCloseForm={() => setEditModalOpen(false)}
        />
      )}
    </Modal>
    <ToastContainer className="custom-toast-container"/>
    </div>
  );
};

export default GetUsers;
