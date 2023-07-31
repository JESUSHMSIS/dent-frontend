import { useState } from 'react';
import Logout from './menu/Logout';
import {Navigation} from './menu/Navigation';
import {Search} from './menu/Search';
import { getMenuItems } from '../helpers';


export const Layout = ({children}) => {

  
  const [isActive, setIsActive] = useState(false);
  
  const handleToggleClick = () => {
    setIsActive((prevState) => !prevState);
  };


  return (
    <div className='container'>
      <Navigation 
        menuItems={getMenuItems()}
        isActive={isActive}
        handleToggleClick={handleToggleClick}
      />         
      <Search
        isActive={isActive}
        handleToggleClick={handleToggleClick}
      >
        {children}
      </Search>
    </div>
  );
};
