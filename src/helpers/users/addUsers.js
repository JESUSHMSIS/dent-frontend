// helpers/addUser.js

export const validateName = (name) => {
  if (!/^[A-Za-z\s]+$/.test(name)) {
    return 'El nombre debe contener solo letras y espacios';
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
  if (!/^[A-Za-z\s]+$/.test(lastName)) {
    return 'El apellido debe contener solo letras y espacios';
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
  if (!/^\d{1,10}$/.test(phoneNumber)) {
    return 'El número de teléfono debe contener solo números';
  }

  return ''; // Validación exitosa
};

export const validateCI = (ci) => {
  if (!/^\d+$/.test(ci)) {
    return 'El número de carnet debe contener solo números';
  }

  if (ci.length > 15) {
    return 'El número de carnet no puede tener más de 15 caracteres';
  }

  return ''; // Validación exitosa
};

export const validateAge = (age) => {
  if (typeof age !== 'number') {
    return 'La edad debe ser un número';
  }

  if (age < 0 || age > 100) {
    return 'La edad debe estar entre 0 y 100 años';
  }

  return ''; // Validación exitosa
};
