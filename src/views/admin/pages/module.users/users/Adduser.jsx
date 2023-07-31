import { useState } from 'react';
import PropTypes from 'prop-types';
import { useUserStore } from '../../../../../hooks';
import { validateName, validateLastName, validateEmail, validatePhoneNumber, validateCI, validateAge } from '../../../../../helpers/users/addUsers';
import { toast } from 'react-toastify';

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
    // Validar campos antes de agregar el usuario
    const nameError = validateName(newUser.name);
    const lastNameError = validateLastName(newUser.lastName);
    const emailError = validateEmail(newUser.email);
    const phoneNumberError = validatePhoneNumber(newUser.phoneNumber);
    const ciError = validateCI(newUser.CI);
    const ageError = validateAge(newUser.age);

    // Si hay errores de validación, mostrar mensajes de error y no agregar el usuario
    if (nameError || lastNameError || emailError || phoneNumberError || ciError || ageError) {
      toast.error(nameError || lastNameError || emailError || phoneNumberError || ciError || ageError);
      return;
    }

    // Agregar el usuario si las validaciones son exitosas
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
        style={{color:'#000'}}
      />
      <input
        type="text"
        name="lastName"
        value={newUser.lastName}
        onChange={handleInputChange}
        placeholder="Apellido"
        style={{color:'#000'}}
      />
      <input
        type="text"
        name="email"
        value={newUser.email}
        onChange={handleInputChange}
        placeholder="Ingresa tu Email"
        style={{color:'#000'}}
      />
      <input
        type="text"
        name="phoneNumber"
        value={newUser.phoneNumber}
        onChange={handleInputChange}
        placeholder="Número de teléfono"
        style={{color:'#000'}}
      />
      <input
        type="text"
        name="CI"
        value={newUser.CI}
        onChange={handleInputChange}
        placeholder="Cédula de identidad"
        style={{color:'#000'}}
      />
      <input
        type="text"
        name="age"
        value={newUser.age}
        onChange={handleInputChange}
        placeholder="Edad"
        style={{color:'#000'}}
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
