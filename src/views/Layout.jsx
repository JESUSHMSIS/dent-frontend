
import {Navigation} from './menu/Navigation';
import {Search} from './menu/Search';


export const Layout = ({children}) => {
  
  const isActive = true;
  
  // Array con la información de los elementos del menú
  const menuItems = [
    { icon: 'settings-outline', title: 'Settings', path : 'otro' },
    { icon: 'people-outline', title: 'Users', path : 'otro' },
    { icon: 'people-circle-outline', title: 'Accounts', path : 'accounts' },
    // { icon: 'chatbubble-outline', title: 'Messages', path : 'accounts' },
    // { icon: 'help-outline', title: 'Help', path : 'accounts' },
    // { icon: 'settings-outline', title: 'Settings', path : 'accounts' },
    // { icon: 'lock-closed-outline', title: 'Password', path : 'accounts' },
    // { icon: 'log-out-outline', title: 'Sign Out', path : 'otro' },
  ];

  return (
    <div className={`container${isActive ? ' active' : ''}`}>
      <Navigation menuItems={menuItems} />
      <Search>
        {children}
      </Search>
    </div>
  );
};
