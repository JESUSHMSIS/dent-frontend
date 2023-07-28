import { useEffect, useState } from 'react';
import { useUserStore } from '../../../../../hooks';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import AddUser from './AddUser';
import DeleteUser from './DeleteUsers';
import EditUser from './EditUser'; 
import { styleModalUpdateAccount } from '../../../../../styles/StyleModals';
import '../../../../../styles/admin/users.css';

const GetUsers = () => {
  const { getUser,deleteUser } = useUserStore();
  const { users = [] } = useSelector((state) => state.users);

   useEffect(() => {
    getUser();
  }, []);

  // Estado para controlar la apertura/cierre del modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false); // 2. Nuevo estado para controlar la apertura del formulario de edición
  const [editUserId, setEditUserId] = useState(null); // 2. Nuevo estado para almacenar el ID del usuario a editar

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
  // Función para abrir el modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Lista de Usuarios</h2>
          <div className='content-create' style={{marginTop:'10px'}}>
            <button className="btn" onClick={openModal}>
            Añadir usuario
            </button>
          </div>
        </div>
      <div className='view-accounts'>
      <table className='accounts-list'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className='button-update' style={{marginRight:'15px'}} onClick={() => handleEditUser(user.id)}>
                      <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <button className='button-delete' onClick={() => openDeleteModal(user.id)}>
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No hay usuarios</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
        
      </div>

      {/* Modal para agregar usuario */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Usuario"
        ariaHideApp={false}
        style={{
          overlay: {
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '400px',
            margin: 'auto',
            marginTop: '100px',
            zIndex: 10000,
          },
        }}
      >
        {/* Pasamos closeModal como prop al componente AddUser */}
        <AddUser onCloseForm={closeModal} />
      </Modal>
      <Modal
        isOpen={!!userIdToDelete} // Show modal only if there is a user ID to delete
        onRequestClose={closeDeleteModal}
        contentLabel="Confirmar Eliminación de Usuario"
        ariaHideApp={false}
        style={styleModalUpdateAccount}
      >
        {/* Pass handleDeleteUser and closeDeleteModal as props to the DeleteUser component */}
        <DeleteUser onDelete={handleDeleteUser} onCancel={closeDeleteModal} />
      </Modal>

      <Modal
      isOpen={isEditModalOpen}
      onRequestClose={() => setEditModalOpen(false)}
      contentLabel="Editar Usuario"
      ariaHideApp={false}
      style={styleModalUpdateAccount}
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
    </div>
  );
};

export default GetUsers;
