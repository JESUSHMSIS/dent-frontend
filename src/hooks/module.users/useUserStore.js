import { useDispatch } from 'react-redux';
import { cafeApi } from '../../services';
import { setUsers, setAddUser, setUpdateUser, setDeleteUser } from '../../store/user/userSlices';
import { toast } from 'react-toastify'; // Importar Toastify

export const useUserStore = () => {
    const dispatch = useDispatch();

    const getUser = async () => {
        const { data } = await cafeApi.get('/user');
        console.log(data.usuarios);
        dispatch(setUsers({ users: data.usuarios }));
    };

    const postUser = async (info) => {
        try {
            const { data } = await cafeApi.post('/user/', info);
            console.log(data.usuarios);
            dispatch(setAddUser({ user: data.user }));
            // Mostrar mensaje de éxito con Toastify
            toast.success('Usuario creado correctamente', {
                position: 'top-right',
                autoClose: 3000, // Duración del mensaje en milisegundos (3 segundos en este caso)
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log(error.response.data.errors[0].msg);
            // Mostrar mensaje de error con Toastify
            toast.error(error.response.data.errors[0].msg , {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const putUser = async (info) => {
        try {
            const { data } = await cafeApi.put(`/user?id=${info.id}`, info);
            console.log(data);
            dispatch(setUpdateUser({ user: data.usuario }));
            // Mostrar mensaje de éxito con Toastify
            toast.success('Usuario actualizado correctamente', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log(error.response.data.errors[0].msg);
            // Mostrar mensaje de error con Toastify
            toast.error(error.response.data.errors[0].msg, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const deleteUser = async (id) => {
        try {
            // Intentamos eliminar el usuario usando el ID proporcionado
            const { data } = await cafeApi.delete(`/user?id=${id}`);

            // Si se eliminó correctamente, ejecutamos el siguiente código
            dispatch(setDeleteUser({ id }));
            console.log('Usuario eliminado correctamente:', data);
            // Mostrar mensaje de éxito con Toastify
            toast.success('Usuario eliminado correctamente', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            // Si se produjo un error, manejamos el error aquí
            if (error.response && error.response.data && error.response.data.errors && error.response.data.errors[0]) {
                console.log('Error al eliminar el usuario:', error.response.data.errors[0].msg);
            } else {
                console.log('Error desconocido al eliminar el usuario:', error.message);
            }
            // Mostrar mensaje de error con Toastify
            toast.error('Error al eliminar el usuario', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return {
        //* Métodos
        getUser,
        postUser,
        putUser,
        deleteUser,
    };
};
