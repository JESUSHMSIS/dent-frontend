import { useAuthStore } from '../../hooks/useAuthStore';

const Logout = () => {
  const { startLogout } = useAuthStore();

  return (
    <button onClick={startLogout}>
      Cerrar sesión
    </button>
  );
};

export default Logout;
