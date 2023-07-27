import React from 'react';

const DeleteUser = ({ onDelete, onCancel }) => {
  return (
    <div>
      <h3>¿Estás seguro de que deseas eliminar este usuario?</h3>
      <div>
        <button onClick={onDelete}>Eliminar</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteUser;
