

import {useState } from 'react';
import axios from 'axios';

const Adduser = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    CI: '',
    age: '',
    accountType: '', // Nuevo campo para el tipo de cuenta
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar validaciones antes de enviar los datos al servidor

    // Envía los datos al servidor para crear un nuevo usuario
    axios.post('http://localhost:8080/api/user', formData)
      .then((response) => {
        console.log(response.data);
        // Si el usuario se creó correctamente, puedes redirigir al usuario a otra página o mostrar un mensaje de éxito, etc.
      })
      .catch((error) => {
        console.error(error);
        // Manejo de errores si es necesario
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... Otros campos del formulario para ingresar detalles del usuario ... */}
      <label>
        Account Type:
        <select name="accountType" value={formData.accountType} onChange={handleChange}>
          <option value="">Select account type</option>
          <option value="personal">Personal</option>
          <option value="familiar">Familiar</option>
          <option value="doctor">Doctor</option>
          <option value="administrativa">Administrativa</option>
        </select>
      </label>
      <button type="submit">Create User</button>
    </form>
  );
};

export default Adduser;