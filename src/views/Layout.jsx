import React, {useState} from 'react';
import {Navigation} from './menu/Navigation';
import {Search} from './menu/Search';

export const Layout = ({ children }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = (index) => {
    setHoveredItem(index);
  };

  const handleToggleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const cerrarSesion = () => {
    window.location.href = './login';
  };
  
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
      <Search />
      {children}
    </div>
  );
};
