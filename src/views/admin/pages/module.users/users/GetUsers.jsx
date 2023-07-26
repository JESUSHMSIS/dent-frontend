import { useEffect, useState } from 'react';
import { useUserStore } from '../../../../../hooks';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import AddUser from './AddUser';

import '../../../../../styles/admin/users.css';

const GetUsers = () => {
  const { getUser } = useUserStore();
  const { users = [] } = useSelector((state) => state.users);

   useEffect(() => {
    getUser();
  }, []);

  // Estado para controlar la apertura/cierre del modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
          <button className="btn" onClick={openModal}>
            Añadir usuario
          </button>
        </div>
        <table>
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
                    <button className='buttons edit'>
                      <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <button className='buttons trash'>
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
    </div>
  );
};

export default GetUsers;
