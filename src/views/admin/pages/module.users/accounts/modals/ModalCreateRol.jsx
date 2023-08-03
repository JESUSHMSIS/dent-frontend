import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import '../../../../../../styles/admin/rol.modal.create.css';

import { styleModalPrefab } from '../../../../../../styles/modals';
import { addRol } from '../../../../../../helpers';

import { usePermissionStore, useRoleStore } from '../../../../../../hooks';
import { useSelector } from 'react-redux';

export const ModalCreateRol = ({modal, closeModal, roles}) =>{

  const definedWidthRol = ()=>{
    const width = window.innerWidth;
    if(width < 500){
      return width - 100;
    }else{
      return 400;
    }
  }
  
  const [isDisabled, setIsDisabled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(definedWidthRol());
  const styleModal = {
    ...styleModalPrefab,
    content: {
      ...styleModalPrefab.content,
      width: windowWidth,
      height: 'auto',
    }  
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(definedWidthRol());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const { permissions = [] } = useSelector((state) => state.permissions);
  const [permissions_search, setPermissions] = useState(permissions);

  useEffect(() => {
    setPermissions(permissions);
  }, [permissions]);
  
  // Filtrar permisos
  const searchPermission=(permission)=>{
    const regex = new RegExp(permission, 'i');

    const filter_name = permissions.filter(
      (permission) => regex.test(permission.name)
    );

    setPermissions(filter_name);
  }

  const { getPermissions } = usePermissionStore();
  const { postRol } = useRoleStore();

  useEffect(()=>{
    getPermissions();
  },[]);


  // Agregar permisos al rol
  const [perm_rol, setPermRol] = useState([]);
  const AddPermissions = (permission, state) =>{
    if(state){
      setPermRol((prev)=>[...prev, permission]);
    }else{
      setPermRol((prev)=> prev.filter((per_ac)=> per_ac !== permission ));
    }
  }

  const struct_data = {
    name : '',
    permissions : []
  };
  const [data, setData] = useState(struct_data);
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((data_pre)=>({
      ...data_pre,
      [name]: value 
    }));
  }

  const CreateRol = async ()=>{
    data.permissions = perm_rol;
    const pre_res = addRol(data);
    if(pre_res.length > 0){
      pre_res.map(res => {
        setIsDisabled(true);
        toast.info(res, {
          onClose: ()=>{
            setIsDisabled(false);
          }
        });
      })
    }else{
      const response = await postRol(data);
      if(response){
        setIsDisabled(true);
        toast.success("Se creo el rol con exito!",{
          onClose: ()=>{
            setData(struct_data);
            setPermRol([]);
            setIsDisabled(false);
            closeModal();
          },
        });
      }else{
        toast.error('No se pudo crear el rol, consulte con el administrador');
      }
    }
  }


  return (
    <Modal
      isOpen={modal}
      style={styleModal}
    >
      <div className='content-create-rol'>
        <div className='content-name-rol'>
          <div>
            <label htmlFor="rolInput">
              Ingrese un rol:
            </label>
          </div>
          <div>
            <input
              name='name'
              style={{marginTop: 10}} 
              type="text"
              onChange={handleData}
              id='rolInput'
              className='custom-input'
              placeholder='Nombre del rol'
            />
          </div>
        </div>
        <div className='content-permissions-rol'>
          <div className='search-permission'>
            <div>
              <label htmlFor="permission">
                Buscar permisos
              </label>
            </div>
            <div>
              <input
                disabled={isDisabled}
                style={{marginTop: 10}} 
                type="text"
                id='rolInput'
                className='custom-input'
                placeholder='Ingresar nombre de permiso'
                onChange={(e)=>{
                  searchPermission(e.target.value)
                }}
              />
            </div>
          </div>
          <div className='content-permissions'>
            <table>
              <thead>
              </thead>
              <tbody>
                {
                  permissions_search.map(permission => {
                    return (
                      <tr key={permission.id}>
                        <td>
                          <label htmlFor="">
                            {permission.name}
                          </label>
                        </td>
                        <td>
                          <input 
                            disabled={isDisabled}
                            className='custom-checkbox'
                            checked={perm_rol.includes(permission.id) ? true : false}
                            type="checkbox"
                            onChange={(e)=>{
                              const state = e.target.checked;
                              AddPermissions(permission.id, state);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className='content-btn-modal center'>
          <button
            disabled={isDisabled}
            className='accept-btn'
            onClick={CreateRol}
          >
            Crear
          </button>
          <button
            disabled={isDisabled}
            onClick={()=>{
              setPermRol([]);
              closeModal();
            }}
            className='cancel-btn'
          >
            Cancelar
          </button>
        </div>
      </div>
      <ToastContainer className="custom-toast-container" />
    </Modal>
  );
}