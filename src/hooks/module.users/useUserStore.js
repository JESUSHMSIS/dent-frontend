import { useDispatch } from 'react-redux';
import { cafeApi } from '../../services';
import { setUsers, setAddUser, setUpdateUser, setDeleteUser } from '../../store/user/userSlices';

export const useUserStore = () => {

    const dispatch = useDispatch();

    const getUser = async () => {
        const { data } = await cafeApi.get('/user');
        console.log(data.usuarios)
        dispatch(setUsers({ users: data.usuarios }))
    }
    const postUser = async (info) => {
        try {
            const { data } = await cafeApi.post('/user/', info);
            console.log(data.usuarios)
            dispatch(setAddUser({ user: data.user }));
            console.log('usuario creado correctamente')
        } catch (error) {
            console.log(error.response.data.errors[0].msg)
        }
    }
    const putUser = async (info) => {
        try {
            const { data } = await cafeApi.put(`/user?id=${info.id}`, info);
            console.log(data)
            dispatch(setUpdateUser({ user: data.usuario }));
            console.log('usuario actualizado correctamente')
        } catch (error) {
            console.log(error.response.data.errors[0].msg)
        }
    }
    const deleteUser = async (id) => {
        try {
            // Intentamos eliminar el usuario usando el ID proporcionado
            const { data } = await cafeApi.delete(`/user?id=${id}`);
            
            // Si se eliminó correctamente, ejecutamos el siguiente código
            dispatch(setDeleteUser({ id }));
            console.log('Usuario eliminado correctamente:', data);
        } catch (error) {
            // Si se produjo un error, manejamos el error aquí
            if (error.response && error.response.data && error.response.data.errors && error.response.data.errors[0]) {
                console.log('Error al eliminar el usuario:', error.response.data.errors[0].msg);
            } else {
                console.log('Error desconocido al eliminar el usuario:', error.message);
            }
        }
    };



    return {
        //* Métodos
        getUser,
        postUser,
        putUser,
        deleteUser,
    }

}