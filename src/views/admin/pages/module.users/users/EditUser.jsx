import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Modal from 'react-modal';
import "../../../../../styles/Dashboard.css"


const cookies = new Cookies();

const EditUser = ({ editUser, onUserUpdated, onCloseForm }) => {
  const [user, setUser] = useState(editUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdateUser = () => {
    axios
      .put(`http://localhost:8080/api/user?id=${user.id}`, user, {
        headers: {
          Authorization: `Bearer ${cookies.get('token')}`,
        },
      })
      .then((response) => {
        if (response.data.ok) {
          onUserUpdated(user); // Notificar al componente GetUsers que el usuario ha sido actualizado
          onCloseForm();
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Hubo un error al actualizar el usuario. Por favor, inténtelo de nuevo más tarde.');
      });
  };

  return (
    <Modal isOpen={true} onRequestClose={onCloseForm} style={{content:{width:'450px' ,left:'50%' ,transform:'translateX(-50%)' , textAlign:'center'},
                  overlay: {zIndex: 100000}}}>
      <h2 style={{marginBottom:'20px'}}>Editar Usuario</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        placeholder="Ingresa tu nombre"
      />
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
        placeholder="Apellido"
      />
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="phoneNumber"
        value={user.phoneNumber}
        onChange={handleInputChange}
        placeholder="Número de teléfono"
      />
      <input
        type="text"
        name="CI"
        value={user.CI}
        onChange={handleInputChange}
        placeholder="Cédula de identidad"
      />
      <input
        type="text"
        name="age"
        value={user.age}
        onChange={handleInputChange}
        placeholder="Edad"
      />
      <button onClick={handleUpdateUser} style={{marginTop:'20px',padding:'10px 25px',backgroundColor:'#999', cursor:'pointer',fontSize:'15px'}}>Guardar</button>
      <button onClick={onCloseForm} style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', cursor: 'pointer' , fontSize:'40px'}}>
        <ion-icon name="close-outline" ></ion-icon>     
      </button>
    </Modal>
  );
};

EditUser.propTypes = {
  editUser: PropTypes.object.isRequired,
  onUserUpdated: PropTypes.func.isRequired,
  onCloseForm: PropTypes.func.isRequired,
};

export default EditUser;
