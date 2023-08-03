import React from 'react';

const DeleteUser = ({ onDelete, onCancel }) => {
  return (
    <div style={{color:'#fff', backgroundColor:'0083ff'}}>
      <h3>¿Estás seguro de que deseas eliminar este usuario?</h3>
      <div className='content-btn-modal end'>
        <button onClick={onDelete} style={{backgroundColor:'#ff0000'}}>Eliminar</button>
        <button onClick={onCancel} style={{backgroungColor:'#00bb2d'}}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteUser;
