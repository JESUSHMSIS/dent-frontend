import { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountType: '',
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    CI: '',
    age: '',
    userName: '',
    password: '',
    role: '',
  });
  const [accountTypes, setAccountTypes] = useState([]);
  const [roles, setRoles] = useState([]);
 

 useEffect(() => {
    // Función para obtener los tipos de cuenta
    const getAccountTypes = () => {
      axios.get('http://localhost:8080/api/typeAccount', {
        headers: {
          Authorization: `Bearer ${cookies.get('token')}`
        }
      })
        .then((response) => {
          setAccountTypes(response.data.typesAcount);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // Función para obtener los roles disponibles
    const getRoles = () => {
      axios.get('http://localhost:8080/api/roles', {
        headers: {
          Authorization: `Bearer ${cookies.get('token')}`
        }
      })
        .then((response) => {
          setRoles(response.data.roles);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getAccountTypes();
    getRoles();
  }, []);
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleRegister = () => {
    axios.post('http://localhost:8080/api/account', formData, {
      headers: {
        Authorization: `Bearer ${cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('Registro exitoso:', response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleAccountTypeChange = (accountTypeId) => {
    setFormData({ ...formData, accountType: accountTypeId });
    handleNextStep();
  };

  const handlePersonalInfoChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
    handleNextStep();
  };

  const AccountTypePage = () => {
    return (
      <div>
        <h2>Seleccione el tipo de cuenta:</h2>
        {accountTypes.map(accountType => (
          <label key={accountType._id}>
            <input
              type="radio"
              name="accountType"
              value={accountType._id}
              checked={formData.accountType === accountType._id}
              onChange={() => handleAccountTypeChange(accountType._id)}
            />
            {accountType.name}
          </label>
        ))}
      </div>
    );
  };

  const PersonalInfoPage = () => {
    return (
      <div>
        {/* Aquí coloca los campos para la información personal */}
        <input type="text" name="name" value={formData.name} onChange={handlePersonalInfoChange} />
        <input type="text" name="lastName" value={formData.lastName} onChange={handlePersonalInfoChange} />
        <input type="text" name="email" value={formData.email} onChange={handlePersonalInfoChange} />
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handlePersonalInfoChange} />
        <input type="text" name="CI" value={formData.CI} onChange={handlePersonalInfoChange} />
        <input type="text" name="age" value={formData.age} onChange={handlePersonalInfoChange} />
      </div>
    );
  };

  const RoleSelectionPage = () => {
    return (
      <div>
        <h2>Seleccione el rol:</h2>
        <select name="role" onChange={handleRoleChange}>
          <option value="">Seleccionar rol...</option>
          {roles.map(role => (
            <option key={role._id} value={role._id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const UsernamePasswordPage = () => {
    return (
      <div>
        {/* Aquí coloca los campos para el nombre de usuario y contraseña */}
        <input type="text" name="userName" value={formData.userName} onChange={handlePersonalInfoChange} />
        <input type="password" name="password" value={formData.password} onChange={handlePersonalInfoChange} />
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <AccountTypePage />
            <button onClick={handleNextStep}>Siguiente</button>
          </>
        );
      case 2:
        return (
          <>
            <PersonalInfoPage />
            <button onClick={handleNextStep}>Siguiente</button>
            <button onClick={handlePreviousStep}>Atrás</button>
          </>
        );
      case 3:
        return (
          <>
            <RoleSelectionPage />
            <button onClick={handleNextStep}>Siguiente</button>
            <button onClick={handlePreviousStep}>Atrás</button>
          </>
        );
      case 4:
        return (
          <>
            <UsernamePasswordPage />
            <button onClick={handleRegister}>Completar registro</button>
            <button onClick={handlePreviousStep}>Atrás</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      {renderStep()}
    </div>
  );
};

export default RegistrationForm;
