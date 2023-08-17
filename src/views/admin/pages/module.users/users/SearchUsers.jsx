// import  {useState} from 'react';
// import Modal from 'react-modal';
import { useState } from "react";
import Modal from "react-modal";
import AddUser from "./AddUser";
import { styleModalPrefab } from '../../../../../styles/modals';
import {ToastContainer} from 'react-toastify';


const SearchUsers = ({searchAccount}) => {
  const styleModal = {
    ...styleModalPrefab,
    content: {
      ...styleModalPrefab.content,
      width: 400,
      height: 460,
    }  
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className='header-accounts'>
      <div className='content-search'>
        <div>
          <input 
            type='text'
            className="custom-input"
            placeholder='Search accounts'
            onChange={(e)=>searchAccount(e.target.value)}
          />
        </div>
        <div>
          <select name="" id="" className="custom-select">
            <option value="uno">Opcion1</option>
          </select> 
        </div>
      </div>
      <div className='content-create'>
        <div>
          <button className="custom-btn" onClick={openModal} style={{marginTop:'40px'}}>
            Añadir usuario
            </button>
        </div>
         {/* Modal para agregar usuario */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Usuario"
        ariaHideApp={false}
        style={styleModal}
      >
        {/* Pasamos closeModal como prop al componente AddUser */}
        <AddUser onCloseForm={closeModal} />
        <ToastContainer className="custom-toast-container" />
      </Modal>
      </div>


    </div>
  );
}


export default SearchUsers;