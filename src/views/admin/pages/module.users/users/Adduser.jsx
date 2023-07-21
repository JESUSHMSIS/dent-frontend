import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import Modal from 'react-modal';

const cookies = new Cookies();

const AddUser = ({ onUserAdded, onCloseForm }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    CI: "",
    age: ""
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  const handleAddUser = () => {
    axios.post('http://localhost:8080/api/user', newUser, {
      headers: {
        Authorization: `Bearer ${cookies.get('token')}`
      }
    }).then((response) => {
      if (response.data.ok) {
        onUserAdded(newUser);
        setNewUser({
          name: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          CI: "",
          age: ""
        });
        // Cerrar el formulario después de agregar un usuario
        
        onCloseForm();
        window.location.reload()

      }
    }).catch((error) => {
      console.error(error);
      alert('Hubo un error al agregar el usuario. Por favor, inténtelo de nuevo más tarde.');
    });
  };
    return (
        <div style={{textAlign:'center'}}>
          
           {typeof onCloseForm === 'function' ? (
          <>
            <h2 style={{marginBottom:'20px'}}>Añadir usuarios</h2>

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
            <button onClick={handleAddUser} style={{marginTop:'20px',padding:'10px 25px',backgroundColor:'#999', cursor:'pointer',fontSize:'15px'}}>Añadir usuario</button>
            <button onClick={onCloseForm} style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', cursor: 'pointer' , fontSize:'40px'}}> <ion-icon name="close-outline" ></ion-icon></button>
            </>
            ) : null}
        </div>
    );
};

// Declara las propTypes para el componente
AddUser.propTypes = {
    onUserAdded: PropTypes.func.isRequired, // Espera una función llamada onUserAdded
    onCloseForm: PropTypes.func
};

export default AddUser;
