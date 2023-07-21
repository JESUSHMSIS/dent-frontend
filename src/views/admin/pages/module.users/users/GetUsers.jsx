import axios from 'axios';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';

import '../../../../../styles/admin/users.css';

const cookies = new Cookies();

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserAdded = (newUser) => {
    // Agregar el nuevo usuario a la lista actualizada de usuarios sin recargar la página
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleAddUserClick = () => {
    setShowAddUserForm(true);
  };

  const handleCloseAddUserForm = () => {
    setShowAddUserForm(false);
  };

  const handleUserUpdated = (updatedUser) => {
    // Actualizar la lista de usuarios con el usuario actualizado sin recargar la página
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const handleEditUserClick = (user) => {
    setSelectedUser(user);
    setShowEditUserForm(true);
  };

  const handleCloseEditUserForm = () => {
    setSelectedUser(null);
    setShowEditUserForm(false);
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/user', {
      headers: {
        Authorization: `Bearer ${cookies.get('token')}`
      }
    }).then((response) => {
      if (response.data.ok) {
        setUsers(response.data.usuarios);
        console.log(response.data.usuarios);
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const handleDeleteUser = (userId) => {
    const confirmed = window.confirm("¿Estás seguro de eliminar este usuario?");
    if (confirmed) {
      axios
        .delete(`http://localhost:8080/api/user?id=${userId}`, {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        })
        .then((response) => {
          if (response.data.ok) {
            // Filtrar el usuario eliminado de la lista de usuarios sin recargar la página
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Hubo un error al eliminar el usuario. Por favor, inténtelo de nuevo más tarde.");
        });
    }
  };

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Lista de Usuarios</h2>
          <Button onClick={handleAddUserClick} className="btn">
            Añadir usuario
          </Button>
        </div>
        <Modal
          isOpen={showAddUserForm}
          onRequestClose={handleCloseAddUserForm}
          style={{ content: { width: '450px', left: '50%', transform: 'translateX(-50%)' },
                  overlay: {zIndex: 100000}}
          }
        >
          <AddUser onUserAdded={handleUserAdded} onCloseForm={handleCloseAddUserForm} />
        </Modal>
        <Modal
          isOpen={showEditUserForm}
          onRequestClose={handleCloseEditUserForm}
          style={{ content: { width: '450px', left: '50%', transform: 'translateX(-50%)' } ,
                  overlay: {zIndex: 10000}}
          }
        >
          {selectedUser && (
            <EditUser
              editUser={selectedUser}
              onUserUpdated={handleUserUpdated}
              onCloseForm={handleCloseEditUserForm}
            />
          )}
        </Modal>

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
                    <button className='buttons edit' onClick={() => handleEditUserClick(user)}>
                      <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <button className='buttons trash' onClick={() => handleDeleteUser(user.id)}>
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
  );
}

export default GetUsers;
