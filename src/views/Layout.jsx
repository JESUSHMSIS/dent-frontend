import {useState} from 'react';
import {Navigation} from './menu/Navigation';
import {Search} from './menu/Search';
import GetUsers from  './admin/pages/module.users/users/GetUsers'

export const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  // const cerrarSesion = () => {
  //   window.location.href = './login';
  // };
  
  // Array con la información de los elementos del menú
  const menuItems = [
    { icon: 'settings-outline', title: 'Settings', path : 'users' },
    { icon: 'people-outline', title: 'Users' },
    { icon: 'people-circle-outline', title: 'Accounts' },
    { icon: 'chatbubble-outline', title: 'Messages' },
    { icon: 'help-outline', title: 'Help' },
    { icon: 'settings-outline', title: 'Settings' },
    { icon: 'lock-closed-outline', title: 'Password' },
    { icon: 'log-out-outline', title: 'Sign Out' },
  ];

  return (
    <div className={`container${isActive ? ' active' : ''}`}>
      <Navigation menuItems={menuItems} />
      <Search>
        {children}
      </Search>
      <GetUsers />
      {children}
    </div>
  );
};
