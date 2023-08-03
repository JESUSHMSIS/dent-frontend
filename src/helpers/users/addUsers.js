// helpers/addUser.js

export const validateName = (name) => {
    if (typeof name !== 'string') {
      return 'El nombre debe ser una cadena de texto';
    }
  
    if (name.trim().length === 0) {
      return 'El nombre no puede estar vacío';
    }
  
    if (name.length > 50) {
      return 'El nombre no puede tener más de 50 caracteres';
    }
  
    return ''; // Validación exitosa
  };
  
  export const validateLastName = (lastName) => {
    if (typeof lastName !== 'string') {
      return 'El apellido debe ser una cadena de texto';
    }
  
    if (lastName.trim().length === 0) {
      return 'El apellido no puede estar vacío';
    }
  
    if (lastName.length > 50) {
      return 'El apellido no puede tener más de 50 caracteres';
    }
  
    return ''; // Validación exitosa
  };
  
  export const validateEmail = (email) => {
    if (typeof email !== 'string') {
      return 'El email debe ser una cadena de texto';
    }
  
    if (!email.includes('@')) {
      return 'El email no es válido';
    }
  
    return ''; // Validación exitosa
  };
  
  export const validatePhoneNumber = (phoneNumber) => {
    if (typeof phoneNumber !== 'string') {
      return 'El número de teléfono debe ser una cadena de texto';
    }
  
    if (phoneNumber.length !== 8 || !/^\d+$/.test(phoneNumber)) {
      return 'El número de teléfono debe contener 8 dígitos';
    }
  
    return ''; // Validación exitosa
  };
  
  export const validateCI = (ci) => {
    if (typeof ci !== 'string') {
      return 'El número de carnet debe ser una cadena de texto';
    }
  
    if (ci.length > 15) {
      return 'El número de carnet no puede tener más de 15 caracteres';
    }
  
    if (!/^\d+$/.test(ci)) {
      return 'El número de carnet debe contener solo números';
    }
  
    return ''; // Validación exitosa
  };
  
  export const validateAge = (age) => {
    console.log(typeof age);
    if (typeof age != 'number') {
      return 'La edad debe ser un número';
    }
  
    if (age < 0 || age > 100) {
      return 'La edad debe estar entre 0 y 100 años';
    }
  
    return ''; // Validación exitosa
  };
  