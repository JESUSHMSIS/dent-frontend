
import {useState} from 'react';

export const Search = ({ children })=>{

  const [isActive, setIsActive] = useState(false);
  
  const handleToggleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return(

    <div className={`main${isActive ? ' active' : ''}`}>
      <div className="toggle" onClick={handleToggleClick}>
        <ion-icon name={isActive ? 'chevron-forward-outline' : 'chevron-back-outline'} />
      </div>

      <div className="details">
        {children}
      </div>
    </div>

  );
};

export default Search;