import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import { useAccountStore } from '../../../../../../hooks';

import { styleModalPrefab } from '../../../../../../styles/modals';
import '../../../../../../styles/admin/accounts.modal.delete.css';


export const ModalDeleteAccount = ({modal, closeModal, account}) => {

  const { deleteAccount } = useAccountStore();

  const definedWidth = ()=>{
    const width = window.innerWidth;
    if(width > 580){
      return 500;
    }
    else if(width < 580){
      return width - 100;
    }
  }
  
  const [windowWidth, setWindowWidth] = useState(definedWidth());
  styleModalPrefab.content.width = windowWidth;
  styleModalPrefab.content.height= 280;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(definedWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const DeleteAccountConf = async ()=>{
    if(await deleteAccount(account)){
      toast.success('Se elimino la cuenta correctamente');
    }else{
      toast.error('No se pudo eliminar la cuenta por alguna razon');
    }

    closeModal();
  }

  return (
    <Modal
      isOpen={modal}
      style={styleModalPrefab}
    >
      <div className='content-delete-account'>
        <div className='content-delete-inf'>
          <h2>¿Esta seguro de que quiere eliminar esta cuenta?</h2>
        </div>
        <div className='content-btn-modal end'>
          <button 
            className='accept-btn'
            onClick={DeleteAccountConf}  
          >
            Si
          </button>
          <button
            className='cancel-btn'
            onClick={closeModal}
          >
            Cancelar
          </button>
        </div>
      </div>
      <ToastContainer className="custom-toast-container" />
    </Modal>
  );
}