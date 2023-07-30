import  { useState } from 'react';
import PropTypes from 'prop-types';
import { useUserStore } from '../../../../../hooks';

const AddUser = ({ onCloseForm }) => {
  const { postUser } = useUserStore();
  const [newUser, setNewUser] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    CI: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleAddUser = async () => {
    await postUser(newUser);
    setNewUser({
      name: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      CI: '',
      age: '',
    });
    onCloseForm(); // Cerrar el formulario después de agregar un usuario
  };

  return (
    <div className="container" style={{ textAlign: 'center' , color:''}}>
      <h2 style={{ marginBottom: '20px' }}>Añadir usuarios</h2>
            <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Nombre"
            />
            <input
                type="text"
                name="lastName"
                value={newUser.lastName}
                onChange={handleInputChange}
                placeholder="Apellido"
            />
            <input
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Ingresa tu Email"
            />
            <input
                type="text"
                name="phoneNumber"
                value={newUser.phoneNumber}
                onChange={handleInputChange}
                placeholder="Número de teléfono"
            />
            <input
                type="text"
                name="CI"
                value={newUser.CI}
                onChange={handleInputChange}
                placeholder="Cédula de identidad"
            />
            <input
                type="text"
                name="age"
                value={newUser.age}
                onChange={handleInputChange}
                placeholder="Edad"
            />
      {/* Agregar los demás campos del formulario */}
      <button
        onClick={handleAddUser}
        style={{
          marginTop: '20px',
          padding: '10px 25px',
          backgroundColor: '#999',
          cursor: 'pointer',
          fontSize: '15px',
        }}
      >
        Añadir usuario
      </button>
      <button
        onClick={onCloseForm} // Usamos onCloseForm para cerrar el modal
        style={{
          marginTop: '20px',
          padding: '10px 25px',
          backgroundColor: 'red',
          cursor: 'pointer',
          fontSize: '15px',
        }}
      >
        Cancelar
      </button>
    </div>
  );
};

AddUser.propTypes = {
  onCloseForm: PropTypes.func.isRequired,
};

export default AddUser;
