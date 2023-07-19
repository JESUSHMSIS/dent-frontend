import React, {useState} from 'react';

export const Search = ()=>{

  const [isActive, setIsActive] = useState(false);
  
  const handleToggleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return(

    <div className={`main${isActive ? ' active' : ''}`}>
      <div className="topbar">
        <div className="toggle" onClick={handleToggleClick}>
          <ion-icon name={isActive ? 'chevron-forward-outline' : 'chevron-back-outline'} />
        </div>

        <div className="search">
          <label>
            <input type="text" placeholder="Search here" />
            <ion-icon name="search-outline" />
          </label>
        </div>

        <div className="user">
          <img src="assets/imgs/customer01.jpg" alt="" />
        </div>
      </div>
    </div>

  );
}